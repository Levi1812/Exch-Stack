import {GET_ALL_TICKERS, GET_TICKERS} from '../actionTypes';
import Axios from '../../APIs/stock';
import {apiKey} from '../../APIs/credentials';

const getAllTickers = () => async (dispatch) =>{
    try {
        const res = await Axios({
            method: 'GET',
            url: `tickers?access_key=${apiKey}`,
        });

        dispatch({
            type: GET_ALL_TICKERS,
            payload: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

const getTickersByExchangeCode = (code) => async (dispatch) =>{
    try {
        const res = await Axios({
            method: 'GET',
            url: `tickers?access_key=${apiKey}&exchange=${code}`,
        });

        dispatch({
            type: GET_TICKERS,
            payload: res.data.data
        })
        
    } catch (error) {
        
    }
}

const tikersActions = {
    getAllTickers,
    getTickersByExchangeCode
}

export default tikersActions;