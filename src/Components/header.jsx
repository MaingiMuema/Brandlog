import React from "react";
import "./header.css";

const Header = (props) => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
                <p className="title">
                    {props.data ? props.data.title : "Unexpected error..."}
                </p>
                <p className="info">
                    {props.data ? props.data.paragraph : "Unexpected error..."}
                </p> 
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
