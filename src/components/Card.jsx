import React from "react";
import image from "../assets/image.png";
import staricon from "../assets/staricon.png";
const Card = () => {
  return (
    <div className="m-10 mt-0 w-[263px]">
      <img src={image} className="w-[176px]"/>
      <div className="flex justify-start align-middle text-xs ml-1 py-1">
        <img src={staricon} className="h-[14px] " />
        <p className="px-1">
          5.0 <span className="text-gray-400">(6) &#x2022; USA </span>
        </p>
      </div>
      <p className="mx-2 text-xs font-light ">
        Life lessons with Katie Zaferes
      </p>
      <p className=" mx-2 font-light  text-[12px]">
        <div className="font-bold inline-block">From $136</div> / person
      </p>
    </div>
  );
};

export default Card;
