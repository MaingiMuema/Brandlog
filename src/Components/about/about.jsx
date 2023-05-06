import React from "react";
import Navbar2 from "../navbar2";
import "./intro.css";
import Footer from "../footer";

const About = (props) => {
  return (
    <div>
      <Navbar2 />
      <div className="container-fluid intro text-start mb-5">
        <div className="row row1">
          <div className="col-md-2"></div>
          <div className="col-md-6 intro-text d-flex align-items-center">
            <div className="d-flex flex-column text-start">
              <h1>{props.data ? props.data.title : "Unexpected error..."}</h1>
              <p>{props.data ? props.data.intro : "Unexpected error..."}</p>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>

        <div id="mission" className="row my-5">
          <div className="col-md-2"></div>
          <div className="col-md-10 text-start">
            <h1 className="text-uppercase">
              {props.data ? props.data.mission : "Unexpected error..."}
            </h1>
            <span className="mission">
              {props.data ? props.data.mission1 : "Unexpected error..."}
              {props.data ? props.data.mission2 : "Unexpected error..."}
            </span>
          </div>
        </div>

        <div id="why">
          <div className="row my-5">
            <div className="col-md-2"></div>
            <div className="col-md-10">
              <h1>{props.data ? props.data.why : "Unexpected error..."}</h1>
              <span className="mission">
                {props.data ? props.data.why1 : "Unexpected error"}
              </span>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-2"></div>
            <div className="col-md-4 gift"></div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex flex-column">
                <h4 className="mission">
                  {props.data ? props.data.question1 : "Unexpected error..."}
                </h4>
                <span className="mission">
                  {props.data ? props.data.why2 : "Unexpected error..."}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="how" className="row my-5">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h1>{props.data ? props.data.how : "Unexpected error..."}</h1>
            <span>
              {props.data ? props.data.paragraphWhy : "Unexpected error..."}
            </span>
            <div>
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                  : "loading"}
              </ul>
            </div>
          </div>
        </div>

        <div id="who" className="row my-5 mb-5">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h1>{props.data ? props.data.who : "Unexpected error..."}</h1>
            <h4 className="mission my-3">
              {props.data ? props.data.who1 : "Unexpected error..."}
            </h4>
            <span className="mission">
              {props.data ? props.data.who2 : "Unexpected error..."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
