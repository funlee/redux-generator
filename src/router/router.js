import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bundle from './Bundle';
import Loading from 'components/common/Loading';
import NotFound from 'bundle-loader?lazy&name=notFound!components/common/NotFound';

import Home from 'bundle-loader?lazy&name=home!views/Home';
import About from 'bundle-loader?lazy&name=about!views/About';
import Counter from 'bundle-loader?lazy&name=counter!views/Counter';


const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={createComponent(Home)} />
      <Route path="/about" component={createComponent(About)} />
      <Route path="/counter" component={createComponent(Counter)} />
      <Route component={createComponent(NotFound)} />
    </Switch>
  </div>
);
