import React from "react";

type buttonType = "register" | "login";

const LoginButton = ({ buttonProp }: { buttonProp: buttonType }) => {
  return (
    <>
      {buttonProp === "register" && (
        <button className="text-white">Regístrate</button>
      )}
      {buttonProp === "login" && (
        <button className="text-white">Iniciar sesión</button>
      )}
    </>
  );
};

export default LoginButton;
