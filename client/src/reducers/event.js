import {
  UPDATE_EVENT,
} from '../constants';

export default function event(state = {}, action) {
  switch (action.type) {
    case UPDATE_EVENT: {
      // TODO: may need to return a struct later if I want to
      // store more than just an event object here.
      return action.payload.event;
    }

    default:
      return state;
  }
}