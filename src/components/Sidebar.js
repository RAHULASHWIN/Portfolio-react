import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";
import resume from "../assets/resume.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:codesumax@!gmail.com");
  };
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar " className="sidebar__avatar" />
      <div className="sidebar__name">
        Sumit <span>Dey</span>
      </div>
      <div className="sidebar__item sidebar__title">Web Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item">
          <img
            src={tie}
            alt="resume "
            className="sidebar__icon sidebar__resume"
          />
          downloadResume
        </div>
      </a>
      <figure className="sidebar_social-icons ">
        <a href="#">
          <img src={facebook} alt="facebook " className="sidebar__icon mr-3" />
        </a>
        <a href="#">
          <img
            src={instagram}
            alt="instagram "
            className="sidebar__icon mr-3"
          />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item">
          <a href="#">
            <img
              src={github}
              alt="github"
              className="sidebar__icon sidebar__github"
            />
            Github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon" />
          Tamilnadu,Chennai
        </div>
        <div className="sidebar__item">code.sumax@gmail.com</div>
        <div className="sidebar__item">9940975715/994048869</div>
      </div>

      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </div>
  );
};

export default Sidebar;
