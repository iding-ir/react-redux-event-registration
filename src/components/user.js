import React from "react";

import "./user.scss";

const User = (props) => {
  const { data, current } = props;

  const { registration_types, event_currency } = data;

  const { type, firstName, lastName, workshops: currentWorkshops } = current;

  const registrationAmount = Object.values(registration_types).filter(
    (value) => value.event_registration_type_id === parseInt(type)
  )[0].event_registration_type_price;

  const workshopsAmount = currentWorkshops.reduce((total, item) => {
    return total + item.event_workshop_price;
  }, 0);

  const amount = registrationAmount + workshopsAmount;

  return (
    <div className="user">
      <div className="registration">
        <div>Registration details for</div>

        <div className="description">
          {firstName} {lastName}
        </div>
      </div>

      <div className="amount">
        <div>AMOUNT</div>

        <div className="description">
          {amount} {event_currency}
        </div>
      </div>
    </div>
  );
};

export default User;
