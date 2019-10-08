import React from 'react';
import './App.css';
// import firebase from './firebase.js';
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'
import AppRouter from './Router/AppRouter'

// must run the function to return an object with store methods
const store = configureStore();
// method to get 'state' in the store

const App = () => (
    // Provider gives child components access to the store via connect. another method from redux that maps props to the store method dispatch 
    <Provider store={store}>
      <h1>Split-Bill</h1>
      <AppRouter />
    </Provider>
)


export default App;
