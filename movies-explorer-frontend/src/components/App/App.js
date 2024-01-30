import "./App.css";
import { React, useEffect, useState } from 'react';
import Main from "../Main/Main.js";
import '../../index.css';
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Page404 from "../Page404/Page404.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import MoviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  ERR_SERVER,
  ERR_VALID,
  GRID_CARD_5,
  GRID_CARD_12,
  GRID_CARD_15,
  GRID_CARD_16,
  SCRIN_1279,
  SCRIN_1278,
  SCRIN_990,
  SCRIN_989,
  SCRIN_708,
  SCRIN_707,
  SCRIN_320
} from '../../utils/constants';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // ____________ пользователь
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // ____________ фильмы
  const [allMovies, setMovies] = useState([]);
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedSearchQuery, setSavedSearchQuery] = useState('');
  const [movieIsNotFound, setMovieIsNotFound] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [readLess, setReadLess] = useState(Boolean);
  // ____________ регулирование размеров страниц
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPage, setMoviesPage] = useState('');
  const lastIndex = currentPage * moviesPage;
  const firstIndex = lastIndex - moviesPage;
  const currentMoviePage = allMovies.slice(firstIndex, lastIndex);
  const [screenWidth, setScreenWidth] = useState(SCRIN_1279);
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const [windowSizeResize, setWindowSizeResize] = useState(false);
  // ____________ error | info
  const [errors, setErrors] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);

  // _______________________________________________________________ размер окна
  useEffect(() => {
    setScreenWidth(window.screen.width);

    window.onresize= () => {
      setTimeout(() => {
        setScreenWidth(window.screen.width);
      }, 1000);
    };

    return () => {
      window.onresize = null;
    };
  }, []);


  useEffect(() => {
    const handleScrinResize= () => {
      setWindowSize([{
        width: window.innerWidth,
        height: window.innerHeight
      }]);
      setWindowSizeResize(true);
    };
    window.addEventListener('resize', handleScrinResize);

    if (screenWidth >= SCRIN_1279) {
      setMoviesPage(GRID_CARD_16);
    } else if (screenWidth <= SCRIN_1278 && screenWidth >= SCRIN_990) {
      setMoviesPage(GRID_CARD_15);
    } else if (screenWidth <= SCRIN_989 && screenWidth >= SCRIN_708) {
      setMoviesPage(GRID_CARD_12);
    } else if (screenWidth <= SCRIN_707 && screenWidth >= SCRIN_320) {
      setMoviesPage(GRID_CARD_5);
    }

    return () => {
      window.removeEventListener('resize', handleScrinResize);
    };
  }, [windowSize, windowSizeResize]);

  // _______________________________________________________________ регистрация
  function handleRegistration(formValue, setErrMessage, setInfo) {
    const { email, password, name } = formValue;
    console.log( email, password, name )

    if (!email || !password || !name) {
      setErrMessage(ERR_VALID);
      return;
    }
    setIsLoading(true);
    mainApi
      .registration({ email, password, name })
      .then(data => {
        setTimeout(() => {
          setInfo(data.message);
        }, 1000);
        handleLogin({ email, password });
      })
      .catch(err => {
        setErrors(err.message);
      })
      .finally(() => {
        setInfo(null);
        setErrMessage(null);
        setIsLoading(false);
        setErrors(null);
      });
  }

  // _______________________________________________________________ авторизция
  function handleLogin(formValue, setErrorMessage) {
    console.log(formValue)
    if (!formValue.email || !formValue.password) {
      setErrorMessage(ERR_VALID);
      return;
    }
    const { email, password } = formValue;
    setIsLoading(true);
    mainApi
      .login( email, password )
      .then(data => {
        setTimeout(() => {
          setInfoMessage(data.message);
        }, 3000);
        setIsLoggedIn(true);

        navigate('/movies', { replace: true });
      })
      .catch(err => {
        setErrors(err.message);
      })
      .finally(() => {
        setInfoMessage(null);
        setIsLoading(false);
      });
  }

  // _______________________________________________________________ информация пользователя
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then(data => {
          setCurrentUser({
            _id: data.user._id,
            name: data.user.name,
            email: data.user.email
          });
        })
        .catch(err => {
          setErrors(err.message);
        });
    } else {
      return;
    }
  }, [isLoggedIn]);

  // _______________________________________________________________ проверка токена
  const checkToken = () => {
    mainApi
      .getContent()
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
        }
        if (!res) {
          return;
        }
      })
      .catch(err => {
        setIsLoggedIn(false);
        setErrors(err.message);
        if (location.pathname === '/signin') {
          navigate('/signin', { replace: true });
        } else if (location.pathname === '/') {
          navigate('/', { replace: true });
        }else if (location.pathname === '/signup') {
          navigate('/signup', { replace: true });
        } else if (location.pathname === '/movies' || '/saved-movies' || '/profile') {
          navigate('/404', { replace: true });
        }
      })
      .finally(() => {
        setTimeout(() => {
          setErrors(null);
        }, 3000);
      });
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!isLoggedIn)
      setTimeout(() => {
        setInfoMessage(null);
        setErrors(null);
      }, 3000);
  }, [isLoggedIn]);

  // _______________________________________________________________ выход из профиля
  function signOut() {
    localStorage.clear();
    setCurrentUser('');
    setIsLoggedIn(false);
    setMovies([]);
    setSavedMovieList([]);
    setSearchQuery('');
    window.sessionStorage.removeItem('lastRoute');
    navigate('/', { replace: true });
  }

  // _______________________________________________________________ изменение профиля
  function handleUpdateUser(data, setInfo, setErr, setFocus) {
    const { name, email} = data;
    setIsLoading(true);
    mainApi
      .updateUserInfo({ name, email })
      .then(data => {
        setCurrentUser(data);
        setErr(null);
        setInfo(data.message);
        setFocus(false)
      })
      .catch(err => {
        setErrors(err.message);
        setErr(err.validation ? err.validation.body.message : '');
      })
      .finally(() => {
        setErrors(null);
        setErr(null);
        setIsLoading(false);
      });
  }

  // _______________________________________________________________ сохранение фильма
  function handleSaveMovie(data, setIsSaved) {
    if (isLoggedIn) {
      setIsLoading(true);
      if (isLoggedIn) {
        mainApi
          .saveMovie(data)
          .then(savedMovie => {
            setSavedMovieList([savedMovie, ...savedMovieList]);
            setInfoMessage(savedMovie.message);
            setIsSaved(true);
          })
          .catch(err => {
            setErrors(data.message);
          })
          .finally(() => {
            setTimeout(() => {
              setErrors(null);
              setInfoMessage(null);
            }, 3000);
            setIsLoading(false);
          });
      }
    }
  }
  // _______________________________________________________________ удаление фильма
  function handleMovieDelete(id, setIsSaved) {
    if (isLoggedIn) {
      setIsLoading(true);
      mainApi
        .deleteSavedMovie(id)
        .then(movie => {
          const savedMovies = savedMovieList.filter(savedMovie => movie._id !== savedMovie._id);
          setSavedMovieList(savedMovies);
          setInfoMessage(movie.message);
          setIsSaved(false);
        })
        .catch(err => {
          setErrors(err.statusCode);
        })
        .finally(() => {
          setIsLoading(false);
          setTimeout(() => {
            setErrors(null);
            setInfoMessage(null);
          }, 4000);
        });
    }
  }

  // _______________________________________________________________ добавление выбранного фильма в список сохраненных
  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      mainApi
        .getSavedMovies()
        .then(data => {
          const myFavourites = data.movies.filter(el => el.owner === currentUser._id);
          setSavedMovieList(myFavourites.reverse());
          setTimeout(() => {
            setInfoMessage(data.message);
          }, 2000);
        })
        .catch(err =>
          setErrors(err.message)
        )
        .finally(() => {
          setErrors(null);
          setInfoMessage(null);
        });
    }
  }, [location.pathname, isLoggedIn]);

  function handleSaveSearch(query) {
    setSavedSearchQuery(query);
  }

  // _______________________________________________________________ поиск фильмов
  function handleSearchQuery({ query }, isChecked) {
    if (isLoggedIn) {
      setMovieIsNotFound(true);
      setIsLoading(true);
      MoviesApi.getMovieCardsFromServer()
        .then(movies => {
          const movieSearchList = movies
            .filter(
              item =>
                item.nameRU.toLowerCase().includes(query.toLowerCase()) ||
                item.nameEN.toLowerCase().includes(query.toLowerCase())
            )
            .filter(shortMovie => (isChecked ? shortMovie.duration <= 40 : shortMovie.duration));
          movieSearchList.length === 0 ? setMovieIsNotFound(true) : setMovieIsNotFound(false);
          setMovies(movieSearchList);
          localStorage.setItem('allMovies', JSON.stringify(allMovies));
          localStorage.setItem('movieSearchList', JSON.stringify(movieSearchList));
          localStorage.setItem('isChecked', JSON.stringify(isChecked));
          localStorage.setItem('query', JSON.stringify(query));
          setSearchQuery(query);
        })
        .catch(err => {
          setErrors(ERR_SERVER);
        })
        .finally(() => {
          setErrors(null);
          setIsLoading(false);
        });
    } else {
      return;
    }
  }
  // _______________________________________________________________ сохранение результата поиска
  useEffect(() => {
    if (location.pathname === '/movies') {
      const search = JSON.parse(localStorage.getItem('movieSearchList'));
      const isChecked = JSON.parse(localStorage.getItem('isChecked'));
      const query = JSON.parse(localStorage.getItem('query'));
      setSearchQuery(query);
      setMovies(search ? search : allMovies);
      setIsChecked(isChecked);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setCheckbox(false);
      setSavedSearchQuery('');
      setSavedMovieList(savedMovieList);
    }
  }, [location.pathname]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser: currentUser,
        isLoggedIn: isLoggedIn
      }}
    >
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                errors={errors}
                infoMessage={infoMessage}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                redirectPath={'/movies'}
                element={Movies}
                savedMovieList={savedMovieList}
                isLoggedIn={isLoggedIn}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearchQuery={handleSearchQuery}
                movieIsNotFound={movieIsNotFound}
                setMovieIsNotFound={setMovieIsNotFound}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                onMovieClick={handleSaveMovie}
                onMovieDelete={handleMovieDelete}
                errors={errors}
                infoMessage={infoMessage}
                setErrors={setErrors}
                isLoading={isLoading}

                allMovies={allMovies}
                setMovies={setMovies}
                currentMoviePage={currentMoviePage}

                setMoviesPage ={setMoviesPage}
                moviesPage ={moviesPage}
                windowSizeResize ={windowSizeResize}
                windowSize ={windowSize}
                readLess={readLess}
                setReadLess={setReadLess}
                screenWidth={screenWidth}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                redirectPath={'/saved-movies'}
                element={SavedMovies}
                savedMovieList={savedMovieList}
                setSavedMovieList={setSavedMovieList}
                isLoggedIn={isLoggedIn}
                savedQuery={savedSearchQuery}
                setSavedSearchQuery={setSavedSearchQuery}
                handleSaveSearch={handleSaveSearch}
                onMovieDelete={handleMovieDelete}
                checkbox={checkbox}
                setCheckbox={setCheckbox}
                setMovieIsNotFound={setMovieIsNotFound}
                errors={errors}
                infoMessage={infoMessage}
                setErrors={setErrors}
                isLoading={isLoading}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/"></Navigate>
              ) : (
                <Register handleRegistration={handleRegistration} isLoading={isLoading} errors={errors} set />
              )
            }
          />
          <Route
            path="/signin"
            element={
              isLoggedIn ? (
                <Navigate to="/"></Navigate>
              ) : (
                <Login handleLogin={handleLogin} isLoading={isLoading} errors={errors} set />
              )
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                redirectPath={'/profile'}
                element={Profile}
                isLoggedIn={isLoggedIn}
                onUpdateUser={handleUpdateUser}
                onLogout={signOut}
                errors={errors}
                infoMessage={infoMessage}
                isLoading={isLoading}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/*"
            element={
              <Page404
              isLoggedIn={isLoggedIn}
              />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
