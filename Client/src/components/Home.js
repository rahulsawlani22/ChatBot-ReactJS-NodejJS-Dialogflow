import React, { Component } from 'react'
import {Link,
    Route,
  BrowserRouter as Router
  } from 'react-router-dom';
import Chatbox from "./Chatbox"
export default class Home extends Component {
    render() {
        return (
            <div>
                <Route>
                    <Route path="/Chatbox"><Chatbox /></Route>
                    <Link to="/Chatbox"><img className="letschat" src={require("../circle-cropped.png")} alt="LetsChat"/></Link>
                </Route>
                
            </div>
        )
    }
}
