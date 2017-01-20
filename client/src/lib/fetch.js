import {
  isEmpty,
} from './utils';

// TODO: We might be able to copy heroku configs into .env during build time.
// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = process.env.REACT_APP_NODE_API_URL;

function path(curr) {
  // TODO: use real path joining
  return `${API_URL}/${curr}`
}

async function post(url, data) {
  const response = await fetch(path(url), {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  // Assume every response is json.
  const body = await response.json();

  if (!body) {
    return undefined;
  }

  return body;
}

// TODO: test this guy.
async function get(url, data) {
  let newUrl = null;
  url = path(url);

  if (isEmpty(data)) {
    newUrl = url;
  } else {
    Object.keys(data).forEach(k => {
      const v = data[k];
      if (newUrl == null) {
        newUrl = `${url}?${k}=${v}`;
      } else {
        newUrl += `&${k}=${v}`;
      }
    });
  }

  const resp = await fetch(newUrl, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  });

  if (resp.status !== 200) {
    throw new Error(resp.statusText)
  }

  // Weird but I have to await twice.
  const body = await resp.json();

  if (!body) {
    return undefined
  }

  return body
}

export { post, get };
