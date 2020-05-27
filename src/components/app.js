import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./app.scss";
import { fetchData } from "../actions/data";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    return <div className="app">App</div>;
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
