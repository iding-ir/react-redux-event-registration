import React from "react";
import * as classnames from "classnames";

import "./workshops.scss";

const Workshop = (props) => {
  const { data, step } = props;

  const { registration_types, event_currency } = data;

  const classes = classnames("workshops", {
    show: step === 2,
  });

  return <div className={classes}>Workshops</div>;
};

export default Workshop;
