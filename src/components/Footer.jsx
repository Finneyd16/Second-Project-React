import React from "react";
import P10 from "../assets/P10.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#031B34",
          paddingTop: "10rem",
          width: "100%",
          margin: "0",
        }}
        className=" foot text-center text-lg-start bg-body-tertiary text-muted"
      >
        <section className="">
          <div className="d-flex flex-column align-items-center">
            <h1
              style={{
                background: "linear-gradient(to right, #AE67FA, #F49867)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bolder",
                width: "50%",
              }}
            >
              Do you want to step in to the future before others
            </h1>
            <button
              className="my-5"
              style={{
                padding: "15px 20px",
                color: "white",
                backgroundColor: "transparent",
                borderColor: "#ffffff77",
                border: "1px solid",
              }}
            >
              Request Early Access
            </button>
          </div>

          <div className=" text-center text-md-start mt-5">
            <div className="row mt-3">
              <div
                style={{ alignItems: "start", textAlign: "start" }}
                className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex flex-column "
              >
                <img style={{ width: "50%" }} src={P10} alt="" />

                <small style={{ width: "80%" }} className="py-5">
                  Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                </small>
              </div>

              <div
                style={{
                  textAlign: "start",
                  lineHeight: "220%",
                  marginTop: "-10px",
                }}
                className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column"
              >
                <small className="text-uppercase fw-bold mb-4">Links</small>
                <small>
                  <a href="#!" className="text-reset">
                    Overons
                  </a>
                </small>
                <small>
                  <a href="#!" className="text-reset">
                    Social Media
                  </a>
                </small>
                <small>
                  <a href="#!" className="text-reset">
                    Counters
                  </a>
                </small>
                <small>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </small>
              </div>

              <div
                style={{
                  textAlign: "start",
                  lineHeight: "220%",
                  marginTop: "-10px",
                }}
                className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column"
              >
                <small className="text-uppercase fw-bold mb-4">Company</small>
                <small>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </small>
                <small>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </small>
                <small>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </small>
              </div>

              <div
                style={{ textAlign: "start", marginTop: "-3px" }}
                className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-flex flex-column"
              >
                <h6 className="text-uppercase fw-bold mb-4">Get in touch</h6>
                <p style={{ width: "50%" }}>
                  <i className="fas fa-home me-3"></i>Crechterwoord K12 182 DK
                  Alknjkcb
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  085-132567
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> info@payme.net
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          <small className="text-reset fw-bold">
            © 2021 GPT-3. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
