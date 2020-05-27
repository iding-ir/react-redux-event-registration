import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "stylecraft/dist/stylecraft.css";

import "./app.scss";
import { fetchData } from "../actions/data";
import Header from "./header";
import Form from "./form";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="app sc-font">
        <Header data={data} />

        <Form data={data} />
      </div>
    );
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
