import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.resetQuantity()
        }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        {props.totalAmount}
      </div>
      <button className=" col-2 btn btn-primary">PayNow</button>
    </div>
  );
}
