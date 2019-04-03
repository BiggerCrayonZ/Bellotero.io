import { combineReducers } from 'redux'
import globalReducer from './globalReducer';
import getTestimonials  from './testimonialsReducer';

const rootReducer = combineReducers({
    globalReducer,
    getTestimonials
})

export default rootReducer;