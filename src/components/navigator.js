import React from "react";

import "./navigator.scss";

const Navigator = (props) => {
  const { step, nextStep, prevStep, resetSteps } = props;

  const renderReset = () => {
    if (step === 2 || step === 3) {
      return (
        <div class="reset sc-form-button sc-md">
          <button type="button" onClick={resetSteps}>
            <i class="sc-icon-cross"></i>

            <span>Reset</span>
          </button>
        </div>
      );
    }
  };

  const renderPrev = () => {
    if (step === 2 || step === 3) {
      return (
        <div class="prev sc-form-button sc-md">
          <button type="button" onClick={prevStep}>
            <i class="sc-icon-right"></i>

            <span>Prev</span>
          </button>
        </div>
      );
    }
  };

  const renderNext = () => {
    if (step === 1 || step === 2) {
      return (
        <div class="next sc-form-button sc-md">
          <button type="button" onClick={nextStep}>
            <i class="sc-icon-right"></i>

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
