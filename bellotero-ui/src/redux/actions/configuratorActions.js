
// Constants
import configuratorConstants from '../constants/configuratorConstants';

// Services
import configuratorServices from '../services/configuratorServices';

export default {
    getConfigurationData
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
    function success(data) { return { type: configuratorConstants.GET_CONFIGURATOR_DATA_SUCCESS, data: data } }
    function error() { return { type: configuratorConstants.GET_CONFIGURATOR_DATA_ERROR } }
}