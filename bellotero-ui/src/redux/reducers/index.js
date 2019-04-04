import { combineReducers } from 'redux'
import globalReducer from './globalReducer';
import getTestimonials  from './testimonialsReducer';
import {getConfiguratorData, getLabels, getInitialState} from './configuratorReducer';

const rootReducer = combineReducers({
    globalReducer,
    getTestimonials,
    getConfiguratorData,
    getLabels,
    getInitialState
})

export default rootReducer;