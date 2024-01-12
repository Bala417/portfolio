import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const ContactMe = () => {
  return (
    <div className="bg-gray-800 w-screen">
      <div className="flex flex-col text-center text-xl text-gray-400 mt-20 p-10  font-mono ">
        <p className="text-2xl font-bold text-gray-300 p-5">Contact Me</p>
        <p className="p-3">Mobile No.: +91 9702700102</p>
        <p className="">Email : balakrishnan417@gmail.com</p>
      </div>
      <ul className="flex justify-center ">
        <li className="px-3">
          <a
            href="https://www.facebook.com/bala.krishnan.75839/"
            target="_blank"
          >
            <FaFacebook color="#d1d5d5" size={24} />
          </a>
        </li>
        <li className="px-3">
          <a href="https://github.com/Bala417" target="_blank">
            <FaGithub color="#d1d5d5" size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};
