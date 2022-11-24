import React from "react";

///media images import
import {AiOutlineRight} from "react-icons/ai"
import timesOfIndia from "../../../images/media/timesOfIndia.png";
import bbc from "../../../images/media/bbc.png";
import economicTimes from "../../../images/media/economic.png";
import evReporter from "../../../images/media/evReporter.png";
import timesNow from "../../../images/media/timesNow.png";
import man from "../../../images/media/manSmiling.png";
const MediaAndSignUp = () => {
  return (
    <div>
      <div className="container bg-white p-5  d-flex justify-content-sm-center">
        <div className="row">
          <div className="column">
            <p
              style={{
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              <b>Media Partners</b>
            </p>
            {/* d-md-flex  flex-md-row d-flex flex-column align-items-center  mt-sm-2 */}
            <div className="md-col-6 sm-col-12 ">
              <img src={timesOfIndia} className="w-25 h-25" />
              <img src={bbc} className="w-25% h-25%" />
              <img src={economicTimes} className="w-25% h-25%" />
              <img src={evReporter} className="w-25% h-25%" />
              <img src={timesNow} className="w-25% h-25%" />
            </div>
            <div className="container  p-3 " style={{borderRadius:"20px",backgroundColor:"#50b748"}}>
              <div className="row">
                <div className="column d-flex flex-column flex-md-row justify-content-center align-items-center">
                  <div className="col-md-6">
                    <h2 className="text-light" ><b>Signup to receive updates about new Products</b></h2>
                    <div className="d-flex">
                    <input
              type="email"
              class="form-control mt-5 mt-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your email"
              style={{ borderRadius: "20px", width: "100%" }}
            />
            <button
              className="mt-5 ml-2 p-1 pr-2 pl-2"
              style={{
                borderRadius: "20px",
                backgroundColor: "#fd6300",
                border: "none",
                
              }}
            >
              <AiOutlineRight style={{ color: "white" }} />
            </button>
                    </div>
                  </div>
                  <div style={{width:"60%",}}>
                    <img src={man} className="col-md-6 w-50% h-50% bg-light  mt-5 mb-5" style={{borderRadius:"20px"}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaAndSignUp;
