import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFirebase,
  SiReact,
  SiReacttable,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/YBWjQ00/1.jpg"
                    alt="Marvel Universe"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Marvel Universe</h2>
                <p style={{textAlign: 'left'}}>
                  <li>A seller can create and login to an account to sell toys online.</li>
                  <li>A seller can add new toys, they can view, update, delete their toys.</li>
                  <li>Users can register or log in using Google or email/password to access and view details, also manage their profile.</li>
                </p>
                <div>
                  <SiTailwindcss />
                  
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://marvel-universe-client.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mdmahfuzrp/toy-universe-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/7QWcgXL/Screenshot-1.jpg"
                    alt="Kode Restaurant"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Kode Restaurant</h2>
                <p style={{textAlign: 'left'}}>
                  <li>Kode Restaurant features individual chef portfolios showcasing their expertise and includes special re recipes curated by each chef.</li>
                  <li>Customers can login/signup using Google, GitHub, or Email and password.</li>
                  <li>Any logged customers can add favorite chefs, perform operations, and manage profiles.</li>
                </p>
                <div>
                  <SiTailwindcss />
                  <FaReact />
                  <SiFirebase />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href="https://kode-restaurant-server.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mdmahfuzrp/kode-restaurant-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/sHBWC5d/Screenshot-4.jpg" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Shopify Dashboard</h2>
                <p style={{textAlign: 'left'}}>
                  <li>First of all this is just design</li>
                  <li>For view this side admin need to login first.</li>
                  <li>An admin can login using email or password</li>
                  <li>Admin see all website data, users data</li>
                  <li>It's just a design, and in this project i have implement my frontend skills. And also this project for a spain company client. I have done it successfully</li>
                </p>
                <div>
                  <SiTailwindcss />
                  <SiReacttable />
                  <SiReactrouter />
                  <SiReact />
                </div>
                <div>
                  <a
                    href="https://shopify-admin-dashboard.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mdmahfuzrp/shopify-admin-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/cQkSHDw/Screenshot-3.jpg"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Tech Programmer BD</h2>
                <p style={{textAlign: 'left'}}>
                  <li>Website has Admin Dashboard, admin can make student to instructor or admin, admin 
      can approve or deny classes of all instructors, add or delete users.</li>
      <li>Instructor has Instructor Dashboard, also add new classes mange own classes and delete.</li>
      <li>Student has Student Dashboard, Select and enrolled any class also delete selected calss.</li>
                </p>
                <div>
                  
                  <SiReact />
                  <SiFirebase />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://tech-programmer-bd.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mdmahfuzrp/tech-programmer-bd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
