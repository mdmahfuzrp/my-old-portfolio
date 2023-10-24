import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>mdmahfuzrp@gmail.com</p>
              </span>
            </div>
          
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+88 01838347363</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
