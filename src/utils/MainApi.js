import { MOVIES_URL, WEB_URL } from './constants';

class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json()
        .then(err => {
          throw err;
        });
    }
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    }).then(res => this._handleServerResponse(res));
  }

  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${MOVIES_URL}${data.image.url}`,
        thumbnail: data.thumbnail || `${MOVIES_URL}${data.image.formats.thumbnail.url}`,
        trailerLink: data.trailerLink,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    }).then(res => {
      return this._handleServerResponse(res);
    });
  }

  deleteSavedMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => {
      return this._handleServerResponse(res);
    });
  }

  registration({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      credentials: 'include',

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    }).then(res => {
      return this._handleServerResponse(res);
    });
  }

  login( email, password ) {
    console.log(email, password)
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then(res => {
      return this._handleServerResponse(res);
    }).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token)
        return data
      }
    })
  }

  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    }).then(res => this._handleServerResponse(res));
  }
  
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        return this._handleServerResponse(res)});
  }

  updateUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    }).then(res => {
      return this._handleServerResponse(res);
    });
  }
}

const mainApi = new MainApi({
  url: WEB_URL,
});

export default mainApi;
