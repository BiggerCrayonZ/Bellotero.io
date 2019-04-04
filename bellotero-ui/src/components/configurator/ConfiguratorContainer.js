import { connect } from 'react-redux';
import Configurator from './Configurator';


function mapStateToProps(state) {
    const { getConfiguratorData, getLabels, getInitialState } = state;
    return { getConfiguratorData, getLabels, getInitialState };
}

export default connect(mapStateToProps)(Configurator)