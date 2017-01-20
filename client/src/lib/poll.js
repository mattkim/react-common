import React from 'react';
import cx from 'classnames';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  Checkbox,
} from 'react-bootstrap';
import {
  Addon,
} from 'react-bootstrap/lib/InputGroup';
import {
  isEmpty,
  updateState,
} from './utils';
import {
  createInputChangeHandler,
} from './input';

// Renderers

function createPolls(t, stateName) {
  var items = t.state[stateName];

  if (isEmpty(items)){
    return;
  }

  return (
    <div>
      {createInnerPolls(t, stateName, items)}
      {createPollAdder(t, stateName, items)}
    </div>
  );
}

function createInnerPolls(t, stateName, items) {
  const res = [];

  for (const name in items) {
    const item = items[name];
    const displayName = item.displayName;
    const description = item.description;
    const values = item.values;

    if (item.enabled) {
      res.push(createInnerPoll(t, stateName, name, displayName, description, values))
    }
  }

  return res;
}

function createInnerPoll(t, stateName, name, displayName, description, values) {
  return (
    <Form onSubmit={addPollRow.bind(this, t, stateName, name)}>
      <FormGroup>
        <div className={cx("panel", "panel-default")}>
          <div className="panel-heading" style={{
            "background": "#ffffff",
          }}>
            <span style={{"font-weight": "bold"}}>{displayName}</span>
          </div>
          {/*<div className="panel-body">{description}</div>*/}
          { createPollRows(t, stateName, name, values) }
          <div style={{"padding": "10px"}}>
            {/*This technique allows the form control to be inline with the button*/}
            <Button type="submit" style={{"float": "right"}}>
              Done
            </Button>
            <div style={{"overflow": "hidden"}}>
              <FormControl
                className={cx("borderless-input", "")}
                placeholder={`Add ${displayName}`}
                value={t.state[createFormName(stateName, name)]}
                onChange={createInputChangeHandler(t, createFormName(stateName, name))}
              />
            </div>
          </div>
        </div>
      </FormGroup>
    </Form>
  );
}

function createPollRows(t, stateName, name, values) {
  const res = [];

  for (const val in values) {
    const props = values[val];
    if (props.enabled) {
      res.push(
        <li className="list-group-item">
          <Checkbox
            inline
            checked={props.checked}
            onChange={handleCheckbox.bind(this, t, stateName, name, val)}
          >
            {val}
          </Checkbox>
          &nbsp;-&nbsp;{values[val].votes}
          &nbsp;-&nbsp;
          <a onClick={deletePollRow.bind(this, t, stateName, name, val)}>
            x
          </a>
        </li>
      )
    }
  }

  return (
    <ul className="list-group">
      {res}
    </ul>
  );
}

function createPollAdder(t, stateName, items) {
  return (
    <div style={{"text-align": "center"}}>
      <Form onSubmit={addPoll.bind(this, t, stateName, "select")}>
        <div className="select-style" style={{
          "display": "inline-block",
          "margin": "1em",
        }}>
          <select
            onChange={createInputChangeHandler(t, createFormName(stateName, "select"))}
            value={t.state[createFormName(stateName, "select")]}
          >
            {createSelectRows(items)}
          </select>
        </div>
        <Button type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

// TODO: enforce ordering.
function createSelectRows(items) {
  const res = [];

  for (const name in items) {
    const item = items[name];
    const displayName = item.displayName;
    res.push(
      <option value={name}>{displayName}</option>
    );
  }

  return res;
}

// Handlers

function addPollRow(t, stateName, name, e) {
  e.preventDefault();

  const value = t.state[createFormName(stateName, name)];

  if (!value) {
    return;
  }

  const items = t.state[stateName];
  const item = items[name];
  const props = item.values[value];

  if (!props) {
    item.values[value] = {
      votes: 0,
      checked: false,
      enabled: true,
    };
  } else {
    // This means it used to exist, so we re-enable it.
    props.enabled = true;
  }

  updateState(t, stateName, items);

  // Reset value.
  const m = {};
  m[createFormName(stateName, name)] = "";
  t.setState(m);
}

function handleCheckbox(t, stateName, name, val, e) {
  const items = t.state[stateName];
  const item = items[name];
  const props = item.values[val];

  if (!props) {
    return;
  }

  props.checked = !props.checked;

  if (props.checked) {
    props.votes += 1;
  } else {
    props.votes -= 1;
  }

  updateState(t, stateName, items);
}

function deletePollRow(t, stateName, name, val, e) {
  e.preventDefault();
  const items = t.state[stateName];
  const item = items[name];
  const props = item.values[val];

  if (!props) {
    return;
  }

  props.enabled = false;

  updateState(t, stateName, items);
}

function addPoll(t, stateName, name, e) {
  e.preventDefault();
  const formName = createFormName(stateName, name);
  const pollName = t.state[formName];
  const items = t.state[stateName];
  const poll = items[pollName];

  if (isEmpty(poll)) {
    return;
  }

  poll.enabled = true;

  updateState(t, stateName, items);
}

// Utils

// Generate a form name to store our input form values in the state object.
// Keeping them at the root level greatly simplifies things.
// TODO: move this into a core form lib
function createFormName(stateName, name){
  return `${stateName}_${name}_form_value`;
}

export { createPolls };