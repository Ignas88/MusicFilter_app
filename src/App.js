import React, { Component } from 'react';
import Main from './containers/Main';
import  { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
