import React from "react";
import * as classnames from "classnames";

import "./Modal.scss";
import printToConsole from "../utils/printToConsole";

const Modal = (props) => {
  const { users, modal, hideModal } = props;

  const modalClasses = classnames("sc-modal", {
    "sc-is-active": modal,
  });

  const overlayClasses = classnames("sc-overlay", {
    "sc-is-active": modal,
  });

  return (
    <>
      <div className={modalClasses}>
        <div className="sc-card">
          <header className="sc-card-header">
            <h3>Lorem ipsum</h3>
          </header>

          <div className="sc-card-body">
            <p>Click "Print to Console" and check your broswer console.</p>
          </div>

          <footer className="sc-card-footer">
            <div className="sc-form-button sc-md sc-flex-rr">
              <button
                type="button"
                onClick={() => {
                  printToConsole(users);
                }}
              >
                <span>Print to Console</span>
              </button>
            </div>
          </footer>
        </div>
      </div>

      <div
        className={overlayClasses}
        onClick={() => {
          hideModal();
        }}
      ></div>
    </>
  );
};

export default Modal;
