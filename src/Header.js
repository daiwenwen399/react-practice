import React from "react";
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      msg: "我是一个字符串",
    };
  }
  render() {
    console.log(this);
    return (
      <div>
        我是一个类组件 <h3> {this.state.count} </h3> <p> 你好 </p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          加1
        </button>
      </div>
    );
  }
}
