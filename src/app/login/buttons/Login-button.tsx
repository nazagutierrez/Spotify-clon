import React from "react";

type buttonType = "register" | "login";

const LoginButton = ({ buttonProp }: { buttonProp: buttonType }) => {
  return (
    <>
      {buttonProp === "register" && (
        <button className="text-aside-color font-bold mr-10 hover:text-white transition-all">Regístrate</button>
      )}
      {buttonProp === "login" && (
        <button className="bg-white py-3 px-7 font-bold rounded-full hover:opacity-80 transition-all">Iniciar sesión</button>
      )}
    </>
  );
};

export default LoginButton;
