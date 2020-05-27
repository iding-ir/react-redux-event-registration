import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderTextfield, renderSelect } from "stylecraft-redux-form";
import * as classnames from "classnames";

import "./form.scss";

class Form extends Component {
  render() {
    const { data, step } = this.props;

    const { registration_types, event_currency } = data;

    const classes = classnames("form", {
      show: step === 1,
    });

    let items = [];

    registration_types.forEach((type) => {
      items = [
        ...items,
        {
          id: type.event_registration_type_id,
          label: `${type.event_registration_type_title} (${type.event_registration_type_price} ${event_currency})`,
          value: type.event_registration_type_id,
        },
      ];
    });

    return (
      <div className={classes}>
        <form className="sc-form sc-row">
          <div className="field sc-col-xs-12">
            <h5>Registration Types &amp; Fees:</h5>

            <div className="sc-form-group sc-grid-1">
              <Field name="type" items={items} component={renderSelect} />
            </div>
          </div>

          <div className="field sc-col-xs-12 sc-col-sm-6">
            <Field
              name="firstName"
              label="First name"
              component={renderTextfield}
            />
          </div>

          <div className="field sc-col-xs-12 sc-col-sm-6">
            <Field
              name="lastName"
              label="Last name"
              component={renderTextfield}
            />
          </div>

          <div className="field sc-col-xs-12">
            <Field name="email" label="Email" component={renderTextfield} />
          </div>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.type) {
    errors.type = "Type cannot be empty.";
  }

  if (!formValues.firstName) {
    errors.firstName = "First name cannot be empty.";
  }

  if (!formValues.lastName) {
    errors.lastName = "Last name cannot be empty.";
  }

  if (!formValues.email) {
    errors.email = "Email cannot be empty.";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Invalid email format.";
  }

  return errors;
};

export default reduxForm({
  form: "registration",
  validate,
})(Form);
