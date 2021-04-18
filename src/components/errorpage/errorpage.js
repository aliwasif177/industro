import React from "react";
// import Scrollspy from "react-scrollspy";
// import "./aboutScreen.css";
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import "./privacyScreen.css";
// import arrows from "../../Assets/Images/privacyScreen/svg/arrowPattern.svg";
const aboutScreen = () => {
  return (
    <div className="privacy-screen mt-5">
      <div className="row no-padding">
        <div className="col-lg-12 ">
          <div className=" py-5">
            {" "}
            {/* <div className="Updated-on-1st-May-2020 ">
              <span className="text-style-1"> updated on:</span>1st May 2020
            </div> */}
            <div className="Privacy-Policy container text-center  ">
              <h1>Error!</h1>
            </div>
            {/* <div className="How-Trango-handles-your-data">
              Everything you need to know about trango
            </div> */}
          </div>
        </div>
        {/* <div className="col-lg-2"></div> */}
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
        {/* <div className="col">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 d-none d-lg-block    head-container  pb-4 mt-3 pt-4   ">
              <div className="intro-subheadings sticky-menu ">
              

                <Scrollspy
                  items={[
                    "Idea",
                    "Introduction",
                    "Application",
                    
                    
                    "Changes",
                    "Country",
                    "Purpose",
                  ]}
                  currentClassName="is-current"
                  offset={-20}
                >
                  <div className="py-3">
                    <Link smooth to="/About#Idea"> Idea</Link>
                  </div>
                  <div className="py-3">
                    <Link  smooth to="/About#Introduction"> What is trango</Link>
                  </div>
                  <div className="py-3">
                  <Link smooth  to="/About#Application">Our Story</Link>
                  </div>
                  
                </Scrollspy>
              </div>
            </div>

            <div className="col-lg-8 text-center ">
              <div className="container">
              <div className="pt-2">
                    <div className="-INTRODUCTION mt-2" id="Idea">
                      1. Idea
                    </div>
                  <div className="intro-para mt-2">
                  Do you know that a human mind thinks between 60-80k thoughts a day? Rarely does it happen that a thought stays with you. For this to happen, it has to have a tinge of emotion; may it be an inspiration, hope, pride or a sense of fulfillment. It is something that keeps tapping your heart. It is intriguing that a mere act of thinking can give birth to something tangible, something powerful, something that can transform lives. One such thought gave birth to Trango.
                    <br />
                    <br />
                    Trango began with a belief that there must be a way that makes local communications easier, cheaper and faster. Why does file sharing has to take forever? Why can’t it happen in a fraction of a second- literally? Why do audio/video calls need internet when you are on same network? What is it that enables you and your organization to have a great communication network so you can save time and money?
                    <br /> <br />
                    Great software transforms our lives. Don’t we use Photoshop instead of being satisfied with bland lightening effects? Don’t we use online banking applications instead of standing in queues for hours? So why are we still using century-old intercom/pbx that is incompatible with today’s needs.
                    
                  </div>
                </div>
                <div className="pt-2">
                  <div className="-INTRODUCTION mt-2" id="Introduction">
                    2. What is trango?
                  </div>
                  <div className="intro-para">
                  Trango is a taking your communications one step further to become truly private by enabling your organization to let its team members call and share files over your local network and the wider internet.    
                    <br />
                    <br />
                    Trango’s infrastructure is available on the cloud and you can also host it anywhere by yourself as well. 
                    
                  </div>
                </div>
                <div className="pb-2" >
                  <div className="-INTRODUCTION" id="Application">3. Our Story</div>
                  <div className="intro-para">
                    We needed a fast, reliable and efficient communications
                    network in our factory comprising of around hundred people.
                    Just like you we were also using time-old and limiting
                    intercom, walkie talkies; and internet enabled softwares
                    like Whatsapp and Signal to communicate with each other even
                    while being on the same Wi-Fi network. With increasing
                    desire to have a great communications network we set out to
                    find the application which would allow us to make HD calls
                    and share large files over LAN with a serverless
                    architecture. Surprisingly, we found none.
                    <br />
                    <br />
                    However, this did not curb our curiosity to discover the
                    solution we were looking for. Since what we needed did not
                    exist, we embarked on a challenging yet beautiful journey to
                    build it ourselves. We saw local communications from a
                    different perspective inside out: how to get more out of
                    LAN, how to make quality calls, how to not compromise on
                    privacy, how to share large files instantly, and all this
                    while making local communications much cheaper.
                    <br/> <br/>
                    Trango-named after venerable Trango Towers-is a reliable, fast and instant communications app which works over LAN and internet as well. We installed it in our factory and the results were magical. It was accepted and hailed so much as if it quenched an annoyance that had endured through time.
                    <br/><br/>
                    Trango is countering long-standing frustrations and worries. It is a modern communication software you would wish you had much earlier. We believe when people come together around a shared belief, ideas are converted into realities. That’s like magic-magic that happened to us-and you believe it when you experience it.
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div> */}

        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default aboutScreen;
