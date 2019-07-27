import React from 'react';
import { AuthContainer } from './containers/AuthContainer';
import { RegistrationContainer } from './containers/RegistrationContainer';
import { Provider } from 'react-redux';
import './App.css';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div className="wrapper">
          <h1>Complex State</h1>
          <div className="forms">
            <AuthContainer />
            <RegistrationContainer />
          </div>
        </div>
      </Provider>
    );
  }
}


