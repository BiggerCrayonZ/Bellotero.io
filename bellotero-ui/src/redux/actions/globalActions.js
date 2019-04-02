import React from 'react'
import { connect } from 'react-redux'
//Service
import globalServices from '../services/globalServices';

// Constants
import globalConstants from '../constants/globalConstants';

export default {
    getGlobalData
};

function getGlobalData() {
    return (dispatch) => {
        // Request
        dispatch(request());
        // Promise
        globalServices.getGlobalData().then(response => {
            console.log('response: ', response);
        }).catch(err => {
            console.log('getGlobalData err: ', err);
        })
    }
    function request() { return { type: globalConstants.GET_GLOBAL_DATA_REQUEST } }
    function success(data) { return { type: globalConstants.GET_GLOBAL_DATA_SUCCESS, data: data } }
    function error() { return { type: globalConstants.GET_GLOBAL_DATA_ERROR } }
}