import React from 'react';
import MainNavigation from './src/routers';
import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import UserReducer from './src/redux/reducer/user';

const RootReducer = combineReducers({
  user: UserReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
