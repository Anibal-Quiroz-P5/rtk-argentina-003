
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* eslint-disable react-hooks/rules-of-hooks */

const Signup = () => {
  const [error, setError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    /* console.log(email, password); */
    if (!isValidEmail(email)) {
      setError("This email is not valid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid, must be at least 8 characters long");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError(
          "La dirección de correo electrónico ya está registrada, ingresá otra dirección por favor!"
        );
      }
      if (res.status === 200) {
        setError("");
        console.log(
          " Ahora estás registrado, nos contactaremos con vos a la brevedad "
        );
        setRegistrationSuccess(true);
        setShowPopup(true);
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };
  return (
    // <div className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex w-full  flex-col items-center justify-between px-[20px] py-[16px]">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">
          {" "}
          Para acceder al mes gratis de RTK, por favor ingresá tus datos
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-600 "
          >
            Enviar registro
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>

        <div className="text-center text-blue-500 hover:underline mt-4">
          {" "}
          -- o --
        </div>

        <Link href="/">
          <div className="block text-center text-blue-500 hover:underline mt-2">
            Volver a Home
          </div>
        </Link>
      </div>
      {showPopup && (
        <div className="flex w-full  flex-col items-center justify-between px-[20px] py-[16px]">
          <div className="bg-[#212121] p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">¡Registro exitoso!</h2>
            <p>
              Te registraste con éxito !! Nos contactaremos con vos dentro de
              las siguientes 24 horas. Mientras tanto continuá disfrutando de la
              navegación en nuestro sitio
            </p>
            <div className="flex justify-end mt-4 items-center">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => {
                  setShowPopup(false);
                  router.push("/");
                }}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
