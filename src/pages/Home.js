import React from "react";

import { Link } from "react-router-dom";
import "./styles/Home.css";

import Astronauts from "../images/astronauts.svg";
import Logo from "../images/platziconf-logo.svg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="container">
            <div className="row">
              <div className=" align-self-center col-3 offset-1">
                <div className="row">
                  <img src={Logo} alt="logo" />
                </div>
                <br />
                <div className="row">
                  <h2>
                    Print your <br /> badges
                  </h2>

                  <h5>The easiest way to manage your</h5>
                </div>
                <div className="row justify-content-center">
                  <Link to="/badges" className="btn btn-primary">
                    New badge
                  </Link>
                </div>
              </div>
              <div className="col-7">
                <div className="Home__col">
                  <img src={Astronauts} alt="astronautas" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
