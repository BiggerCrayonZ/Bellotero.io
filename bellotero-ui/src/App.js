import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    console.log('props: ', this.props)
    return (
      <div className="App">
        Init Bellotero
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App)

// export default App;
