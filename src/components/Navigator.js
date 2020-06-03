import React from "react";

import "./Navigator.scss";

const Navigator = (props) => {
  const {
    form,
    step,
    data,
    current,
    users,
    reset,
    setStep,
    addToCurrent,
    clearCurrent,
    addUser,
    clearUsers,
    showModal,
  } = props;

  const renderNext = () => {
    if (step === 1) {
      const disabled = !form.registration || form.registration.syncErrors;

      const onClick = () => {
        reset("registration");

        setStep(2);

        const { type, firstName, lastName, email } =
          form.registration.values || {};

        const price = data.registration_types.filter(
          (registration_type) =>
            registration_type.event_registration_type_id === parseInt(type)
        )[0].event_registration_type_price;

        addToCurrent({ type, firstName, lastName, email, price });
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
      const onClick = () => {
        setStep(3);

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
    } else if (step === 3) {
      const disabled = !form.payment || form.payment.syncErrors;

      const onClick = () => {
        showModal();
      };

      return (
        <div className="next sc-form-button sc-md">
          <button type="button" onClick={() => onClick()} disabled={disabled}>
            <i className="sc-icon-right"></i>

            <span>Next</span>
          </button>
        </div>
      );
    }
  };

  const renderCancel = () => {
    if (step === 1 && Object.keys(users).length > 0) {
      const onClick = () => {
        setStep(3);

        clearCurrent();
      };

      return (
        <div className="cancel sc-form-button sc-md">
          <button type="button" onClick={() => onClick()}>
            <i className="sc-icon-left"></i>

            <span>Cancel</span>
          </button>
        </div>
      );
    } else if (step === 2) {
      const onClick = () => {
        setStep(1);

        clearCurrent();
      };

      return (
        <div className="cancel sc-form-button sc-md">
          <button type="button" onClick={() => onClick()}>
            <i className="sc-icon-left"></i>

            <span>Cancel</span>
          </button>
        </div>
      );
    } else if (step === 3) {
      const onClick = () => {
        setStep(1);

        clearUsers();
      };

      return (
        <div className="cancel sc-form-button sc-md">
          <button type="button" onClick={() => onClick()}>
            <i className="sc-icon-left"></i>

            <span>Reset</span>
          </button>
        </div>
      );
    }
  };

  return (
    <div className="navigator">
      {renderCancel()}
      {renderNext()}
    </div>
  );
};

export default Navigator;
