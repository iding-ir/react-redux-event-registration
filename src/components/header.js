import React from "react";
import moment from "moment";

import "./header.scss";

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

  const ven = Object.values(venue)
    .filter((value) => value)
    .map((value) => <span className="bit">{value}</span>);

  return (
    <div className="header">
      <div className="title">{event_long_name}</div>

      <div className="info">
        {ven}

        <span className="bit">
          {moment(event_start_date).format(event_date_format)} -{" "}
          {moment(event_end_date).format(event_date_format)}
        </span>
      </div>
    </div>
  );
};

export default Header;
