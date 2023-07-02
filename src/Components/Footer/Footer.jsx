import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
              <p style={{fontSize: '15px', fontWeight: '200'}}>Copyright &copy; 2023- All right reserved by Md Mahfuz RP</p>
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
