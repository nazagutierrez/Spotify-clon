"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

type buttonType = "greater" | "less";

const ArrowButtons = ({ buttonProp }: { buttonProp: buttonType }) => {
  const router = useRouter();

  return (
    <>
      {buttonProp === "greater" && (
        <button
          className="text-aside-color font-bold text-lg m-1 bg-black/40 p-2 rounded-full hover:text-white transition-all"
          type="button"
          onClick={() => router.back()}
        >
          <i>
            <MdOutlineArrowBackIosNew />
          </i>
        </button>
      )}
      {buttonProp === "less" && (
        <button
          className="text-aside-color font-bold text-lg m-1 bg-black/40 p-2 rounded-full hover:text-white transition-all"
          type="button"
          onClick={() => router.forward()}
        >
          <i>
            <MdOutlineArrowForwardIos />
          </i>
        </button>
      )}
    </>
  );
};

export default ArrowButtons;
