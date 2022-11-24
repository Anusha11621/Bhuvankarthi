import React from "react";
import bike from "../../../images/bike.png";
import auto from "../../../images/auto.png";
import rain from "../../../images/46.png";
import sound from "../../../images/Group.png";
//partners import

import "../../TabComponent.css";
import enea from "../../../images/Partners/enea.png";
import eqaro from "../../../images/Partners/eqaro.png";
import mahindra from "../../../images/Partners/mahindra.png";
import microsoft from "../../../images/Partners/microsoft.png";
import piaggio from "../../../images/Partners/piaggio.png";
import teri from "../../../images/Partners/teri.png";
import theLab from "../../../images/Partners/the Lab.png";
import thirdDetective from "../../../images/Partners/thirdDetective.png";

import SignUpSteps from "./SignUpSteps";
const Home = () => {
  return (
    <div
      style={{
        marginTop: "80px",
      }}
    >
      <h2>Tech-enhanced Private Company</h2>
      <p>For Electric mobility in Emerging markets</p>
      <button
        class="pr-3 pl-3 pt-2 pb-2 "
        style={{
          backgroundColor: "#fd6300",
          color: "white",
          borderRadius: "20px",
          border: "none",
        }}
      >
        See how
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class=" ml-1 bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </button>
      <div className=" d-flex flex-column flex-md-row     justify-content-center">
        <div>
          <img src={sound} style={{ width: "50px", height: "50px" }} />
          <img class="h-50% w-50% order-1 order-md-2 col-9" src={bike}></img>
        </div>
        <div>
          <img class="h-50% w-50% order-2 order-md-1 col-9" src={auto} />
          <img src={rain} style={{ width: "50px", height: "50px" }} />
        </div>
      </div>
      <div class="container d-flex justify-content-center " style={{marginBottom:'-75px'}}>
        <div class="row">
          <div
            class=" d-flex flex-column flex-md-row p-4 pr-5 pl-5"
            style={{
              borderRadius: "20px",
              color: "white",
              backgroundColor: "#50b748",
            }}
          >
            <div>
              <h3 style={{ fontSize: "25px" }}>4000+</h3>
              <p>Vehicles Financed</p>
            </div>
            <div
              style={{
                color: "white",
                height: "100%",
                borderLeft: "3px solid white",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            ></div>
            <div>
              <h3 style={{ fontSize: "25px" }}>172,000+</h3>
              <p>Tonnes Co2 Reduced</p>
            </div>
            <div
              style={{
                color: "white",
                height: "100%",
                borderLeft: "3px solid white",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            ></div>
            <div>
              <h3 style={{ fontSize: "25px" }}>$71 M+</h3>
              <p>Extra Income Generated</p>
            </div>
            <div
              style={{
                color: "white",
                height: "100%",
                borderLeft: "3px solid white",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            ></div>
            <div>
              <h3 style={{ fontSize: "25px" }}>{"<1 %"}</h3>
              <p>Defaulted Loans</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-center  "
        style={{
          backgroundColor: "white",
          paddingBottom: "100px",
          paddingTop: "100px",
        }}
      >
        <div className="row">
          <div
            className="column pt-3 pb-3 pl-5 pr-5"
            style={{
              backgroundImage: "linear-gradient(to top, #FFFFFF, #D8F1E9)",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px gray",
            }}
          >
            <div>
              <p style={{ fontWeight: "500", fontSize: "20px" }}>Partners</p>
            </div>
            <div className="partners">
              <img
                src={teri}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
              <img
                src={mahindra}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
              <img
                src={thirdDetective}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
              <img
                src={piaggio}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
              <img
                src={enea}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />

              <img
                src={theLab}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
              <img
                src={microsoft}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
              <img
                src={eqaro}
                style={{
                  height: "60px",
                  width: "100px",
                  paddingRight: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <SignUpSteps />
    </div>
  );
};

export default Home;
