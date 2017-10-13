import fetch from 'dva/fetch';
import token from './token';
import { baseUrl } from '../../env';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const opts = { ...options, 'mode': 'cors' };
  opts.headers = {
    ...opts.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + token.get(),

  };
  const finalUrl = baseUrl + url;
  return fetch(finalUrl, opts)
    .then(checkStatus)
    .then(parseJSON)
    //.then(data => ({ data }))
    //.catch(err => ({ err }));
}
