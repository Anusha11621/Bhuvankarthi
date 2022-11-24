import React from "react";
import { TiTick } from "react-icons/ti";
const LoanOption = ({ items }) => {
  console.log("hii");
  const {
    vehicle,
    Installment,
    price,
    Asset,
    Tenure,
    Funding,
    color,
    bgColor,
    textColor,
    tickColor,
  } = items;
  return (
    <div
      className="container "
      style={{
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#e5eaf4',
        borderRadius: '16px',}}
    >
      <div className="row">
        <div className="column ">
          <p style={{ color: tickColor }}>{vehicle} Loan</p>
          <p style={{ fontWeight: "500", fontSize: "30px" }}>
            {Installment} Per month
          </p>
          <p>With this plan</p>
          <hr />
          <div className="d-flex flex-row justify-content-center">
              <TiTick  style={{ color: tickColor }} />
              <p>&emsp; Ticket Size &emsp;</p>
              <p className="mr-auto">{price}</p>    
          </div>
    
          <div className="d-flex flex-row"> 
              <TiTick  style={{ color: tickColor }} />
              <p>&emsp; Asset &emsp;</p>
              <p className="mr-auto">{Asset}</p>  
          </div>
          <div className="d-flex justify-content-between text-align-left">
            <div className="d-flex">
              <TiTick  style={{ color: tickColor }} />
              <p>Tenure &emsp;</p>
            </div>

            <div>
              <p >{Tenure}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <TiTick  style={{ color: tickColor }} />
              <p>Funding &emsp;</p>
            </div>

            <div>
              <p>{Funding}</p>
            </div>
          </div>
          <button
            className="pr-5 pl-5 pb-2 pt-2"
            style={{
              backgroundColor: color,
              border: "none",
              color: bgColor,
              borderRadius: "20px",
            }}
          >
            Learn More !
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanOption;
