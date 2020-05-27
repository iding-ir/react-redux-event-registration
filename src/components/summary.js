import React from "react";
import * as classnames from "classnames";

import "./summary.scss";

const Summary = (props) => {
  const { data, step, current } = props;

  const classes = classnames("summary", {
    show: step === 3,
  });

  return (
    <div className={classes}>
      <div className="cheque">
        <h5>Registration Summary</h5>

        <div className="list"></div>
      </div>

      <div className="controls">
        <form className="sc-form">
          <div className="sc-form-group sc-grid-2">
            <div className="sc-form-button sc-md">
              <button type="button">
                <i className="sc-icon-zoom-in"></i>

                <span>Button with icon</span>
              </button>
            </div>

            <div className="total"></div>
          </div>
        </form>
      </div>

      <div className="payment">
        <h5>Choose Your Payment Method</h5>

        <form className="sc-form">
          <div className="sc-form-group sc-grid-2">
            <div className="sc-form-radio">
              <input type="radio" name="my-radio" id="now" checked />

              <label for="now">
                <i className="sc-icon-radio"></i>

                <span>Pay Now</span>
              </label>
            </div>

            <div className="sc-form-radio">
              <input type="radio" name="my-radio" id="later" />

              <label for="later">
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
