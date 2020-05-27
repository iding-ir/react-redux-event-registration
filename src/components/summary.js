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
    </div>
  );
};

export default Summary;
