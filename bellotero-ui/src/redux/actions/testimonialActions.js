//Service
import testimonialServices from '../services/testimonialServices';

// Constants
import testimonialConstants from '../constants/testimonialConstants';

export default {
    getTestimonials
};

function getTestimonials() {
    return (dispatch) => {
        // Request
        dispatch(request());
        // Promise
        testimonialServices.getTestimonials().then(response => {
            dispatch(success(response));
        }).catch(err => {
            dispatch(error());
        })
    }
    function request() { return { type: testimonialConstants.GET_TESTIMONIALS_REQUEST } }
    function success(data) { return { type: testimonialConstants.GET_TESTIMONIALS_SUCCESS, data: data } }
    function error() { return { type: testimonialConstants.GET_TESTIMONIALS_ERROR } }
}