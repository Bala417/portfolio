import React from "react";
import profilePic from "../images/picture.jpg";
import { FaHourglassHalf } from "react-icons/fa";
import { MdOutlinePunchClock, MdOutlineSyncProblem } from "react-icons/md";
import { GiDiamondHard, GiConversation } from "react-icons/gi";
import { FiLink } from "react-icons/fi";

const AboutMe = () => {
  const personalDetails = {
    name: "Balakrishnan Thangadurai Nadar",
    Dob: "23rd Aug, 1993",
    Gender: "Male",
    Languages: "English, Hindi & Tamil",
    Marital: "Single",
  };
  return (
    <div className="container bg-gray-800 w-screen overflow-scroll h-screen  flex flex-col hide-scrollbar">
      <div className="flex ">
        <div className="flex-1  flex justify-center align-middle">
          <img src={profilePic} className="w-80 object-contain" />
        </div>
        <div className="flex flex-col flex-1 text-gray-300 font-medium text-lg leading-10 font-mono m-10">
          <div>
            I’m passionate about learning new things and solving problems with
            creative solutions. I’m always open to new challenges and
            opportunities to grow as a developer and a person. On this
            portfolio, you can find some of my recent projects that showcase my
            skills and abilities in React and other web development tools.
          </div>
          <br />

          {/* Personal Details */}
          <div className="text-xl font-bold leading-10 uppercase">
            Personal Details
          </div>
          <div className="flex-col " style={{ whiteSpace: "pre-wrap" }}>
            {`Name		        :	Balakrishnan Thangadurai Nadar
Date of Birth	    :	23rd Aug, 1993
Gender		        :	Male
Language Known      : 	English, Hindi & Marathi
Marital Status	    :	Single
Hobbies / Interest  :	Listening Music & Typing
`}
          </div>
        </div>
      </div>

      {/* Traits block */}
      <div className="mt-20">
        <div className="uppercase text-gray-300 text-xl font-bold text-center m-5">
          Traits
        </div>
        <div className="flex justify-evenly m-5 p-15 ">
          <div className="w-48 h-48 bg-gray-700 m-5 flex-col flex justify-center shadow-xl hover:shadow-2xl rounded-md ">
            <div className="text-gray-400 flex justify-center pt-5">
              <FaHourglassHalf size={48} />
            </div>
            <div className="p-5 text-center text-lg text-gray-300 ">
              Quick Learner
            </div>
          </div>
          <div className="w-48 h-48 bg-gray-700 m-5 flex-col flex justify-center shadow-xl hover:shadow-2xl rounded-md ">
            <div className="text-gray-400 flex justify-center pt-5">
              <GiDiamondHard size={48} />
            </div>
            <div className="p-5 text-center text-lg text-gray-300 ">
              Hard working
            </div>
          </div>
          <div className="w-48 h-48 bg-gray-700 m-5 flex-col flex justify-center shadow-xl hover:shadow-2xl rounded-md ">
            <div className="text-gray-400 flex justify-center pt-5">
              <MdOutlinePunchClock size={48} />
            </div>
            <div className="p-5 text-center text-lg text-gray-300 ">
              Puntual
            </div>
          </div>
        </div>
      </div>

      {/* Skills Block */}
      <div className="mt-20">
        <div className="uppercase text-gray-300 text-xl font-bold text-center m-5">
          Skills
        </div>
        <div className="flex justify-evenly m-5 p-15">
          <div className="w-48 h-48 bg-gray-700 m-5 flex-col flex justify-center shadow-xl hover:shadow-2xl rounded-md ">
            <div className="text-gray-400 flex justify-center pt-5">
              <GiConversation size={48} />
            </div>
            <div className="p-5 text-center text-lg text-gray-300 ">
              Good Communication
            </div>
          </div>
          <div className="w-48 h-48 bg-gray-700 m-5 flex-col flex justify-center shadow-xl hover:shadow-2xl rounded-md ">
            <div className="text-gray-400 flex justify-center pt-5">
              <FiLink size={48} />
            </div>
            <div className="p-5 text-center text-lg text-gray-300 ">
              Adaptability
            </div>
          </div>
          <div className="w-48 h-48 bg-gray-700 m-5 flex-col flex justify-center shadow-xl hover:shadow-2xl rounded-md ">
            <div className="text-gray-400 flex justify-center pt-5">
              <MdOutlineSyncProblem size={48} />
            </div>
            <div className="p-5 text-center text-lg text-gray-300 ">
              Problem Solving
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
