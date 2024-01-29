import { MOVIES_URL, ERR_SERVER } from './constants';

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(ERR_SERVER);
    }
  }

  getMovieCardsFromServer() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    }).then(res => this._handleServerResponse(res));
  }
}

const moviesApi = new Api({
  url: MOVIES_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default moviesApi;
