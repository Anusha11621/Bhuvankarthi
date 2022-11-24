import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import lady from "../../../images/People and earth/lady.png";
import earth from "../../../images/People and earth/earth.png";
import review1 from "../../../images/People and earth/reviewPerson1.png";
const AdvantagesAndFeedback = () => {
  return (
    <div>
      <div>
        <div className=" pt-5 pb-5 mt-5">
          <div className="container">
            <div className="row ">
              <div className="column d-md-flex justify-content-center align-items-center">
                <div >
                  <img src={lady} style={{ width: "200px", height: "250px" }} />
                </div>
                <div className="col-md-6 ">
                <h3>Taking Fintech Loan Management to Next Level</h3>
                <p style={{ color: "gray" }}>
                  Clubbing loan collections, asset management, income
                  generation, and behavioral data to create a suite of solutions
                  that work best for our clients
                </p>
                <button
                  className="pl-3 pr-2"
                  style={{
                    borderRadius: "20px",
                    border: "none",
                    backgroundColor: "#fd6300",
                    color: "white",
                  }}
                >
                  see how <AiOutlineRight className="m-2" />
                </button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div
        class="delivery-and-payment-section pt-5 pb-5 d-flex"
        id="delivery-payment"
      >
        <div class="container">
          <div class="row">
            <div className="col-2"></div>
            <div class="col-12 col-md-5 order-1 order-md-2">
              <div class="text-center">
                <img
                  src={earth}
                  alt=""
                  style={{ width: "200px", height: "250px" }}
                />
              </div>
            </div>
            <div class="col-12 col-md-5 order-2 order-md-1">
              <p style={{ fontSize: "30px", fontWeight: "500" }}>
                Discover a better way to take action for the Planet
              </p>
              <p style={{ color: "gray" }}>
                Measure your carbon footprint, reduce, contribute to carbon
                offsetting projects. Three Wheels United is the trusted partner
                for your path to net-zero.
              </p>
              <button
                className="pl-3 pr-2"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "#50b748",
                  color: "white",
                }}
              >
                see how
                <AiOutlineRight className="m-2" />
              </button>
              
      </div>
          </div>
        </div>
      </div>
      <div>
      <div class="healthy-food-section pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-5">
                <div class="text-center">
                  <img
                    src={review1}
                    style={{ width: "200px", height: "250px" }}
                  />
                </div>
              </div>
              <div class="col-12 col-md-5">
                <h1 class="healthy-food-section-heading">
                  Fresh, Healthy, Organic, Delicious Fruits
                </h1>
                <p class="healthy-food-section-description">
                  Is be upon sang fond must shew. Really boy law county she
                  unable her sister. Feet you off its like like six. Among sex
                  are leave law built now.
                </p>
              </div>
            </div>
          </div>
        </div>
       </div> 
    </div>
  );
};

export default AdvantagesAndFeedback;
