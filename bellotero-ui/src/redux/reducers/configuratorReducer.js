// Constants
import configuratorConstants from '../constants/configuratorConstants';

// Init State
const initialState = {
    montlyValue: 10,
    employeesValue: 1,
    estimatedFoodCostSaving: '3.00',
    estimatedAnnualSavings: '1340.00',
    estimatedFoodWitoutFixed: 3.00
}

export function getConfiguratorData(state = { submit: false }, action) {
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

export function getLabels(state = { data: '' }, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case configuratorConstants.GET_LABELS.GET_LABELS:
            newState.data = action.data;
            return newState;
        default:
            return state;
    }
}

export function getInitialState() {
    return initialState;
}