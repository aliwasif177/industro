import React, { useState } from "react";
import "./UsesPageScreen.css";
import mainImage from "../../Assets/mainImg.png";
import firstImage from "../../Assets/firstImage.jpg";
import secondImage from "../../Assets/secondImage.jpg";
import thirdImage from "../../Assets/thirdImage.jpg";
import fourthImage from "../../Assets/fourthImage.jpg";
import fifthImage from "../../Assets/fifthImage.jpg";
import sixthImage from "../../Assets/sixthImage.jpg";
import seventhImage from "../../Assets/seventhImage.jpg";
import eighthImage from "../../Assets/eighthImage.jpg";
import logo from "../../Assets/logo.png";
import firstIcon from "../../Assets/firstIcon.svg";
import secondIcon from "../../Assets/secondIcon.svg";
import thirdIcon from "../../Assets/thirdIcon.svg";
import Slide from "react-reveal/Slide";

const UsesPageScreen = (props) => {
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
                <img src={mainImage} className="img-fluid" />
              </div>
            </Slide>
          </div>
        </div>
        <div className="row uses-page-screen-cards-div">
          <div className="col">
            <div className="card uses-page-screen-cards">
              <div className="card-img">
                <img src={firstIcon} />
              </div>
              <div className="card-text inexpensive-card-head-text">
                {props.language === "Eng"
                  ? "Lower Construction Cost"
                  : "کم تعمیراتی لاگت"}
              </div>
              <div className="card-prim-text pb-4">
                {props.language === "Eng"
                  ? "Solid Fly Ash Bricks reduce overall construction costs by upto 30%."
                  : "سالڈ فلائی ایش اینٹوں نے مجموعی طور پر تعمیراتی لاگتوں میں 30٪ تک کمی کردی ہے۔"}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card uses-page-screen-cards">
              <div className="card-img">
                <img src={secondIcon} className="filterit" />
              </div>
              <div className="card-text inexpensive-card-head-text">
                {props.language === "Eng" ? "Fire Resistance" : "آگ مزاحمت"}
              </div>
              <div className="card-prim-text">
                {props.language === "Eng"
                  ? " Solid Fly Ash Bricks are made from materials which do not catch fire and are at a much lower risk."
                  : "ٹھوس فلائی ایش اینٹیں ایسی مادے سے بنی ہیں جن سے آگ نہیں لگتی ہے اور اس کا خطرہ بہت کم ہوتا ہے۔"}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card uses-page-screen-cards">
              <div className="card-img">
                <img src={thirdIcon} className="filterit" />
              </div>
              <div className="card-text inexpensive-card-head-text">
                {props.language === "Eng"
                  ? "Environment Friendly"
                  : "ماحول دوست"}
              </div>
              <div className="card-prim-text">
                {props.language === "Eng"
                  ? "Solid Fly Ash Bricks are made from pulverized coal, the ash left after coal."
                  : "ٹھوس اڑنے والی اینٹیں پلورائزڈ کوئلے سے بنی ہیں ، کوئلہ کے بعد راکھ باقی ہے"}
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
                    <img
                      src={firstIcon}
                      alt="Privacy"
                      className="adjust-logo-m"
                    />
                  </div>
                </div>
                <div className="adjust-heading-m pt-2">
                  {props.language === "Eng"
                    ? "Lower Construction Cost"
                    : "کم تعمیراتی لاگت"}
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
                <div className="adjust-heading-m pt-2">
                  {props.language === "Eng" ? "Fire Resistance" : "آگ مزاحمت"}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card cards-small pb-2">
              <div className="card-body ">
                <div className="card-img">
                  <div className="rotate-card-icons">
                    <img
                      src={thirdIcon}
                      alt="Cloud"
                      className="adjust-logo-m filterit"
                    />
                  </div>
                </div>
                <div className="adjust-heading-m pt-2">
                  {props.language === "Eng"
                    ? "Environment Friendly"
                    : "ماحول دوست"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-page-screen-details-section">
        <div className="container">
          <div className="row">
            <div className="col-12 order-last col-md-8 order-md-first">
              <div className="user-page-screen-details-part-one">
                <div className="details-part-one-img-head">
                  <img src={firstImage} className="img-fluid women-personal" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="details-part-one-text-head">
                <div className="details-part-one-text-main">
                  {props.language === "Eng" ? "2x Strength" : "طاقت"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? "Solid Fly Ash Bricks are at minimum 2,000 psi and can even go upto 4,000 psi, compared to Red Clay Bricks which have a range from 800 psi to 1,200 psi, making Solid Fly Ash Bricks 100% stronger."
                    : "سولڈ فلائی ایش اینٹیں کم سے کم 2،000 psi ہیں اور یہاں تک کہ 4000 psi تک جاسکتی ہیں ، اس کے مقابلے میں ریڈ کلے اینٹوں کی حد ہوتی ہے جس کی رینج 800 psi سے 1،200 psi ہے ، جس سے سالڈ فلائی ایش اینٹوں کو 100٪ مضبوط بنایا جاتا ہے۔"}
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
                <div className="details-part-one-text-main">
                  {props.language === "Eng"
                    ? "Lower Construction Cost"
                    : "کم تعمیراتی لاگت"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? " Solid Fly Ash Bricks reduce overall construction costs by upto 30%. How? They do not require plaster before paint filling. Due to their fair face finish, you can directly apply paint filling. They also don't require as much mortar as Red Clay Bricks. Due to the uniform and symmetrical nature of Solid Fly Ash bricks, you can save upto 50% of mortar usage."
                    : "سالڈ فلائی ایش اینٹوں نے مجموعی طور پر تعمیراتی لاگتوں میں 30٪ تک کمی کردی ہے۔ کیسے؟ پینٹ بھرنے سے پہلے انہیں پلاسٹر کی ضرورت نہیں ہوتی ہے۔ چہرے کے صاف ہونے کے سبب ، آپ براہ راست پینٹ بھرنے کا اطلاق کرسکتے ہیں۔ انہیں ریڈ کلے اینٹوں کی طرح مارٹر کی بھی ضرورت نہیں ہے۔ سالڈ فلائی ایش اینٹوں کی وردی اور متوازی نوعیت کی وجہ سے ، آپ مارٹر کے استعمال میں 50٪ بچت کرسکتے ہیں۔"}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="user-page-screen-details-part-one">
                <div className="details-part-one-img-head">
                  <img src={secondImage} className="img-fluid" />
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
                  <img src={thirdImage} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="details-part-one-text-head">
                <div className="details-part-one-text-main">
                  {props.language === "Eng"
                    ? "Environment Friendly"
                    : "ماحول دوست"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? " Solid Fly Ash Bricks are made from pulverized coal which is the ash left after coal is burned to generate electricity. The manufacturing of Solid Fly Ash bricks emit 0 emissions and are the ultimate green alternative to Red Clay Bricks which release tremendous amounts of Co2 emissions. Save the environment by going Solid."
                    : "سالڈ فلائی ایش اینٹیں پلورائزڈ کوئلے سے بنی ہیں جو بجلی پیدا کرنے کے لئے کوئلے کو جلا دینے کے بعد راکھ رہ گئی ہے۔ سالڈ فلائی ایش اینٹوں کی تیاری 0 کے اخراج کو خارج کرتی ہے اور یہ ریڈ کلے اینٹوں کا حتمی سبز متبادل ہے جو Co2 کے اخراج کی زبردست مقدار کو جاری کرتا ہے۔ ٹھوس جاکر ماحول کو بچائیں۔"}
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
                <div className="details-part-one-text-main">
                  {props.language === "Eng" ? "No Seapage" : "کوئی پھاٹک نہیں"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? "     Due to much less water absoprtion, Solid Fly Ash bricks do not cause seapage issues and don't require long drying times like Red Clay Bricks. Once painted, the paint is also not at risk of peeling off in the case of Solid Fly Ash Bricks. No longer do you have to worry about long drying times and reduce the costs of repainting."
                    : "بہت کم پانی سے بچنے کی وجہ سے ، ٹھوس فلائی ایش اینٹوں سے سیپج کے مسائل پیدا نہیں ہوتے ہیں اور انہیں طویل عرصے سے خشک کرنے والی اوقات جیسے ریڈ کلے اینٹوں کی ضرورت نہیں ہوتی ہے۔ ایک بار پینٹ کرنے کے بعد ، سولیڈ فلائی ایش اینٹوں کی صورت میں اس پینٹ کو چھیلنے کا خطرہ بھی نہیں ہے۔ اب آپ کو خشک کرنے کے طویل اوقات کے بارے میں فکر کرنے کی ضرورت نہیں ہے اور دوبارہ رنگ کاری کے اخراجات کو کم کرنا ہے۔"}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="user-page-screen-details-part-one">
                <div className="details-part-one-img-head">
                  <img src={fourthImage} className="img-fluid" />
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
                  <img src={fifthImage} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="details-part-one-text-head">
                <div className="details-part-one-text-main">
                  {props.language === "Eng" ? "Less heat" : "کم گرمی"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? "   Due to the deflection properties of Solid Fly Ash Bricks, theydo not absord the outside heat, keeping your house cool in the summers and warm in the winters."
                    : "سالڈ فلائی ایش اینٹوں کی چھوٹی خصوصیات کی وجہ سے ، وہ باہر کی گرمی کو ترک نہیں کرتے ہیں ، گرمی میں آپ کے گھر کو ٹھنڈا رکھتے ہیں اور سردیوں میں گرم رکھتے ہیں۔"}
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
                <div className="details-part-one-text-main">
                  {props.language === "Eng" ? "sound proof" : "صوتی ثبوت"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? " Due to a higher density of Solid Fly Ash Bricks, they provide much more sound resistance as compared to Clay Bricks."
                    : "سالڈ فلائی ایش اینٹوں کی کثافت کی وجہ سے ، وہ مٹی اینٹوں کے مقابلے میں کافی زیادہ مزاحمت فراہم کرتے ہیں۔"}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="user-page-screen-details-part-one">
                <div className="details-part-one-img-head">
                  <img src={sixthImage} className="img-fluid" />
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
                  <img src={seventhImage} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="details-part-one-text-head">
                <div className="details-part-one-text-main">
                  {props.language === "Eng" ? "Fire Resistance" : "آگ مزاحمت"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? "Solid Fly Ash Bricks offer much better fire resistance as compared to Clay Bricks. Solid Fly Ash Bricks are made from materials which do not catch fire and are at a much lower risk."
                    : "ٹھوس فلائی ایش اینٹیں مٹی اینٹوں کے مقابلے میں آگ سے بہتر مزاحمت پیش کرتی ہیں۔ ٹھوس فلائی ایش اینٹیں ایسی مادے سے بنی ہیں جن سے آگ نہیں لگتی ہے اور اس کا خطرہ بہت کم ہوتا ہے۔"}
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
                <div className="details-part-one-text-main">
                  {props.language === "Eng"
                    ? "Termite Resistance"
                    : "دیمک مزاحمت"}
                </div>
                <div className="details-part-one-text-sec">
                  {props.language === "Eng"
                    ? "Since Red Clay Bricks are made of soil/clay, they have the tendency to become havens for termites. Solid Fly Ash Bricksdo not contain clay and are free of termite resistance."
                    : "چونکہ ریڈ کلے اینٹیں مٹی / مٹی سے بنی ہوتی ہیں ، لہذا ان میں دیمک کے ٹھکانے بننے کا رجحان پایا جاتا ہے۔ ٹھوس اڑنا ایش برکسو میں مٹی شامل نہیں ہے اور وہ دیمک مزاحمت سے پاک ہیں۔"}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="user-page-screen-details-part-one">
                <div className="details-part-one-img-head">
                  <img src={eighthImage} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsesPageScreen;
