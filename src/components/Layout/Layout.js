import React, { Component } from "react";
import Header from "../navbar/navbar";
import Footer from "../footer/footer";

class  Layout extends Component{



  state={scrollPosition:''}


  links = [
    //set a link array so we can set navbar link dynamically
    { lable: "Uses", link: "#Personal" },
    // { lable: "Pricing", link: "#Pricing" },
    // { lable: "Support", link: "#Support" },
    { lable: "Contact Us", link: "#ContactUs" },
    
    // { lable: "About", link: "#About" },
    
    
    // { lable: "Uses", link: "#Uses" },
    
    
    
    
    
    
  ];

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
