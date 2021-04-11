import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import headExchangeAction from "./redux/actions/headExchangeAction";
import exchangeActions from "./redux/actions/exchangeActions";
import tickersActions from "./redux/actions/tickersActions";
import ExchangesList from "./components/ExchangeList";
import TickerList from "./components/TickerList";
import eodActions from "./redux/actions/eodActions";
import EodData from "./components/EodData";

import Home from "./pages/Home";
import Eod from "./pages/Eod";
import Markets from "./pages/Markets";
import Tickers from "./pages/Tickers";

//test chart
import EodChart from "./components/EodChart";
import headTickerAction from "./redux/actions/headTickerAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch API and Store data to Redux
    // API EXCHANGES LIST
    dispatch(exchangeActions.getExchanges());
    //API ALL TICKERS LIST
    dispatch(tickersActions.getAllTickers());
    //API TICKERS BY EXCHANGE CODE
    //dispatch(tickersActions.getTickersByExchangeCode('XIDX'))
    //API EOD BY EMITEN/TICKERS CODE AND EXCHANGE CODE
    //dispatch(eodActions.getEodByEmitenSymbolsAndExchange('BBCA','XIDX'))
    //API 5 Head Exchange List
    dispatch(headExchangeAction.get5HeadExchanges());
    dispatch(headTickerAction.get5HeadTicker());
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/markets">
              <Markets />
            </Route>
            <Route path="/emiten-list">
              <Tickers />
            </Route>
            <Route path="/details-emiten">
              <Eod />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
