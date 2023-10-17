"use client";
import Link from "next/link";
import React from "react";
import { MdAccountCircle } from "react-icons/md";

type buttonType = "register" | "login";

const isLogged = false;

const LoginButton = ({ buttonProp }: { buttonProp: buttonType }) => {
  return (
    <>
      {isLogged ? (
        buttonProp === "register" && (
            <button className="text-4xl text-white">
              <i>
                <MdAccountCircle />
              </i>
            </button>
        )
      ) : (
        <>
          {buttonProp === "register" && (
            <Link href={"/register"} className="text-aside-color font-bold mr-10 hover:text-white transition-all">
              Regístrate
            </Link>
          )}
          {buttonProp === "login" && (
            <Link href={"/login"} className="bg-white py-3 px-7 font-bold rounded-full hover:opacity-80 transition-all">
              Iniciar sesión
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default LoginButton;
