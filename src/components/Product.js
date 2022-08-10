import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3 d-flex bg-light">
      <div className="col-3 ">
        <h3>
          {props.product.name}{" "}
          <span className="badge bg-light text-dark">₹ {props.product.price}</span>
        </h3>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            _
          </button>
          <button type="button" className="btn btn-secondry">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-3">
        {props.product.quantity * props.product.price}
      </div>
      <button className=" col-3 btn btn-danger" onClick={ ()=>{props.resetQuantity(props.index)}}> Reset</button>
    </div>
  );
}
