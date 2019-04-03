import axios from 'axios';

export default {
    getTestimonials
};

function getTestimonials() {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_GET_TESTIMONIALS).then(response => {
            if (response.status === 200) { resolve(response); }
        }).catch(err => { reject(err); });
    })
}