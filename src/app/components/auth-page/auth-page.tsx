import React from "react";
import Link from "next/link";

type loginType = "login" | "register";

const AuthPage = ({ loginPropType }: { loginPropType: loginType }) => {
  const isLogin = loginPropType === "login";

  return (
    <section className="bg-gray-50 dark:bg-gray-900 my-2 rounded-lg h-full bg-login text-darker-white">
      <article className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-neutral-900/80 dark:border-green-950 p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:">
              {isLogin ? "Inicia sesión en tu cuenta" : "Registra una cuenta"}
            </h1>
            <form className="space-y-4 md:space-y-8">
              <div className="flex flex-col justify-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-green-950 outline-none mb-6 border transition-all border-green-950 hover:border hover:border-green-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  placeholder="ejemplo@gmail.com"
                  required
                />
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-green-950 outline-none mb-6 border transition-all border-green-950 hover:border hover:border-green-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-950 transition-all font-medium rounded-lg text-sm px-5 py-2.5 text-cente"
              >
                {isLogin ? "Iniciar sesión" : "Registrarse"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {isLogin
                  ? "No tienes una cuenta todavía?"
                  : "Tienes una cuenta?"}{" "}
                <Link
                  href={isLogin ? "/register" : "/login"}
                  className="font-medium hover:underline decoration-green-800"
                >
                  {isLogin ? "Regístrate" : "Inicia sesión"}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AuthPage;
