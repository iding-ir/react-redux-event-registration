import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "stylecraft/dist/stylecraft.css";

import "./app.scss";
import { fetchData } from "../actions/data";
import { nextStep, prevStep, resetSteps } from "../actions/steps";
import Header from "./header";
import Form from "./form";
import Navigator from "./navigator";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    const { data, step, nextStep, prevStep, resetSteps } = this.props;

    return (
      <div className="app sc-font">
        <Header data={data} />

        <Form data={data} />

        <Navigator
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          resetSteps={resetSteps}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  step: state.step,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      nextStep,
      prevStep,
      resetSteps,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
