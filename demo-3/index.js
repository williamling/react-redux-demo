import { createStore, combineReducers } from './redux';
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '富国基金',
    description: '我们都是前端爱好者！'
  }
}

let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});
/*自增*/
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'SET_NAME',
  name: '富国基金2号'
});