import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderRadio } from "stylecraft-redux-form";
import * as classnames from "classnames";

import "./summary.scss";
import User from "./user";

class Summary extends Component {
  render() {
    const { data, step, users, setStep } = this.props;

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
              <Field
                name="payment"
                items={[
                  { id: "now", label: "Pay Now", value: "now" },
                  { id: "later", label: "Book Now, Pay Later", value: "later" },
                ]}
                component={renderRadio}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.payment) {
    errors.payment = "Payment cannot be empty.";
  }

  return errors;
};

export default reduxForm({
  form: "payment",
  validate,
})(Summary);
