// Constants
import configuratorConstants from '../constants/configuratorConstants';

export default function getConfiguratorData(state = { submit: false }, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case configuratorConstants.GET_CONFIGURATOR_DATA_REQUEST:
            newState.submit = true;
            return newState;
        case configuratorConstants.GET_CONFIGURATOR_DATA_SUCCESS:
            newState.submit = false;
            newState.success = true;
            newState.data = action.data;
            return newState;
        case configuratorConstants.GET_CONFIGURATOR_DATA_ERROR:
            newState.submit = false;
            newState.success = false;
            return newState;
        default:
            return state;
    }
}