import React, { Component } from 'react';

// SCSS
import './Testimonial.scss';

// Components
import Button from '@material-ui/core/Button';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';

// Actions
import testimonialActions from '../../redux/actions/testimonialActions';

class Testimonial extends Component {
    state = {
        index: 0,
        item: '',
        reviews: []
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(testimonialActions.getTestimonials())
    }

    componentWillReceiveProps(newProps) {
        const { getTestimonials } = this.props;
        if (getTestimonials.data !== newProps.getTestimonials.data) {
            if (newProps.getTestimonials.success && newProps.getTestimonials.data) {
                this.setState({
                    item: newProps.getTestimonials.data.reviews[0],
                    reviews: newProps.getTestimonials.data.reviews
                })
            }
        }
    }

    // Handle
    handleCardBody = (flag) => {
        let newIndex = 0;
        if (flag) {
            newIndex = this.state.index + 1;
        } else {
            newIndex = this.state.index - 1;
        }
        this.setState({
            index: newIndex,
            item: this.state.reviews[newIndex],
        })
    }

    // Render
    getTitle = () => {
        const { getTestimonials } = this.props;
        if (!getTestimonials.submit && getTestimonials.success) {
            return (getTestimonials.data.title);
        } else {
            return (<CircularProgress color="primary" />)
        }
    }

    getCard = () => {
        const { getTestimonials } = this.props;
        if (!getTestimonials.submit && getTestimonials.success) {
            return (
                <div className="w-100 p-4 bg-white d-flex justify-content-between">
                    <div className="w-100 title_section">
                        <h5>{this.state.item.name}</h5>
                        <span className="text-secondary">{this.state.item.position}</span>
                    </div>
                    <div className="w-100 desc_section"> {this.state.item.comment} </div>
                </div>
            );
        } else {
            return (<CircularProgress color="primary" />)
        }

    }

    render() {
        return (
            <div className="testimonial_container w-100 h-100 ">
                <div className="w-100 d-flex justify-content-start">
                    <h4 className="test_header bg-primary text-white px-2 d-flex align-items-center align-items-center">
                        {this.getTitle()}
                    </h4>
                </div>
                <div className="w-100 d-flex py-4 justify-content-center align-items-center">
                    {/* Render Card */}
                    {this.getCard()}
                </div>
                <div className="switcher_section  d-flex">
                    <div className="w-100 h-100 shadow-sm bg-primary text-white d-flex align-items-center py-2 px-4">
                        {(this.state.index + 1) + " / " + (this.state.reviews.length)}
                    </div>
                    <Button
                        disabled={this.state.index === 0 ? true : false}
                        onClick={() => { this.handleCardBody(false) }}
                        className="bg-primary text-white" variant="contained" >
                        <KeyboardArrowLeft />
                    </Button>
                    <Button
                        disabled={this.state.index === this.state.reviews.length - 1 ? true : false}
                        onClick={() => { this.handleCardBody(true) }}
                        className="bg-primary text-white" variant="contained" >
                        <KeyboardArrowRight />
                    </Button>
                </div>
            </div>
        )
    }
}

export default Testimonial;