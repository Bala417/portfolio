import React from "react";
import loginRegPage from "../images/project_thumbnail/loginRegPage.png";
import shopperEkart from "../images/project_thumbnail/ShopperEkart.png";
export const Projects = () => {
  return (
    <div className="bg-gray-800 w-screen text-gray-300 container font-mono">
      <div className="mt-10 font-bold text-2xl text-center mb-5 ">Projects</div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="m-5 bg-gray-700 rounded-lg w-2/6">
          <a href="https://registraion-login-page.netlify.app/" target="_blank">
            <img src={loginRegPage} className="rounded shadow-xl " />
          </a>
          <div className="text-center p-5">
            <h1 className="text-sm md:text-xl font-semibold mb-3">
              Login and Registration Page
            </h1>
            <p className="text-sm md:text-lg">
              A simple login registration using json server, which accept login
              id and password. If the data present in the json server database,
              it redirect to Dashboard, if not you get an error message.
            </p>
          </div>
        </div>

        <div className=" m-5 bg-gray-700 rounded-lg w-2/6">
          <a href="https://shoppersekartv2.netlify.app" target="_blank">
            <img
              src={shopperEkart}
              sizes="32px"
              className="rounded shadow-xl"
            />
          </a>
          <div className="text-center p-5">
            <h1 className="text-sm md:text-xl font-semibold mb-3">
              Login and Registration Page
            </h1>
            <p className="text-sm md:text-lg">
              A simple login registration using json server, which accept login
              id and password. If the data present in the json server database,
              it redirect to Dashboard, if not you get an error message.
            </p>
          </div>
        </div>
      </div>
    </div>
    // https://shoppersekartv2.netlify.app/
  );
};
