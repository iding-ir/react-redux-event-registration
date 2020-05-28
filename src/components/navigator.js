import React from "react";

import "./navigator.scss";

const Navigator = (props) => {
  const {
    form,
    step,
    current,
    reset,
    nextStep,
    addToCurrent,
    clearCurrent,
    addUser,
  } = props;

  const renderNext = () => {
    if (step === 1) {
      const disabled = !form.registration || form.registration.syncErrors;

      const onClick = () => {
        reset("registration");

        nextStep();

        const { type, firstName, lastName, email } =
          form.registration.values || {};

        addToCurrent({ type, firstName, lastName, email });
      };

      return (
        <div className="next sc-form-button sc-md">
          <button type="button" onClick={() => onClick()} disabled={false}>
            <i className="sc-icon-right"></i>

            <span>Next</span>
          </button>
        </div>
      );
    } else if (step === 2) {
      const onClick = () => {
        nextStep();

        addUser(current);

        clearCurrent();
      };

      return (
        <div className="next sc-form-button sc-md">
          <button type="button" onClick={() => onClick()}>
            <i className="sc-icon-right"></i>

            <span>Next</span>
          </button>
        </div>
      );
    }
  };

  return <div className="navigator">{renderNext()}</div>;
};

export default Navigator;
