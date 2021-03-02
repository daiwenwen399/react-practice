import React from "react";

export default class This extends React.Component {
  // es7草案中提案，如果要给当前类实例添加属性，就不需要写constructor，应该使用下面的语法
  state = {
    count: 1,
  };

  // 这样定义函数，这个函数直接添加到了当前组件的实例身上
  // 虽然是es7草案，但因为babel所以可以正常使用
  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        {/* 底层对象方法调用，所以this指向当前实例 */}
        <button onClick={this.handleCount}></button>
      </div>
    );
  }
}
