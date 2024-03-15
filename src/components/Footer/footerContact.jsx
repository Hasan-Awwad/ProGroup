import React from "react";

const FooterContact = () => {
  return (
    <div className="container contact-container">
      <div className="row contact-main">
        <div className="col-lg-4 col-sm-12 col-xs-12">
          <div className="contact-box clearfix">
            <div className="contact-icon">
              <img src="assets/images/address.png" alt="" />
            </div>
            <div className="add-content">
              <h5>Address</h5>
              <p>
                Baabda - Mount Lebanon
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 col-xs-12">
          <div className="contact-box clearfix phone-box">
            <div className="contact-icon">
              <img src="assets/images/phone.png" alt="" />
            </div>
            <div className="add-content">
              <h5>Phone</h5>
              <p>
                <span>Mobile: </span> +(961) 3 418 485
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 col-xs-12">
          <div className="contact-box clearfix">
            <div className="contact-icon">
              <img
                src="assets/images/email.png"
                alt=""
                style={{
                  width: "110%",
                }}
              />
            </div>
            <div className="add-content">
              <h5>Email</h5>
              <p>
                <a
                  href="mailto:h.awwad@progrouplb.com"
                  style={{ textDecoration: "none" }}
                  class="hover-target"
                >
                  h.awwad@progrouplb.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
