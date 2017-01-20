import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App/App';
import Home from './components/Home/Home';
import BootstrapPanelTable from './components/Design/BootstrapPanelTable';
import InlineInputForm from './components/Design/InlineInputForm';
import GradientButtons from './components/Design/GradientButtons';
import ColorPalette from './components/Design/ColorPalette';
import CleanSelect from './components/Design/CleanSelect';
import PostStuff from './components/Design/PostStuff';
import GetStuff from './components/Design/GetStuff';
import './index.css';
import { createStore } from 'redux'
import { IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import reducer from './reducers/index'

// Configures redux provider with our app.
const store = createStore(reducer)
const Provide = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <App>
          {this.props.children}
        </App>
      </Provider>
    )
  }
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Provide}>
      <IndexRoute component={Home} />
      <Route path="design/bootstrap_panel_table" component={BootstrapPanelTable} />
      <Route path="design/inline_input_form" component={InlineInputForm} />
      <Route path="design/gradient_buttons" component={GradientButtons} />
      <Route path="design/color_palette" component={ColorPalette} />
      <Route path="design/clean_select" component={CleanSelect} />
      <Route path="design/post_stuff" component={PostStuff} />
      <Route path="design/get_stuff" component={GetStuff} />
    </Route>
  </Router>
), document.getElementById('root'))
