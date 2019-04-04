import { combineReducers } from 'redux'
import globalReducer from './globalReducer';
import getTestimonials  from './testimonialsReducer';
import {getConfiguratorData, getLabels} from './configuratorReducer';

const rootReducer = combineReducers({
    globalReducer,
    getTestimonials,
    getConfiguratorData,
    getLabels
})

export default rootReducer;