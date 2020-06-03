import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "stylecraft/dist/stylecraft.css";
import { reset } from "redux-form";

import "./App.scss";
import { fetchData } from "../actions/data";
import { setStep } from "../actions/steps";
import { addToCurrent, addToWorkshops, clearCurrent } from "../actions/current";
import { addUser, removeUser, clearUsers } from "../actions/users";
import { showModal, hideModal } from "../actions/modal";
import Header from "./Header";
import Form from "./Form";
import Workshops from "./Workshops";
import Summary from "./Summary";
import Navigator from "./Navigator";
import Modal from "./Modal";

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
      modal,
      setStep,
      addToCurrent,
      addToWorkshops,
      clearCurrent,
      reset,
      addUser,
      removeUser,
      clearUsers,
      showModal,
      hideModal,
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
          removeUser={removeUser}
        />

        <Summary
          step={step}
          data={data}
          users={users}
          setStep={setStep}
          removeUser={removeUser}
        />

        <Navigator
          form={form}
          step={step}
          data={data}
          current={current}
          users={users}
          reset={reset}
          setStep={setStep}
          addToCurrent={addToCurrent}
          addUser={addUser}
          clearCurrent={clearCurrent}
          clearUsers={clearUsers}
          showModal={showModal}
        />

        <Modal users={users} modal={modal} hideModal={hideModal} />
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
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      reset,
      setStep,
      addToCurrent,
      addToWorkshops,
      clearCurrent,
      addUser,
      removeUser,
      clearUsers,
      showModal,
      hideModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
