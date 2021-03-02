import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PropsCheck extends Component {
  render() {
    const arr = this.props.arr;
    const newArr = arr.map((item, index) => {
      return <div key={index}>{item}</div>;
    });
    return (
      <div>
        测试组件
        <p>{this.props.age}</p>
        <div>{newArr}</div>
      </div>
    );
  }
}

PropsCheck.propTypes = {
  arr: PropTypes.array.isRequired,
  age: PropTypes.number,
};

PropsCheck.defaultProps = {
  age: 18,
};
