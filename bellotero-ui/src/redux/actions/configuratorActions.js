
// Constants
import configuratorConstants from '../constants/configuratorConstants';

// Services
import configuratorServices from '../services/configuratorServices';

export default {
    getConfigurationData,
    getLabels
};

function getConfigurationData() {
    return (dispatch) => {
        // Request
        dispatch(request());
        // Promise
        configuratorServices.getConfiguratorData().then(response => {
            dispatch(success(response.data.calculator));
        }).catch(err => {
            dispatch(error());
        })
    }
    function request() { return { type: configuratorConstants.GET_CONFIGURATOR_DATA_REQUEST } }
    function success(data) { return { type: configuratorConstants.GET_CONFIGURATOR_DATA_SUCCESS, data } }
    function error() {
        
        return { type: configuratorConstants.GET_CONFIGURATOR_DATA_ERROR }
    }
}

function getLabels() {
    return (dispatch) => {
        dispatch(success(configuratorConstants.GET_LABELS));
    }
    function success(data) { return { type: configuratorConstants.GET_LABELS.GET_LABELS, data } }
}