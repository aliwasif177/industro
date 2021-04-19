import React from "react";
const aboutScreen = () => {
  return (
    <div className="privacy-screen mt-5">
      <div className="row no-padding">
        <div className="col-lg-12 ">
          <div className=" py-5">
            <div className="Privacy-Policy container text-center  ">
              <h1>Error!</h1>
          </div>
          </div>
        </div>
      </div>
      <div className="row no-padding explaination-area text-center py-5 my-5">
          <div className="How-Trango-handles-your-data text-center container  mt-5">
              <h1 style={{fontFamily:"axiforma"}}>404</h1>
          </div>
          <div className="How-Trango-handles-your-data text-center container" style={{fontFamily:"axiforma",display:'block'}}>
              Page Not Found
          </div>
          <div className="text-center container pb-5" style={{fontFamily:"poppins"}}>
          The specified URL not found on this website. Please check the URL for mistakes and try again.
          </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default aboutScreen;
