import {
  UPDATE_EVENT
} from '../constants';

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    payload: {
      event,
    },
  };
}
