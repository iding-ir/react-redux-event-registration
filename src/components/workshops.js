import React from "react";
import * as classnames from "classnames";

import "./workshops.scss";

const Workshop = (props) => {
  const { data, step, current, addToWorkshops } = props;

  if (!current.type) {
    return "";
  }

  const { registration_types, workshops, event_currency } = data;

  const { type, firstName, lastName, workshops: currentWorkshops } = current;

  const classes = classnames("workshops", {
    show: step === 2,
  });

  const registrationAmount = Object.values(registration_types).filter(
    (value) => value.event_registration_type_id === parseInt(type)
  )[0].event_registration_type_price;

  const workshopsAmount = currentWorkshops.reduce((total, item) => {
    return total + item.event_workshop_price;
  }, 0);

  const amount = registrationAmount + workshopsAmount;

  return (
    <div className={classes}>
      <div className="current">
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

      <div className="list">
        <h5>Workshops</h5>

        {workshops.map((workshop) => {
          const {
            event_workshop_title,
            event_workshop_price,
            event_workshop_id,
          } = workshop;

          return (
            <div className="workshop" key={event_workshop_id}>
              <div className="name">{event_workshop_title}</div>

              <div className="controls">
                ({currentWorkshops.length}) {event_workshop_price}{" "}
                {event_currency}
                <span className="add" onClick={() => addToWorkshops(workshop)}>
                  +
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workshop;
