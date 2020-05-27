import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderTextfield, renderSelect } from "stylecraft-redux-form";

import "./form.scss";

class Form extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        className="form sc-form sc-row"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="field sc-col-xs-12">
          <h4>Registration Types &amp; Fees:</h4>

          <div className="sc-form-group sc-grid-1">
            <Field
              name="type"
              items={[
                { id: "bs", label: "BS", value: "bs" },
                { id: "ms", label: "MS", value: "ms" },
              ]}
              component={renderSelect}
            />
          </div>
        </div>

        <div className="field sc-col-xs-12 sc-col-sm-6">
          <Field
            name="firstName"
            label="Enter first name"
            component={renderTextfield}
          />
        </div>

        <div className="field sc-col-xs-12 sc-col-sm-6">
          <Field
            name="lastName"
            label="Enter last name"
            component={renderTextfield}
          />
        </div>

        <div className="field sc-col-xs-12">
          <Field name="email" label="Enter email" component={renderTextfield} />
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
