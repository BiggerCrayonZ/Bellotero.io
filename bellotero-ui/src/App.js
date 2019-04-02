import React, { Component } from 'react';
import './App.scss';

// Actions
import globalActions from './redux/actions/globalActions';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  // React LC
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(globalActions.getGlobalData());
  }

  render() {
    // console.log('render: ', this.props)
    return (
      <Router>
        <div className="App w-100">
          <div className="bg-white d-flex justify-content-around">
            <div className="d-flex justify-content-center align-items-center">
              Logotipo
            </div>
          </div>
          <div className="bg-info">

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
