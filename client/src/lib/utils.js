
function isEmpty(obj) {
  return !obj || (Object.keys(obj).length === 0 && obj.constructor === Object);
}

function updateState(t, stateName, val) {
  const state = {};
  state[stateName] = val;
  t.setState(state);
}

export { isEmpty, updateState }