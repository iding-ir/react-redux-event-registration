import React from "react";
import moment from "moment";

import "./Header.scss";

const Header = (props) => {
  if (!Object.keys(props.data).length) {
    return "";
  }

  const { data } = props;

  const {
    event_long_name,
    event_start_date,
    event_end_date,
    event_date_format,
    venue,
  } = data;

  const address = Object.values(venue)
    .filter((value) => value)
    .map((value, index) => (
      <span key={index} className="bit">
        {value}
      </span>
    ));

  return (
    <div className="header">
      <div className="title">{event_long_name}</div>

      <div className="info sc-row">
        <div className="sc-col-xs-12 sc-col-sm-6">{address}</div>

        <div className="sc-col-xs-12 sc-col-sm-6">
          {moment(event_start_date).format(event_date_format)} -{" "}
          {moment(event_end_date).format(event_date_format)}
        </div>
      </div>
    </div>
  );
};

export default Header;
