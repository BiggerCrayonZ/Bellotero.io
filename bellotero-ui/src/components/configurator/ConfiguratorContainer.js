import { connect } from 'react-redux';
import Configurator from './Configurator';


function mapStateToProps(state) {
    const { getConfiguratorData } = state;
    return { getConfiguratorData };
}

export default connect(mapStateToProps)(Configurator)