import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderTextfield, renderSelect } from "stylecraft-redux-form";

import "./form.scss";

class Form extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    const { data } = this.props;

    const { registration_types, event_currency } = data;

    if (registration_types === undefined) {
      return "";
    }

    let items = [];

    registration_types.forEach((type) => {
      items = [
        ...items,
        {
          id: type.event_registration_type_id,
          label: `${type.event_registration_type_title} (${type.event_registration_type_price} ${event_currency})`,
          value: type.event_registration_type_price,
        },
      ];
    });

    return (
      <form
        className="form sc-form sc-row"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="field sc-col-xs-12">
          <h4>Registration Types &amp; Fees:</h4>

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