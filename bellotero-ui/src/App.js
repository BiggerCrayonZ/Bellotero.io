import React, { Component } from 'react';
import './App.scss';

// Actions
import globalActions from './redux/actions/globalActions';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import NavBar from './components/template/NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Error } from '@material-ui/icons';

// Img
import bellotero from './assets/img/bellotero.png';

class App extends Component {

  // React LC
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(globalActions.getGlobalData());
  }

  // Render
  renderNavBar = () => {
    const { globalReducer } = this.props;
    if (globalReducer.submit) {
      return (
        <div className=" h-100 d-flex align-items-center ">
          <CircularProgress color="primary" />
        </div>)
    } else {
      if (globalReducer.success && globalReducer.data.items) {
        return (<NavBar items={globalReducer.data.items} />);
      } else {
        return (
          <div className=" h-100 d-flex align-items-center ">
            <Error />
          </div>
        );
      }
    }
  }

  renderRoute = () => {
    const { globalReducer } = this.props;
    if (globalReducer.submit) {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <CircularProgress />
        </div>
      );
    } else {
      if (globalReducer.success && globalReducer.data) {
        let routeArray = [];
        const items = globalReducer.data.items;
        items.forEach((item, index) => {
          routeArray.push(
            <Route
              key={index}
              path={"/" + item.route}
              component={item.component} />)
        });
        return routeArray;
      } else {
        return (<Error />);
      }
    }
  }

  render() {
    return (
      <Router>
        <div className="App w-100">
          <div className="bg-white d-flex justify-content-around">
            <div className="d-flex justify-content-center align-items-center">
              <img alt="bellotero" className="logo" src={bellotero} />
            </div>
            {/* Render NavBar */}
            {this.renderNavBar()}
          </div>
          <div className="bg-info">
            {/* Render Route */}
            <div className="w-100 h-100 p-2 ">
              {this.renderRoute()}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
