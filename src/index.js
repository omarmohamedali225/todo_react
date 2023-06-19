import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

function index(){
  setInterval(()=>{
    if(!localStorage.getItem('Note')){
      localStorage.setItem('Note',JSON.stringify([]));
    }
  },1)
  return(
    <Router>
      <Navbar/>
      <App/>
    </Router>
  )
}

root.render(index())