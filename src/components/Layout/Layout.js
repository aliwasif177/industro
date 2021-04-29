import React, { Component } from "react";
import Header from "../navbar/navbar";
import Footer from "../footer/footer";
import UsesPageScreen from "../UsesPageScreen/UsesPageScreen";

class Layout extends Component {
  state = { scrollPosition: "", language: "Eng" };

  setLanguage = () => {
    if (this.state.language === "Eng") {
      this.setState({
        language: "urdu",
      });
    } else {
      this.setState({
        language: "Eng",
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          scroll={this.props.scroll}
          language={this.state.language}
          setLanguage={this.setLanguage}
        />
        <UsesPageScreen language={this.state.language} />
        <Footer language={this.state.language} />
      </div>
    );
  }
}
export default Layout;
