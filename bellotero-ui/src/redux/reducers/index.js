import { combineReducers } from 'redux'
import globalReducer from './globalReducer';
import getTestimonials  from './testimonialsReducer';
import getConfiguratorData from './configuratorReducer';

const rootReducer = combineReducers({
    globalReducer,
    getTestimonials,
    getConfiguratorData
})

export default rootReducer;