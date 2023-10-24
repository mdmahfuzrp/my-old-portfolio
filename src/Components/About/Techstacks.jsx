import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiNextdotjs,
} from "react-icons/si";
import { DiCss3, DiMongodb, DiVisualstudio } from "react-icons/di";
import { SiJavascript, SiHeroku, SiPostman } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsUiChecks, BsGit } from "react-icons/bs";
import {FaGitAlt} from 'react-icons/fa'
import {AiFillSlackCircle} from 'react-icons/ai'
import {GiCheckboxTree} from 'react-icons/gi'
import {BiLogoFirebase} from 'react-icons/bi'
import {RiSlackLine} from 'react-icons/ri'
import {FiTrello} from 'react-icons/fi'
import {IoLogoFirebase} from 'react-icons/io5'
import {DiJqueryLogo} from 'react-icons/di'
import {TiHtml5} from 'react-icons/ti'
import {VscTools} from 'react-icons/vsc'

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          
        <div>
            <TiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          
          <div>
            <SiTailwindcss />
            <h5>Tailwind</h5>
          </div>
          
          <div>
            <DiJqueryLogo />
            <h5>JQuery</h5>
          </div>
          
          
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React.JS</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next.JS</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express.JS</h5>
          </div>
          
          <div>
            <GiCheckboxTree />
            <h5>Mongoose</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <IoLogoFirebase />
            <h5>Firebase</h5>
          </div>
          <div>
            <FaGitAlt />
            <h5>Git</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <RiSlackLine />
            <h5>Slack</h5>
          </div>
          
          <div>
            <FiTrello />
            <h5>Trello</h5>
          </div>
          <div>
            <DiVisualstudio />
            <h5>VS Code</h5>
          </div>
          <div>
            <VscTools />
            <h5>Dev Tools</h5>
          </div>
          
        </div>
      </div>
    </>
  );
};
