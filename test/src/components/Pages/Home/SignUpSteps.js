import React from "react";
import birdsLike from "../../../images/62.png";
import user from "../../../images/SignIn Icons/user.png";
import settings from "../../../images/SignIn Icons/settings.png";
import thunder from "../../../images/SignIn Icons/thunder.png";
import downCurve from "../../../images/SignIn Icons/downCurve.png";
import upCurve from "../../../images/SignIn Icons/upCurve.png";

//menu components
import LoanOption from "./LoanOption";
import AdvantagesAndFeedback from "./AdvantagesAndFeedback";
import MediaAndSignUp from "./MediaAndSignUp";

//icons for apple store and gpay
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
const SignUpSteps = () => {
  return (
    <div
      className="container-fluid d-flex  justify-content-center pt-5"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="row">
        <div className="column ">
          <div>
          <div className="col-12 d-flex flex-column align-items-center">
            <img src={birdsLike} alt="birds" className="pb-3" />
            <p
              className="col-6"
              style={{ fontSize: "35px", fontWeight: "400" }}
            >
              Financing Last Mile Drivers
            </p>
            <p
              className="col-9"
              style={{
                fontSize: "20px",
                color: "gray",
                fontFamily: "SegoeUI, Segoe UI",
              }}
            >
              Tailored Finance for Electric Light Vehicles
            </p>
          </div>
          
            <div class="container ">
              <div class="row d-md-flex align-items-center justify-content-center ">
                <div class="column">
                  <div class="p-3 mb-3 d-flex flex-column align-items-center">
                    <p className="p-1 pr-2 pl-2" style={{backgroundColor:'white',borderRadius:'50%',boxShadow:'0 0 5px blue'}}>1</p>
                    <img
                      src={user}
                      class="bg-light "
                      style={{ borderRadius: "50px",backgroundColor:'white' }}
                    />
                    <h4 class="mt-3 pb-3">Register</h4>
                    <p class="text-secondary">
                     Join us to enjoy the Services
                    </p>
                  </div>
                </div>
                <div className="d-none d-md-block " >
                  <img src={upCurve} style={{width:"70%",height:'50%'}}/>
                </div>

                <div class=" ">
                  <div class="p-3 mb-3 d-flex flex-column align-items-center">
                    <p>2</p>
                    <img src={settings}  />
                    <h4 class=" mt-3 pb-3">Complete Set-Up</h4>
                    <p class=" text-secondary ">
                      Complete the Process
                    </p>
                  </div>
                </div>
                <div className="d-none d-md-block" >
                  <img src={downCurve} style={{width:"70%",height:'50%'}}/>
                </div>
                <div class="">
                  <div class=" p-3 mb-3">
                    <p>3</p>
                    <img src={thunder} />
                    <h4 class=" mt-3 pb-3">Utilize App</h4>
                    <p class=" text-secondary">
                      Utilixe all the Properties of TWU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="container d-flex justify-content-center">
            <div className="row mt-5">
              <div className="column ">
                <p
                  className="mb-5 "
                  style={{ fontWeight: "500", fontSize: "20px" }}
                >
                  Download our app to get Started Today
                </p>
                <p className="mb-5 text-secondary ">
                  End to end payments and Financial Management in a single
                  Solution
                </p>
                <div
                  className="container mb-5 d-flex justify-content-center "
                  style={{ columnGap: "20px" }}
                >
                  <button
                    className=" d-flex align-items-center text-light  pr-5 pl-5 "
                    style={{
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "#fd6300",
                    }}
                  >
                    <AiFillApple className="mr-2" />
                    Store
                  </button>
                  <button
                    className="d-flex align-items-center text-light pr-4 pl-4 pt-2 pb-2"
                    style={{
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "#50b748",
                    }}
                  >
                    <FaGooglePlay className="mr-2" />
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="container  mt-5 d-flex flex-column justify-content-center align-items-center pb-5"
            style={{ backgroundColor: "white" }}
          >
            <div className="row">
              <div className="column">
                <p
                  className="mt-5 "
                  style={{ fontWeight: "500", fontSize: "25px" }}
                >
                  Select our loan option that suits you!
                </p>

                <p className=" mt-3 " style={{ color: "gray" }}>
                  With lots of unique and useful features, You can easily
                  <br /> manage your wallet easily without any Problem
                </p>
                <div className="container d-flex justify-content-center">
                  <div className="row">
                    <div className="column  d-md-flex">
                      <LoanOption
                        items={{
                          vehicle: "3 Wheeler",
                          Installment: "$0",
                          price: "210,000",
                          Asset: "Electric Three Wheeler",
                          Tenure: "Up To 45 Months",
                          Funding: "100%",
                          color: "gray",
                          textColor: "black",
                          bgColor: "white",
                          tickColor: "#50b748",
                        }}
                      />

                      <LoanOption
                        items={{
                          vehicle: "3 Wheeler",
                          Installment: "$0",
                          price: "210,000",
                          Asset: "Electric Three Wheeler",
                          Tenure: "Up To 45 Months",
                          Funding: "100%",
                          color: "white",
                          textColor: "white",
                          bgColor: "#50b748",
                          tickColor: "white",
                        }}
                      />

                      <LoanOption
                        items={{
                          vehicle: "3 Wheeler",
                          Installment: "$0",
                          price: "210,000",
                          Asset: "Electric Three Wheeler",
                          Tenure: "Up To 45 Months",
                          Funding: "100%",
                          color: "gray",
                          textColor: "black",
                          bgColor: "white",
                          tickColor: "#50b748",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div class=" pt-5 pb-5" >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4 >Select our loan option that suits you!</h4>
                    <p >
                    With lots of unique and useful features, You can easily
                   manage your wallet easily without any Problem
                    </p>
                </div>
                <div class="col-12 col-md-4">
                    <div class=" p-3 mb-3">
                    <LoanOption
                        items={{
                          vehicle: "3 Wheeler",
                          Installment: "$0",
                          price: "210,000",
                          Asset: "Electric Three Wheeler",
                          Tenure: "Up To 45 Months",
                          Funding: "100%",
                          color: "gray",
                          textColor: "black",
                          bgColor: "white",
                          tickColor: "#50b748",
                        }}
                      />
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="p-3 mb-3">
                    <LoanOption
                        items={{
                          vehicle: "3 Wheeler",
                          Installment: "$0",
                          price: "210,000",
                          Asset: "Electric Three Wheeler",
                          Tenure: "Up To 45 Months",
                          Funding: "100%",
                          color: "white",
                          textColor: "white",
                          bgColor: "#50b748",
                          tickColor: "white",
                        }}
                      />
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="wcu-card p-3 mb-3">
                    <LoanOption
                        items={{
                          vehicle: "3 Wheeler",
                          Installment: "$0",
                          price: "210,000",
                          Asset: "Electric Three Wheeler",
                          Tenure: "Up To 45 Months",
                          Funding: "100%",
                          color: "gray",
                          textColor: "black",
                          bgColor: "white",
                          tickColor: "#50b748",
                        }}
                      />
                    </div>
                </div>
            </div>
        </div>
    </div>
          <AdvantagesAndFeedback />

          <MediaAndSignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpSteps;
