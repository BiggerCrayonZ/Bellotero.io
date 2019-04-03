//Service
import React from "react";
import globalServices from '../services/globalServices';

// Constants
import globalConstants from '../constants/globalConstants';

// Components
import Testimonial from '../../components/testimonial/TestimonialContainer';
import Configurator from '../../components/configurator/ConfiguratorContainer';

const defaultComponent = () => <div className="w-100 h-100"></div>;


export default {
    getGlobalData
};

function getGlobalData() {
    return (dispatch) => {
        // Request
        dispatch(request());
        // Promise
        globalServices.getGlobalData().then(response => {
            let array = response.data.menu;
            array.items.map(item => {
                switch (item.text) {
                    case 'Testimonial':
                        item.component = Testimonial;
                        break;
                    case 'Configurator':
                        item.component = Configurator;
                        break;
                    default:
                        item.component = defaultComponent
                }
            });
            dispatch(success(array));
        }).catch(err => {
            dispatch(error());
        })
    }
    function request() { return { type: globalConstants.GET_GLOBAL_DATA_REQUEST } }
    function success(data) { return { type: globalConstants.GET_GLOBAL_DATA_SUCCESS, data: data } }
    function error() { return { type: globalConstants.GET_GLOBAL_DATA_ERROR } }
}