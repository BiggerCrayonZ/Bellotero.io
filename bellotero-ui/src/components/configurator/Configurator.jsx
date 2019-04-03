import React, { Component } from 'react';

// SCSS
import './Configurator.scss';

class Configurator extends Component {
    render() {
        return (
            <div className="configurator_container w-100 d-flex justify-content-between ">
                <div className="info_section d-flex flex-column w-100">
                    <h4 className="conf_header bg-primary text-white px-2 d-flex align-items-center align-items-center">
                        Save more with Bellotero.io
                    </h4>
                    <p className="desc_header pt-4">
                        With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.
                    </p>
                </div>
                <div className="calculator_section w-100"></div>
            </div>
        )
    }
}

export default Configurator;
