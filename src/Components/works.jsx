import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./footer";

const Works = (props) => {
  return (
    <div className="container-fluid">
      <Container>
        <div>
          <h1 className="my-3">
            {props.data ? props.data.title : "Unexpected error..."}
          </h1>
          <span className="text-start">
            {props.data ? props.data.paragraph : "Unexpected error..."}
          </span>
        </div>
        <div className="ratio ratio-16x9 my-5">
          <iframe
            src="https://www.youtube.com/embed/SdsXgqbO-Zk"
            title="10 Gift Ideas Of Things People Actually Want!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Works;
