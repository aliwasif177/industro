import React from "react";
import "./footer.css";
import logo from "../../Assets/logo.png";

const footer = (props) => {
  return (
    <div style={{ height: "100%" }}>
      <footer className="d-none d-md-block">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-3">
              <div>
                <div>
                  <a href="#">
                    <img
                      src={logo}
                      className="footer-logo img-fluid"
                      alt="Industro"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="foot-heading">
                {" "}
                {props.language === "Eng" ? "Contact Us" : "ہم سے رابطہ کریں"}
              </div>
              <div className="linked-num">
                <a
                  href="https://api.whatsapp.com/send?phone=923095360060"
                  target="_blank"
                >
                  +92 309 5360060
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="MuiDivider-root footer-divider" />
        <div className="container">
          <div className="row">
            <div className="col align-left">
              <div className="footer-copyright d-none d-lg-block">
                © 2021 Copyright:
                <span className="inc">
                  <a
                    href="#"
                    style={{ color: "rgb(255, 255, 255)", opacity: "1" }}
                  >
                    &nbsp;Industro Inc.
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container d-lg-none d-md-block d-sm-block">
          <div className="row p-0 m-0">
            <div className="col-12">
              <div className="container">
                <div className="copyright text-center py-2">
                  © 2021 Copyright:
                  <span style={{ color: "white" }}>
                    <a href="#">&nbsp;Industro Inc.</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="d-md-none">
        <div className="container py-5">
          <div className="row">
            <div className="col-2">
              <img src={logo} className="d-block pl-2 img-fluid" alt="Trango" />
            </div>
            <div className="col-5">
              <div className="pt-1 pl-3">
                <div className="foot-heading">
                  {props.language === "Eng" ? "Contact Us" : "ہم سے رابطہ کریں"}{" "}
                </div>
                <div className="linked-num">
                  <a
                    href="https://api.whatsapp.com/send?phone=923095360060"
                    target="_blank"
                  >
                    +92 309 5360060
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container d-lg-none d-md-block d-sm-block">
          <div className="row p-0 m-0">
            <div className="col-12">
              <div className="container">
                <div className="copyright text-center py-2">
                  © 2021 Copyright:
                  <span style={{ color: "white" }}>
                    <a href="#">&nbsp;Industro Inc.</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
