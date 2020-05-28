import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "stylecraft/dist/stylecraft.css";
import { reset } from "redux-form";

import "./app.scss";
import { fetchData } from "../actions/data";
import { nextStep } from "../actions/steps";
import { addToCurrent, addToWorkshops, clearCurrent } from "../actions/current";
import { addUser, removeUser, clearUsers } from "../actions/users";
import Header from "./header";
import Form from "./form";
import Workshops from "./workshops";
import Summary from "./summary";
import Navigator from "./navigator";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    const {
      data,
      form,
      step,
      current,
      users,
      nextStep,
      addToCurrent,
      addToWorkshops,
      clearCurrent,
      reset,
      addUser,
      removeUser,
      clearUsers,
    } = this.props;

    if (!Object.keys(data).length) {
      return "";
    }

    return (
      <div className="app sc-font">
        <Header data={data} />

        <Form step={step} data={data} />

        <Workshops
          step={step}
          data={data}
          current={current}
          addToWorkshops={addToWorkshops}
        />

        <Summary step={step} data={data} users={users} />

        <Navigator
          form={form}
          step={step}
          current={current}
          reset={reset}
          nextStep={nextStep}
          addToCurrent={addToCurrent}
          addUser={addUser}
          clearCurrent={clearCurrent}
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
  users: state.users,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      reset,
      nextStep,
      addToCurrent,
      addToWorkshops,
      clearCurrent,
      addUser,
      removeUser,
      clearUsers,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
