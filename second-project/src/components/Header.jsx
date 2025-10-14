import React from "react";
import P1 from "../assets/P1.png";
import { Link } from "react-router-dom";
const Headers = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        
        <div className="container-fluid ">
          <img className="p1" src={P1} alt="" />
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-toggle='collapse'
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="nav-list me-auto list-unstyled d-flex mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  What is GPT?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Open AI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Case Studies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Library
                </a>
              </li>
            </ul>
            <div className="btns d-flex">
              <button className="btn1">Sign in</button>
              <button className="btn2">Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headers;
