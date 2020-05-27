import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "stylecraft/dist/stylecraft.css";
import { reset } from "redux-form";

import "./app.scss";
import { fetchData } from "../actions/data";
import { nextStep } from "../actions/steps";
import { addToCurrent } from "../actions/current";
import Header from "./header";
import Form from "./form";
import Workshops from "./workshops";
import Navigator from "./navigator";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    const { data, form, step, nextStep, addToCurrent, reset } = this.props;

    if (!Object.keys(data).length) {
      return "";
    }

    return (
      <div className="app sc-font">
        <Header data={data} />

        <Form step={step} data={data} />

        <Workshops step={step} data={data} />

        <Navigator
          form={form}
          step={step}
          reset={reset}
          nextStep={nextStep}
          addToCurrent={addToCurrent}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  form: state.form,
  step: state.step,
  current: state.current,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      reset,
      nextStep,
      addToCurrent,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
