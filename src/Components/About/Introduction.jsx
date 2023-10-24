import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>Hello👋, I'm <span className="different">Md Mahfuz RP</span> from <span className="">Barisal, Bangladesh</span>. With a
                diploma in <span className="different">Computer Science Technology</span> and a recent completion
                of a <span className="">Web Development Course</span> at Programming Hero. <br />I'm <span  className="">passionate </span>
                about the future of tech and <span className="different">web development</span>. <br /><span className="different">Let's connect</span> and
                innovate together in this exciting journey! 🚀🌐
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Video Making{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Public Speaking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Leading{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Book Reading{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
