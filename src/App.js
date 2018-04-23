import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import OrdersList from './containers/OrdersList/OrdersList';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Switch>
                <Route path="/" exact component={BurgerBuilder} />
                <Route path="/orders" component={OrdersList} />
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
