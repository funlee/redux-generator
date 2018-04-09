// 自己合并
// import counter from 'reducers/counter';
// import userInfo from 'reducers/userInfo';

// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action),
//     userInfo: userInfo(state.userInfo, action)
//   }
// }

// redux提供了一个combineReducers函数来合并reducer
import { combineReducers } from "redux";

import counter from 'reducers/counter';
// import userInfo from 'reducers/userInfo';


export default combineReducers({
  counter
  // userInfo
});
