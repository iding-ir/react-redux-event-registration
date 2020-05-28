import React from "react";
import * as classnames from "classnames";

import "./summary.scss";
import User from "./user";
import { setStep } from "../actions/steps";

const Summary = (props) => {
  const { data, step, users, setStep } = props;

  const { registration_types, event_currency } = data;

  const classes = classnames("summary", {
    show: step === 3,
  });

  let total = 0;

  return (
    <div className={classes}>
      <div className="cheque">
        <h5>Registration Summary</h5>

        {Object.values(users).map((user, index) => {
          const { type, workshops: currentWorkshops } = user;

          const registrationAmount = Object.values(registration_types).filter(
            (value) => value.event_registration_type_id === parseInt(type)
          )[0].event_registration_type_price;

          const workshopsAmount = currentWorkshops.reduce((total, item) => {
            return total + item.event_workshop_price;
          }, 0);

          total += registrationAmount + workshopsAmount;

          return <User key={index} data={data} current={user} />;
        })}
      </div>

      <div className="controls">
        <form className="sc-form">
          <div className="sc-form-group sc-grid-2">
            <div className="sc-form-button sc-md">
              <button type="button" onClick={() => setStep(1)}>
                <i className="sc-icon-zoom-in"></i>

                <span>Button with icon</span>
              </button>
            </div>

            <div className="total">
              <div>TOTAL</div>

              <div className="amount">
                {total} {event_currency}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="payment">
        <h5>Choose Your Payment Method</h5>

        <form className="sc-form">
          <div className="sc-form-group sc-grid-2">
            <div className="sc-form-radio">
              <input type="radio" name="my-radio" id="now" />

              <label htmlFor="now">
                <i className="sc-icon-radio"></i>

                <span>Pay Now</span>
              </label>
            </div>

            <div className="sc-form-radio">
              <input type="radio" name="my-radio" id="later" />

              <label htmlFor="later">
                <i className="sc-icon-radio"></i>

                <span>Book Now, Pay Later</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Summary;
