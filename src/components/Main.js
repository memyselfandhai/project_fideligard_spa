import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import PortfolioContainer from "../containers/PortfolioContainer";
import StocksContainer from "../containers/StocksContainer";

const Main = () => (
  <Router>
    <div>
      <div className="NavLinks">
        <NavLink activeClassName="active" exact to="/trade/aapl">
          Trade
        </NavLink>{" "}
        <NavLink activeClassName="active" exact to="/portfolio/">
          Portfolio
        </NavLink>{" "}
        <NavLink activeClassName="active" to="/transaction">
          Transactions
        </NavLink>
      </div>

      <select>
        <option>Trade</option>
      </select>

      <Switch>
        <Route exact path="/" component={StocksContainer} />
        <Route exact path="/trade/:symbol" component={TradeContainer} />
        <Route exact path="/portfolio/" component={PortfolioContainer} />
        <Route exact path="/transactions/" component={TransactionsContainer} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default Main;
