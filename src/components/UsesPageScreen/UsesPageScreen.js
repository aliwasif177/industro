import React from "react";
import "./UsesPageScreen.css";
import mainImage from '../../Assets/mainImg.png'
import firstImage from '../../Assets/firstImage.jpg'
import secondImage from '../../Assets/secondImage.jpg'
import thirdImage from '../../Assets/thirdImage.jpg'
import fourthImage from '../../Assets/fourthImage.jpg'
import fifthImage from '../../Assets/fifthImage.jpg'
import sixthImage from '../../Assets/sixthImage.jpg'
import seventhImage from '../../Assets/seventhImage.jpg'
import eighthImage from '../../Assets/eighthImage.jpg'
import logo from "../../Assets/logo.png";
import firstIcon from "../../Assets/firstIcon.svg";
import secondIcon from "../../Assets/secondIcon.svg";
import thirdIcon from "../../Assets/thirdIcon.svg";
import Slide from "react-reveal/Slide";



const UsesPageScreen = () => {

  return (
    <div className="uses-page-screen">
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 col-md-4">
            <div className="uses-page-screen-text-head">
              <h1 className="uses-screen-main-text">Solid Ash Bricks</h1>
            </div>
          </div>
          <div className="col">
            <Slide right>
              <div className="uses-page-screen-img-head">
                <img
                  src={mainImage}
                  className="img-fluid"
                />
              </div>
            </Slide>
          </div>
        </div>
        <div className="row uses-page-screen-cards-div">
          <div className="col">
            <div className="card uses-page-screen-cards">
              <div className="card-img">
                <img src={firstIcon}  />
              </div>
              <div className="card-text inexpensive-card-head-text">
                Lower Construction Cost
              </div>
              <div className="card-prim-text pb-4">
                Solid Fly Ash Bricks reduce overall construction costs by upto 30%.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card uses-page-screen-cards">
              <div className="card-img">
                <img src={secondIcon} className='filterit' />
              </div>
              <div className="card-text inexpensive-card-head-text">
                Fire Resistance
              </div>
              <div className="card-prim-text">
                Solid Fly Ash Bricks are made from materials which do not catch fire and are at a much lower risk.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card uses-page-screen-cards">
              <div className="card-img">
                <img src={thirdIcon} className='filterit' />
              </div>
              <div className="card-text inexpensive-card-head-text">
                Environment Friendly

              </div>
              <div className="card-prim-text">
                Solid Fly Ash Bricks are made from pulverized coal, the ash left after coal.

              </div>
            </div>
          </div>
        </div>

        {/* mobile view */}

        <div className="row d-md-none top-card-sm ">
          <div className="col-3"></div>
          <div className="col-6 ">
            <div className="card cards-small ">
              <div className="card-body">
                <div className="card-img ">
                  <div className="rotate-card-icons">
                    <img src={firstIcon} alt="Privacy" className="adjust-logo-m" />
                  </div>
                </div>
                <div className="adjust-heading-m pt-2">Lower Construction Cost
</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 mt-4 d-md-none ">
          <div className="col-6">
            <div className="card cards-small cards-small-adjust ">
              <div className="card-body">
                <div className="card-img">
                  <div className="rotate-card-icons">
                    <img
                      src={secondIcon}
                      alt="Modem"
                      className="adjust-logo-m filterit"
                    />
                  </div>
                </div>
                <div className="adjust-heading-m pt-2">Fire Resistance
</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card cards-small pb-2">
              <div className="card-body ">
                <div className="card-img">
                  <div className="rotate-card-icons">
                    <img src={thirdIcon} alt="Cloud" className="adjust-logo-m filterit" />
                  </div>
                </div>
                <div className="adjust-heading-m pt-2">Environment Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-page-screen-details-section">
        <div className="container">
          <div className="row">
            <div className="col-12 order-last col-md-8 order-md-first">
              <div className="user-page-screen-details-part-one" >

                <div className="details-part-one-img-head">
                  <img
                    src={firstImage}
                    className="img-fluid women-personal"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="details-part-one-text-head">
                <div className="details-part-one-text-main">
                  2x Strength

                </div>
                <div className="details-part-one-text-sec">Solid Fly Ash Bricks are at minimum 2,000 psi and can even go upto 4,000 psi, compared to Red Clay Bricks which have a range from 800 psi to 1,200 psi, making Solid Fly Ash Bricks 100% stronger.

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="user-page-screen-details-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="details-part-one-text-head">
                <div className="details-part-one-text-main">Lower Construction Cost

              </div>
                <div className="details-part-one-text-sec">Solid Fly Ash Bricks reduce overall construction costs by upto 30%. How? They do not require plaster before paint filling. Due to their fair face finish, you can directly apply paint filling. They also don't require as much mortar as Red Clay Bricks. Due to the uniform and symmetrical nature of Solid Fly Ash bricks, you can save upto 50% of mortar usage.

              </div>
              </div>
            </div>
            <div className="col">
              <div className="user-page-screen-details-part-one">
                <div className="details-part-one-img-head">
                  <img
                    src={secondImage}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="user-page-screen-details-section">
        <div className="container">
          <div className="row">
            <div className="col-12 order-last col-md-7 order-md-first">
              <div className="user-page-screen-details-part-one">
                <div className="details-part-one-img-head">
                  <img
                    src={thirdImage} className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="details-part-one-text-head">
                <div className="details-part-one-text-main">
                Environment Friendly
                </div>
                <div className="details-part-one-text-sec">
                Solid Fly Ash Bricks are made from pulverized coal which is the ash left after coal is burned to generate electricity. The manufacturing of Solid Fly Ash bricks emit 0 emissions and are the ultimate green alternative to Red Clay Bricks which release tremendous amounts of Co2 emissions. Save the environment by going Solid.

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-page-screen-details-section"><div className="container"><div className="row"><div className="col-12 col-md-5"><div className="details-part-one-text-head"><div className="details-part-one-text-main">No Seapage</div><div className="details-part-one-text-sec">Due to much less water absoprtion, Solid Fly Ash bricks do not cause seapage issues and don't require long drying times like Red Clay Bricks. Once painted, the paint is also not at risk of peeling off in the case of Solid Fly Ash Bricks. No longer do you have to worry about long drying times and reduce the costs of repainting.</div></div></div><div className="col"><div className="user-page-screen-details-part-one"><div className="details-part-one-img-head"><img src={fourthImage} className="img-fluid" /></div></div></div></div></div></div>
      <div className="user-page-screen-details-section"><div className="container"><div className="row"><div className="col-12 order-last col-md-7 order-md-first"><div className="user-page-screen-details-part-one"><div className="details-part-one-img-head"><img src = {fifthImage} className="img-fluid"/></div></div></div><div className="col"><div className="details-part-one-text-head"><div className="details-part-one-text-main">Less heat</div><div className="details-part-one-text-sec">Due to the deflection properties of Solid Fly Ash Bricks, they do not absord the outside heat, keeping your house cool in the summers and warm in the winters.</div></div></div></div></div></div>
      <div className="user-page-screen-details-section"><div className="container"><div className="row"><div className="col-12 col-md-5"><div className="details-part-one-text-head"><div className="details-part-one-text-main">sound proof</div><div className="details-part-one-text-sec">Due to a higher density of Solid Fly Ash Bricks, they provide much more sound resistance as compared to Clay Bricks.</div></div></div><div className="col"><div className="user-page-screen-details-part-one"><div className="details-part-one-img-head"><img src= {sixthImage} className="img-fluid"/></div></div></div></div></div></div>
      <div className="user-page-screen-details-section"><div className="container"><div className="row"><div className="col-12 order-last col-md-7 order-md-first"><div className="user-page-screen-details-part-one"><div className="details-part-one-img-head"><img src={seventhImage} className="img-fluid"/></div></div></div><div className="col"><div className="details-part-one-text-head"><div className="details-part-one-text-main">Fire Resistance</div><div className="details-part-one-text-sec">Solid Fly Ash Bricks offer much better fire resistance as compared to Clay Bricks. Solid Fly Ash Bricks are made from materials which do not catch fire and are at a much lower risk.</div></div></div></div></div></div>
      <div className="user-page-screen-details-section"><div className="container"><div className="row"><div className="col-12 col-md-5"><div className="details-part-one-text-head"><div className="details-part-one-text-main">Termite Resistance</div><div className="details-part-one-text-sec">Since Red Clay Bricks are made of soil/clay, they have the tendency to become havens for termites. Solid Fly Ash Bricks do not contain clay and are free of termite resistance.</div></div></div><div className="col"><div className="user-page-screen-details-part-one"><div className="details-part-one-img-head"><img src={eighthImage} className="img-fluid"/></div></div></div></div></div></div>
    </div>
  );
};
export default UsesPageScreen;
