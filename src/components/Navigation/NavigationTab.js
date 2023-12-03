import "./NavigationTab.css"
// import {Link} from "react-router-dom"
import React from 'react';

function NavigationTab() {

  return (
    <section className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__item-link link-hover" href="#project">
            О проекте
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__item-link link-hover" href="#techs">
            Технологии
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__item-link link-hover" href="#me">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavigationTab;
