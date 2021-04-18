import React from "react";
import "./footer.css";
import { Divider } from "@material-ui/core";
import logo from '../../Assets/logo.png'

const footer = () => {
return (

    <div style="height: 100%">
  <footer class="d-none d-md-block">
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-3">
          <div>
            <div>
              <a href="/"
                ><img
                  src={logo}
                  class="footer-logo img-fluid"
                  alt="Industro"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="foot-heading">Contact Us</div>
          <div class="linked-num"><a href="/about">+92 309 5360060</a></div>
          <div class="linked"><a href="/Personal">Uses</a></div>
          <div class="linked">
            <a
              href="https://blog.trango.io/"
              target="_blank"
              rel="noopener noreferrer"
              >Blog
              </a>
          </div>
          <div class="linked"><a href="/ContactUs">Partner with us</a></div>
        </div>
        <div class="col-3">
          <div class="foot-heading">Uses</div>
          <div class="linked"><a href="/Personal">Personal</a></div>
          <div class="linked"><a href="/Office">Office</a></div>
          <div class="linked"><a href="/Manufacturing">Manfacturing</a></div>
          <div class="linked"><a href="/Remotes">Remote Sites</a></div>
        </div>
        <div class="col-3">
          <div class="foot-heading">Download App</div>
          <div class="d-flex row">
            <div class="col-lg-6"></div>
            <div class="col-lg-4"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <hr class="MuiDivider-root footer-divider" />
    <div class="container">
      <div class="row">
        <div class="col align-left">
          <div class="footer-copyright d-none d-lg-block">
            © 2021 Copyright:<span class="inc"
              ><a href="/" style="color: rgb(255, 255, 255); opacity: 1"
                >&nbsp;Industro Inc.</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-container d-lg-none d-md-block d-sm-block">
      <div class="row p-0 m-0">
        <div class="col-12">
          <div class="container">
            <div class="copyright text-center py-2">
              © 2021 Copyright:<span style="color: white">
                <a href="/">&nbsp;Industro Inc.</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer class="d-md-none">
    <div class="container py-5">
      <div class="row">
        <div class="col-2">
          <img
            src="/static/media/logo.e7d0b790.png"
            class="d-block pl-2"
            alt="Trango"
          />
        </div>
        <div class="col-5">
          <div class="pt-1 pl-3">
            <div class="foot-heading">Contact Us</div>
            <div class="linked-num"><a href="/about">+92 309 5360060</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-container d-lg-none d-md-block d-sm-block">
      <div class="row p-0 m-0">
        <div class="col-12">
          <div class="container">
            <div class="copyright text-center py-2">
              © 2021 Copyright:<span style="color: white"
                ><a href="/">&nbsp;Industro Inc.</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

)
}

export default footer;
