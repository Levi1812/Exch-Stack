import exchangesReducer from './exchangesReducer';
import tickersReducer from './tickersReducers';
import eodReducer from './eodReducers';
import intradayReducer from './intradayReducer';
import exchangeMicReducer from './exchangeMicReducer';
import tickerSymbolReducer from './tickerSymbolReducer.js';
import headExchangeReducer from './headExchangeReducer';
import headTickerReducer from './headTickerReducer';

const rootReducer = {
    exchanges: exchangesReducer,
    tickers: tickersReducer,
    eod: eodReducer,
    intraday: intradayReducer,
    exchangeMic: exchangeMicReducer,
    tickerSymbol: tickerSymbolReducer,
    headExchange: headExchangeReducer,
    headTicker: headTickerReducer
}

export default rootReducer;