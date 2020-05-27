import React from "react";

import "./navigator.scss";

const Navigator = (props) => {
  const { form, step, reset, nextStep, addToCurrent } = props;

  const renderNext = () => {
    if (step === 1) {
      const disabled = !form.registration || form.registration.syncErrors;

      const onClick = () => {
        reset("registration");

        nextStep();

        const { type, firstName, lastName, email } = form.registration.values;

        addToCurrent({ type, firstName, lastName, email });
      };

      return (
        <div className="next sc-form-button sc-md">
          <button type="button" onClick={() => onClick()} disabled={disabled}>
            <i className="sc-icon-right"></i>

            <span>Next</span>
          </button>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="next sc-form-button sc-md">
          <button type="button" onClick={nextStep}>
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
