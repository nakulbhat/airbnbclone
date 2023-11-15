import React from "react";
import img from "../assets/image.png";
import staricon from "../assets/staricon.png";
const Card = ({title, image, country, price, reviewnumber}) => {
  let img = './assets/' + image;
  console.log(img);
  return (
    <div className="m-10 mt-0 w-[263px]">
      <img src={img} className="w-[176px]"/>
      <div className="flex justify-start align-middle text-xs ml-1 py-1">
        <img src={staricon} className="h-[14px] " />
        <p className="px-1">
          5.0 <span className="text-gray-400">({reviewnumber}) &#x2022; {country} </span>
        </p>
      </div>
      <p className="mx-2 text-xs font-light ">
        {title}
      </p>
      <p className=" mx-2 font-light  text-[12px]">
        <div className="font-bold inline-block">From ${price}</div> / person
      </p>
    </div>
  );
};

export default Card;
