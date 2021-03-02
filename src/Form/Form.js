import React, { Component } from "react";

export default class Form extends Component {
  state = {
    msg: "受控组件",
    text: "文本域默认值",
  };

  // 文本框改变的事件处理函数
  handleChange = (e) => {
    // 获取用户输入
    const value = e.target.value;
    // 修改状态里的值
    this.setState({
      msg: value,
    });
  };

  // 文本域事件处理函数
  handkeChangeArea = (e) => {
    const value = e.target.value;
    this.setState({
      text: value,
    });
  };

  render() {
    return (
      <div>
        {/* 文本框 */}
        <input
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        ></input>

        {/* 文本域 */}
        <textarea
          value={this.state.text}
          onChange={this.handkeChangeArea}
        ></textarea>

        {/* 下拉框 */}
        <select></select>
      </div>
    );
  }
}
