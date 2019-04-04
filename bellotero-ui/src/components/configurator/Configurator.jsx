import React, { Component } from 'react';

// SCSS
import './Configurator.scss';
import 'rc-slider/assets/index.css';

// Components
import { AttachMoney, Error } from '@material-ui/icons';
import Slider from 'rc-slider';
import CircularProgress from '@material-ui/core/CircularProgress';

// Actions
import configuratorActions from '../../redux/actions/configuratorActions';

class Configurator extends Component {

    state = {
        montlyValue: 10,
        employeesValue: 1,
        estimatedFoodCostSaving: '3.00',
        estimatedAnnualSavings: '1340.00',
        estimatedFoodWitoutFixed: 3.00
    }

    // RLC

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(configuratorActions.getLabels());
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(configuratorActions.getConfigurationData());
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

    renderDescription = () => {
        const { getConfiguratorData } = this.props;
        if (getConfiguratorData.submit) {
            return (<CircularProgress color="primary" />);
        } else {
            if (getConfiguratorData.success && getConfiguratorData.data) {
                return (
                    <div className="info_section d-flex flex-column w-100 ">
                        <h4 className="conf_header bg-primary text-white px-2 d-flex align-items-center align-items-center">
                            {getConfiguratorData.data.title}
                        </h4>
                        <p className="desc_header pt-4">
                            {getConfiguratorData.data.description}
                        </p>
                    </div>
                );
            } else {
                return (
                    <div className="w-100 p-4">
                        <Error />
                    </div>
                )
            }
        }
    }

    renderLabels = () => {
        const { getLabels } = this.props;
        if (getLabels.data !== "") {
            const { data } = getLabels;
            return (
                <div className="mt-4 labels w-100 ">
                    <div className="label-section w-100 d-flex flex-column">
                        <div className="label-counter w-100 d-flex justify-content-end align-items-end">
                            <AttachMoney />
                            <p>{this.state.estimatedFoodCostSaving}</p>
                        </div>
                        <div className="label-subtitle w-100 ">{data.label_food}</div>
                    </div>
                    <div className="label-section w-100 d-flex flex-column">
                        <div className="label-counter w-100 d-flex justify-content-end align-items-end">
                            <AttachMoney />
                            <p>{this.state.estimatedAnnualSavings}</p>
                        </div>
                        <div className="label-subtitle w-100 ">{data.label_annual}</div>
                    </div>
                </div>
            );
        } else { return (<CircularProgress color="primary" />); }
    }

    render() {
        const { getLabels } = this.props;
        console.log('props: ', this.props);
        return (
            <div className="configurator_container d-flex justify-content-between ">
                {/* Render Description */}
                {this.renderDescription()}
                <div className="calculator_section w-100 d-flex flex-column">
                    {/* Monthly ingredient spending */}
                    <div className="w-100 d-flex justify-content-between align-items-end">
                        {getLabels.data !== "" ?
                            <p className="title_form"> {getLabels.data.label_montly} </p>
                            :
                            <CircularProgress color="primary" />}
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
                        {getLabels.data !== "" ?
                            <p className="title_form"> {getLabels.data.label_employee} </p>
                            :
                            <CircularProgress color="primary" />}
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