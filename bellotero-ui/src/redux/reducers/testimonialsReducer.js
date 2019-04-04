// Constants
import testimonialConstants from '../constants/testimonialConstants';

export default function getTestimonials(state = { submit: false }, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case testimonialConstants.GET_TESTIMONIALS_REQUEST:
            newState.submit = true;
            return newState;
        case testimonialConstants.GET_TESTIMONIALS_SUCCESS:
            newState.submit = false;
            newState.success = true;
            newState.data = action.data;
            return newState;
        case testimonialConstants.GET_TESTIMONIALS_ERROR:
            newState.submit = false;
            newState.success = false;
            return newState;
        default:
            return state;
    }
}