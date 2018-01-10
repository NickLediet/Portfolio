

/* @flow */



import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux"
import App from "./component/App"
import "./styles/App.css"
import reducers from "./reducers"
import { getPhotos } from "./actions/galleryActions"

const store = createStore(reducers)

store.subscribe(() => console.dir(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


