import { connect } from 'react-redux';
import Testimonial from './Testimonial';


function mapStateToProps(state) {
    const { getTestimonials } = state;
    return { getTestimonials };
}

export default connect(mapStateToProps)(Testimonial)