import React, { Component } from "react";
import PropsSon from "./PropsSon";
import PropsCheck from "./PropsCheck";

export default class Props extends Component {
  state = {
    msg: "props里的数据",
    arr: ["a", "b", "c"],
  };
  render() {
    return (
      <div>
        <PropsSon msg={this.state.msg}></PropsSon>
        <PropsCheck arr={this.state.arr}></PropsCheck>
      </div>
    );
  }
}
