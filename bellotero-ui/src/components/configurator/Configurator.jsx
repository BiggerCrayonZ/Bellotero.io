import React, { Component } from 'react';

// SCSS
import './Configurator.scss';
import 'rc-slider/assets/index.css';


// Components
import { AttachMoney } from '@material-ui/icons';
import Slider from 'rc-slider';
class Configurator extends Component {

    state = {
        montlyValue: 10,
        employeesValue: 1,
        estimatedFoodCostSaving: 0,
        estimatedAnnualSavings: 0,
        estimatedFoodWitoutFixed: 0
    }

    // Handle
    handleSliderMontly = (montlyValue) => {
        const estimatedFoodWitoutFixed = this.getEstimatedFoodCostSaving(montlyValue);
        const estimatedFoodCostSaving = parseFloat(Math.round((estimatedFoodWitoutFixed) * 100) / 100).toFixed(2);
        const estimatedAnnualSavings = parseFloat(Math.round(this.getEstimatedAnnualSavings(this.state.employeesValue, estimatedFoodWitoutFixed) * 100) / 100).toFixed(2);
        this.setState({
            montlyValue,
            estimatedFoodCostSaving,
            estimatedAnnualSavings,
            estimatedFoodWitoutFixed
        });
    };

    handleSliderEmployee = (employeesValue) => {
        const estimatedAnnualSavings = parseFloat(Math.round(this.getEstimatedAnnualSavings(employeesValue, this.state.estimatedFoodWitoutFixed) * 100) / 100).toFixed(2);
        this.setState({ employeesValue, estimatedAnnualSavings });
    };

    // Functions
    getEstimatedFoodCostSaving = (montlyValue) => {
        return (montlyValue * 0.3);
    }

    getEstimatedAnnualSavings = (employees, foodCostSaving) => {
        return ((employees * 1337) + foodCostSaving);
    }

    // Render
    renderLabels = () => {
        return (
            <div className="mt-4 w-100 d-flex justify-content-around align-items-end">
                <div className="label-section w-100 d-flex flex-column">
                    <div className="label-counter w-100 d-flex justify-content-between align-items-end">
                        <AttachMoney />
                        <p>{this.state.estimatedFoodCostSaving}</p>
                    </div>
                    <div className="label-subtitle w-100 ">Estimated cost food savings</div>
                </div>
                <div className="empty"></div>
                <div className="label-section w-100 d-flex flex-column">
                    <div className="label-counter w-100 d-flex justify-content-between align-items-end">
                        <AttachMoney />
                        <p>{this.state.estimatedAnnualSavings}</p>
                    </div>
                    <div className="label-subtitle w-100 ">Your estimated annual savings</div>
                </div>
            </div>
        );
    }

    render() {
        console.log('state: ', this.state);
        return (
            <div className="configurator_container w-100 d-flex justify-content-between ">
                <div className="info_section d-flex flex-column w-100 ">
                    <h4 className="conf_header bg-primary text-white px-2 d-flex align-items-center align-items-center">
                        Save more with Bellotero.io
                    </h4>
                    <p className="desc_header pt-4">
                        With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.
                    </p>
                </div>
                <div className="calculator_section w-100 d-flex flex-column">
                    {/* Monthly ingredient spending */}
                    <div className="w-100 d-flex justify-content-between align-items-end">
                        <p className="title_form">Monthly ingredient spending</p>
                        <div className="state-display d-flex justify-content-between align-items-center">
                            <AttachMoney />
                            <p>{this.state.montlyValue}</p>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-start pt-4">
                        <Slider
                            trackStyle={{ backgroundColor: 'blue' }}
                            handleStyle={{ borderColor: 'blue' }}
                            step={0.1}
                            min={10}
                            max={100}
                            value={this.state.montlyValue}
                            onChange={this.handleSliderMontly}
                            className="slider_controller" />
                    </div>
                    {/* Full-time employees that process invoices */}
                    <div className="w-100 d-flex justify-content-between align-items-end">
                        <p className="title_form">Full-time employees that process invoices</p>
                        <div className="mt-4 min-state-display d-flex justify-content-end align-items-center">
                            <p>{this.state.employeesValue}</p>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-start pt-4">
                        <Slider
                            trackStyle={{ backgroundColor: 'blue' }}
                            handleStyle={{ borderColor: 'blue' }}
                            min={1}
                            max={10}
                            value={this.state.employeesValue}
                            onChange={this.handleSliderEmployee}
                            className="slider_controller" />
                    </div>
                    {/* Render Labels */}
                    {this.renderLabels()}
                </div>
            </div>
        )
    }
}

export default Configurator;
