import React, { Component } from "react";
import ReactToolTip from "react-tooltip";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Toggler from "../../UI/toggler/toggler";
import whats from '../../Assets/whats'
import logo from '../../Assets/whats.png'

import "./header.css";
import "react-notifications-component/dist/theme.css";

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
                <img src={logo_s} height="37px" alt="trango"></img>
              </Navbar.Brand>
              <Navbar.Brand
                className="cursor pl-2 d-lg-none"
                onClick={() => this.navigation("/")}
              >
                <img src={logo} alt="trango" height="30px"></img>
              </Navbar.Brand>
            </div>
            <Nav className="mr-auto padding-resp d-none d-sm-inline-block  ">
                return (
                  <Nav.Link
                    className={
                      link.lable === "Download"
                        ? " ml-auto text-light d-inline "
                        : "text-light d-inline "
                    }
                    className = 'text-light d-inline'
                    key={index}
                  >
                    <NavLink
                      activeClassName= "check"
                      className="border-change"
                      key={index}
                      to= '/'
                    >
                    Home
                    </NavLink>
                  </Nav.Link>
                );
              // })}
            </Nav>
            <div className="stores d-none d-sm-block ml-auto text-light d-inline move-right">
              <ReactToolTip />
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

            <div class="ml-auto text-light d-inline move-right">
              <a href="https://api.whatsapp.com/send?phone=923095360060">
                <span><img src={whats} class="whstap_img" height="20px"/>+92 309 5360060</span>
                </a>
                </div>
            </div>

            <div id="responsive-navbar-nav">
              <Sidebar show={this.state.expanded} onBlur={this.closeNav} />
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