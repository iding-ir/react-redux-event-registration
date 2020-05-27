import React from "react";

import "./navigator.scss";

const Navigator = (props) => {
  const { form, step, nextStep, prevStep, resetSteps } = props;

  const renderReset = () => {
    if (step === 2 || step === 3) {
      return (
        <div className="reset sc-form-button sc-md">
          <button type="button" onClick={resetSteps}>
            <i className="sc-icon-cross"></i>

            <span>Reset</span>
          </button>
        </div>
      );
    }
  };

  const renderPrev = () => {
    if (step === 2 || step === 3) {
      return (
        <div className="prev sc-form-button sc-md">
          <button type="button" onClick={prevStep}>
            <i className="sc-icon-left"></i>

            <span>Prev</span>
          </button>
        </div>
      );
    }
  };

  const renderNext = () => {
    if (step === 1 || step === 2) {
      console.log(form.registration);

      const disabled = !form.registration || form.registration.syncErrors;

      return (
        <div className="next sc-form-button sc-md">
          <button type="button" onClick={nextStep} disabled={disabled}>
            <i className="sc-icon-right"></i>

            <span>Next</span>
          </button>
        </div>
      );
    }
  };

  return (
    <div className="navigator">
      {renderReset()}

      {renderPrev()}

      {renderNext()}
    </div>
  );
};

export default Navigator;
