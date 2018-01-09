/* @flow */

import React from 'react';
import {Route} from 'react-router';

// eslint-disable-next-line
import App from './component/App'; // eslint-disable-next-line
import Home from './component/Home';

export default ([<div className="b">
  <Route path="/" component={App} ></Route>
  <Route exact path="/" component={Home}></Route>
  <Route path="/home" component={Home}></Route>
  </div>
]);