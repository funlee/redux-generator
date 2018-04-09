import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';

import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为{this.props.counter.count}(显示 redux 计数)</div>
        <button onClick={() => this.props.increment()}>自增</button>
        <button onClick={() => this.props.decrement()}>自减</button>
        <button onClick={() => this.props.reset()}>重置</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
};
// 容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。
// 你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，
// 这个方法做了性能优化来避免很多不必要的重复渲染。

// connect接收两个参数，
// 一个mapStateToProps, 就是把redux的state，转为组件的Props，
// 还有一个参数是mapDispatchToprops,就是把发射actions的方法，转为Props属性函数。

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
