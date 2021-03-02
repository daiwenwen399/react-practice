import React from "react";

export default class This1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    // 写法3：使用bind解决this问题
    this.handleCount = this.handleCount.bind(this);
  }

  // 这个函数是加到原型上，触发点击事件的时候，react底层最终在原型上找到了这个函数，然后普通调用了这个函数，函数普通调用this指向window，但是经过babel编译变成严格模式，所以指向了undefined
  handleCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        {/* 写法1：有this问题 */}
        {/* <button onClick={this.handleCount}>加1</button> */}
        {/* 写法2：箭头函数解决this问题，此时handelCount就不是事件处理函数了，箭头函数才是 */}
        <button
          onClick={() => {
            // this指向当前组件实例
            this.handleCount();
          }}
        >
          加1
        </button>
      </div>
    );
  }
}
