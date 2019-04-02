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
      if (globalReducer.success && globalReducer.data) {
        return (<NavBar items={globalReducer.data.menu.items} />);
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
    let routeArray = [];
    const { globalReducer } = this.props;
    if (globalReducer.data && globalReducer.success) {
      globalReducer.data.menu.items.map(item => {
        switch (item.text) {
          case 'Testimonial':
            routeArray.push(<Route path={item.route} exact={true} />)
            break;
          default:
            routeArray.push(<Route path={item.route} exact={true} />)
        }
      })
      return (
        <div className="w-100 h-100 p-2 ">
          {routeArray}
        </div>
      );
    } else {
      return (<Error />);
    }
  }

  render() {
    console.log('render: ', this.props)
    return (
      <Router>
        <div className="App w-100">
          <div className="bg-white d-flex justify-content-around">
            <div className="d-flex justify-content-center align-items-center">
              Logotipo
            </div>
            {/* Render NavBar */}
            {this.renderNavBar()}
          </div>
          <div className="bg-info">
            {/* Render Route */}
            {this.renderRoute()}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
