import React from "react";

import staricon from "../assets/staricon.png";
const Card = ({ title, image, country, price, reviewnumber, rating }) => {


  return (
    <div className="m-10 mt-0 mr-0 w-[263px] flex-[0_0_auto] flex-col">
      <img src={`/src/assets/${image}`} className="w-[176px] rounded-md mb-3" />

      <div className="flex justify-start align-middle text-xs ml-1 py-1">
        <img src={staricon} className="h-[14px] " />
        <p className="px-1">
          {rating}{" "}
          <span className="text-gray-400">
            ({reviewnumber}) &#x2022; {country}{" "}
          </span>
        </p>
      </div>
      <p className="mx-2 font-light overflow-hidden text-ellipsis ">{title}</p>
      <p className=" mx-2 font-light  text-[12px]">
        <div className="font-bold inline-block">From ${price}</div> / person
      </p>
    </div>
  );
};

export default Card;
