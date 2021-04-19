import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Toggler from "../toggler/toggler";
import whats from '../../Assets/whats.png'
import logo from '../../Assets/logo.png'
import { withRouter, NavLink } from "react-router-dom";

import "./navbar.css";

class Header extends Component {
  state = {
    navbarClass: "",
    expanded: false,
  };
  
  

  
  navigation = () => {
    this.props.history.push('/');
    this.setState({
      navbarClass: "backgroung:green",
      openLogin: false,
    });
  };

  render() {
    return (
      <div>
        <div className="navbar-size">
          <Navbar
            collapseOnSelect
            expand="sm"
            
            className={this.props.downloadStatus ? "setColor-download fixed-top" : "setColor fixed-top"}
            onToggle={this.setExpanded}
            expanded={this.state.expanded}
          >
            <div className="">
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={this.setExpanded}
              >
                <Toggler />
              </Navbar.Toggle>
              <Navbar.Brand
                className="cursor pl-2 d-none d-lg-block"
                onClick={() => this.navigation()}
              >
                <img src={logo} height="45px" alt="trango"></img>
              </Navbar.Brand>
              <Navbar.Brand
                className="cursor pl-2 d-lg-none"
                onClick={() => this.navigation("/")}
              >
                <img src={logo} alt="trango" height="30px"></img>
              </Navbar.Brand>
            </div>
            <Nav className="mr-auto padding-resp d-none d-sm-inline-block  ">
                
                  {/* <Nav.Link
                    className = 'text-light d-inline'
                  > */}
                    <NavLink
                      activeClassName= "check"
                      
                      className="border-change text-dark d-inline"
                      to= '/'
                    >
                    Home
                    </NavLink>
                  {/* </Nav.Link> */}
            </Nav>
            <div className="stores d-none d-sm-block ml-auto text-light d-inline move-right">
              
              {/* <NavLink
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  fontFamily: "axiforma",
                }}
                activeClassName="check"
                className="mx-3 border-change"
                to="/Download"
              >
                <img/> 
               +92 309 5360060
              </NavLink> */}

            <div className="ml-auto text-light d-inline move-right">
              <a href="https://api.whatsapp.com/send?phone=923095360060" target='_blank'>
                <span><img src={whats} className="whstap_img" height="20px"/>+92 309 5360060</span>
                </a>
                </div>
            </div>
          </Navbar>
          <i
            className="fa fa-user  d-none d-sm-block "
            onClick={() => this.openModal()}
          ></i>
        </div>
      </div>
    );
  }
}
export default withRouter(Header);