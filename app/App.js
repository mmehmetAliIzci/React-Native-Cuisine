import React from 'react';
import { Provider } from 'react-redux'
import { Root } from './config/router'

import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index'; //Import the reducer

function configureStore() {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
        ),
    );
    return createStore(reducer , enhancer);
}

const store = configureStore({});

export default class App extends React.Component {
  render() {
    return (
          <Provider store={store}>
              <Root/>
          </Provider>
      );
  }
}
