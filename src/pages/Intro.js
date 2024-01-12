import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import resume from "../Assets/Resume.pdf";

const Intro = () => {
  const iconList = [
    {
      icon: <IoLogoJavascript />,
      name: "javascript",
      proficiency: 5,
    },
    { icon: <FaReact />, name: "react", proficiency: 5 },
    { icon: <FaHtml5 />, name: "HTML", proficiency: 5 },
    { icon: <FaCss3 />, name: "CSS", proficiency: 5 },
    { icon: <SiRedux />, name: "redux", proficiency: 5 },
  ];
  return (
    <div className="bg-gray-800 container">
      <div className="flex justify-center m-28">
        <div className="text-gray-300 font-medium text-2xl leading-10 text-center font-mono">
          <span className="text-left p-3  ">"Hello,</span>
          <br /> <br /> I'm Bala, a passionate and self-taught React developer
          ready to embark on an exciting journey in the world of web
          development."
        </div>
      </div>
      <div>
        <div>
          <div className="text-center text-gray-300 text-xl font-mono font-bold">
            Technologies known
          </div>
          <div className="flex justify-center cursor-pointer  ">
            {iconList.map((item) => {
              return (
                <div className="text-gray-300 text-center mt-3 hover:mt-0  mb-16 hover:mb-0">
                  <div className="text-6xl pt-3 px-3 hover:text-8xl  hover:p-0  hover:px-0 ease-in-out hover:text-blue-500  ">
                    <p>{item.icon}</p>
                  </div>
                  <div className="text-xl capitalize font-mono ">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center  ">
            <a href={resume} download="Bala_Resume.pdf">
              <button className="bg-gray-700 flex py-1 px-5 rounded-3xl active:bg-none shadow-2xl active:shadow-md  text-gray-300 font-semibold text-lg hover:text-gray-100 border-solid border-2 border-gray-300 active:border-none font-mono">
                Resume <IoMdDownload size={28} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
