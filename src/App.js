import { connect } from 'react-redux'; //connect is a function which connects your state to the components that you are importing to, refer to last line
import './App.css';

//lifting state up - it's when you share the state and you lift state from the child components to the parent one, so that all of the other components sharing state
//Global state = global store, redux is another way of managing state
//Redux uses Flux pattern : Action => Reducer => Dispatcher(handle request) => Store (put result into database)=> View
//https://redux.js.org/introduction/getting-started
//https://redux.js.org/ 

// 3 principles of Redux
// 1. Single source of truth
// 2. State is read only : immutable
// 3. Changes are made using pure function aka Reducers
// Action: is something that a user does (clicking a button for ex.)
// Reducer: a pure function that receives an input and create an output
// output is the entire state of the app (global store)
// Store: entire state of the app

//Steps: 
//install dependencies: npm i redux react-redux
//in index.js: import { createStore } from 'redux';



function App(props) {
  //dispatch is a function that accepts an object which is used
    //to update the Redux State
    const handleInc = (event) => {
      props.dispatch({ //dispatch is a method from store from index.js
        type: 'INCREMENT'
      })}
  
    const handleDec = (event) => {
      props.dispatch({
        type: 'DECREMENT'
      })
    }
  
  
    return (
      <div className="App">
        <header>
          <button onClick={handleInc}>Increment</button>
          <button onClick={handleDec}>Decrement</button>
            <p>{props.count}</p>
        </header>
      </div>
    );
  }

//now for our store to be passed down,
  //creating function that connect will use to pass data down
  const mapStateToProps = (state) => {
    return {
      count: state.count
    }
  }
  
  
  export default connect(mapStateToProps)(App);