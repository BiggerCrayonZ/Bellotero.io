import { connect } from 'react-redux';
import App from './App';


function mapStateToProps(state) {
    const { globalReducer } = state;
    return { globalReducer };
}

export default connect(mapStateToProps)(App)