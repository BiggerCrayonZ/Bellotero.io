// Constants
import globalConstants from '../constants/globalConstants';

export default function globalReducer(state = { submit: false }, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case globalConstants.GET_GLOBAL_DATA_REQUEST:
            newState.submit = true;
            return newState;
        case globalConstants.GET_GLOBAL_DATA_SUCCESS:
            newState.submit = false;
            newState.success = true;
            newState.data = action.data;
            return newState;
        case globalConstants.GET_GLOBAL_DATA_ERROR:
            newState.submit = false;
            newState.success = false;
            return newState;
        default:
            return state;
    }
}