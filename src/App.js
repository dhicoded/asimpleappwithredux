import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/login";
import { Provider } from 'react-redux';
import Welcome from "./components/welcome/welcome";
import React from 'react';
import store from './store';
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom';
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/welcome' element={<Welcome/>}/>        
        </Routes>
        </BrowserRouter> */}
        <Login></Login>
        <Welcome></Welcome>
      </Provider>
    </div>
  );
}

export default App;
