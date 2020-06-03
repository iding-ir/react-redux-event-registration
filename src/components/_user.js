import React from "react";

import "./user.scss";

const User = (props) => {
  const { data, current, removeUser, remove } = props;

  const { registration_types, event_currency } = data;

  const {
    type,
    firstName,
    lastName,
    email,
    workshops: currentWorkshops,
  } = current;

  const registration_type = Object.values(registration_types).filter(
    (value) => value.event_registration_type_id === parseInt(type)
  )[0];

  const registrationTitle = registration_type.event_registration_type_title;

  const registrationAmount = registration_type.event_registration_type_price;

  const workshopsAmount = currentWorkshops.reduce((total, item) => {
    return total + item.event_workshop_price;
  }, 0);

  const amount = registrationAmount + workshopsAmount;

  const renderAdditionalTitle = () => {
    if (currentWorkshops.length > 0) {
      return <div className="head sc-col-xs-12">Additional Services</div>;
    }
  };

  const renderRemove = () => {
    if (remove) {
      return (
        <div
          className="remove"
          onClick={() => {
            removeUser(email);
          }}
        >
          -
        </div>
      );
    }
  };

  return (
    <div className="user sc-row">
      {renderRemove()}

      <div className="registration sc-col-xs-8">
        <div>Registration details for</div>

        <div className="description">
          {firstName} {lastName}
        </div>
      </div>

      <div className="amount sc-col-xs-4">
        <div>AMOUNT</div>

        <div className="description">
          {amount} {event_currency}
        </div>
      </div>

      <div className="details sc-col-xs-12 sc-row">
        <div className="head sc-col-xs-12">Registration Information</div>

        <div className="title sc-col-xs-8">{registrationTitle}</div>

        <div className="amount sc-col-xs-4">
          {registrationAmount} {event_currency}
        </div>
      </div>

      <div className="details sc-col-xs-12 sc-row">
        {renderAdditionalTitle()}

        {currentWorkshops.map((currentWorkshop, index) => {
          return (
            <div key={index} className="sc-col-xs-12 sc-row">
              <div className="title sc-col-xs-6">
                {currentWorkshop.event_workshop_title}
              </div>

              <div className="amount sc-col-xs-6">
                {currentWorkshop.event_workshop_price} {event_currency}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
