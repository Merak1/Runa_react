import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ping } from './actions/index'
import Home from './components/Home'

//TODO  (1.-) The action is getting imported from te actions folder


//? Down here, app is calling {isPinging,ping} as props
// let App = ({ isPinging, ping }) => (
//   <div>
//     <h1>is pinging: {this.props.isPinging.toString()}</h1>
//     <button onClick={this.props.ping}>Start PING</button>
//     {/*  (2.-)The onclick event triggers the ping ACTION we imported, dispatching it to the reducers  */}
//   </div>
// );

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Home />
        {/* <div>
          <h1>is pinging: {this.props.isPinging.toString()}</h1>
          <button onClick={this.props.ping}>Start PING</button>
        </div> */}
        {/*  (2.-)The onclick event triggers the ping ACTION we imported, dispatching it to the reducers  */}


      </div >
    );
  }
}
const mapStateToProps = state => ({ ...state });
App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
  //TODO (3.-) 
  //? Here the 'ping' function that we got from action is connecting it and adding it to the props 
)(App);
// const mapDispatchToProps = dispatch =>
// bindActionCreators({
// fetchPokemon
// }, dispatch);


// const CounterContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);



export default App;
