import "./ModalWindow.css";
// import { React, useState, useContext } from 'react';

function ModalWindow (props) {
  const classModal = props.modalOpen ? "modal" : "modal modal_close"
  return(
    <section className={classModal}>
      <div className="modal__overflow"></div>
      <div className="modal__conteiner">
        <button className="modal__button-close" onClick={props.handleClose}></button>
        <p className="modal__text">{props.info.text}</p>
      </div>
    </section>
  )
}

export default ModalWindow;
