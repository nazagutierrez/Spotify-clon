import React from "react";
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md";

type buttonType = "greater" | "less";

const ArrowButtons = ({ buttonProp }: { buttonProp: buttonType }) => {
  return (
    <>
        <button className="text-aside-color font-bold text-lg m-1 bg-black/40 p-2 rounded-full hover:text-white transition-all">
            {buttonProp === "greater" && <i><MdOutlineArrowBackIosNew/></i>}    
            {buttonProp === "less" && <i><MdOutlineArrowForwardIos/></i>}    
        </button>
    </>
  );
};

export default ArrowButtons;
