import { connect } from 'react-redux';
import Configurator from './Configurator';


function mapStateToProps(state) {
    const { getConfiguratorData, getLabels } = state;
    return { getConfiguratorData, getLabels };
}

export default connect(mapStateToProps)(Configurator)