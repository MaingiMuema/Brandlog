import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="container-fluid header text-start">
      <div className="row row1">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 intro-text">
          <div className="d-flex flex-column">
            <h1 className="title">
              {props.data ? props.data.title : "Unexpected error..."}
            </h1>
            <span className="info">
              {props.data ? props.data.paragraph : "Unexpected error..."}
            </span>
            <section>
              <button type="button" className="btn btn-danger btn-large my-3">
                Accept your $25 gift
              </button>
            </section>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row">
        
      </div>
    </div>
  );
};

export default Header;
