import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import {
  GRAPHCOOL_ENDPOINT,
  PROJECT_ID,
} from './Constants';

const network = Network.create((operation, variables) => {
  return fetch(GRAPHCOOL_ENDPOINT + PROJECT_ID, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(resp => {
    return resp.json();
  });
});

const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;
