import React, { Component } from "react";
import Header from "../navbar/navbar";
import Footer from "../footer/footer";

class  Layout extends Component{

  state={scrollPosition:''}

  render(){
    return (
      <div>
        <Header  scroll={this.props.scroll}  />
        {this.props.children}
        <Footer />
      </div>
    );
  }
  
};
export default Layout;
