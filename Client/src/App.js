import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav , Form,FormControl,Button} from "react-bootstrap";
import Chatbox from "./components/Chatbox"
import Careers from "./components/Careers"
import Aboutus from "./components/Aboutus"
import Pricing from "./components/Pricing"
import Signin from "./components/Signin"
import Developers from "./components/Developers"
import Home from "./components/Home"

import {Link,
  Route,
BrowserRouter as Router
} from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <Router>

   <Navbar collapseOnSelect expand="lg" className="logotext" >
   <Navbar.Brand href="/Home" className="font-weight-bold "><Link to="/Home" style={{color:"inherit", textDecoration: 'none' }}>
      <img className="logo"
        alt=""
        src="logo.ico"
        width="35"
        height="35"
        className="d-inline-block align-top mr-2"
      />{'  '}
     CODEBOT </Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="#Developers"><Link to="/Developers" style={{color:"initial", textDecoration: 'none' }}>Developers</Link></Nav.Link>
      <Nav.Link href="#Careers"><Link to="/Careers" style={{color:"inherit", textDecoration: 'none' }}>Careers</Link></Nav.Link>
      <Nav.Link href="#Aboutus"><Link to="/Aboutus" style={{color:"inherit", textDecoration: 'none' }}>About Us</Link></Nav.Link>
      <Nav.Link href="#Pricing"><Link to="/Pricing" style={{color:"inherit", textDecoration: 'none' }}>Pricing</Link></Nav.Link>
    </Nav>
    <Form inline>
    <Nav.Link href="#SignIn-Up"><Link className="signlink" to="/Signin" >SignIn/SignUp</Link></Nav.Link>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="dark">Search</Button>
  </Form>
  </Navbar.Collapse>
</Navbar>
<Route path="/Chatbox"><Chatbox /></Route>
<Route path="/Aboutus"><Aboutus /></Route>
<Route path="/Careers"><Careers /></Route>
<Route path="/Developers"><Developers /></Route>
<Route path="/Pricing"><Pricing /></Route>
<Route path="/Signin"><Signin /></Route>
<Route path="/Home"><Home /></Route>


</Router>
 </div>
    
  );
}

export default App;
