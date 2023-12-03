import "./App.css"
import { React, useEffect, useState } from 'react';
import Main from "../Main/Main.js"
import '../../index.css';
import Movies from "../Movies/Movies.js"
import Profile from "../Profile/Profile.js"
import Login from "../Login/Login.js"
import Register from "../Register/Register.js"
import Page404 from "../Page404/Page404.js"
import SavedMovies from "../SavedMovies/SavedMovies.js"
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';

function App() {

  return (
      <div className="page">
        <Routes>
          <Route path="/" element={
            <Main />
          } />
          <Route path="/movies" element={
            <Movies />
          } />
          <Route path="/saved-movies" element={
            <SavedMovies />
          } />
          <Route path="/profile" element={
            <Profile />
          } />
          <Route path="/signin" element={
            <Login />
          } />
          <Route path="/signup" element={
            <Register />
          } />
          <Route path="*" element={
              <Page404 />
          } />
        </Routes>
      </div>
  );
}

export default App;
