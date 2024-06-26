

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
    console.log("ESTOY ADENTRO DEL ASYNC  DE PAGE DE SIGNUP  APENAS ENTRA AL ASYNC !!!!!!");
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("This email is not valid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid, must be at least 8 characters long");
      return;
    }

    try {
      console.log("ESTOY ADENTRO DEL TRY   DE    SIGNUP  APENAS ENTRA AL TRY  y proximo paso hacer el   FETCH  A  /API/REGISTER   !!!!!!");
      
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
      console.log("ESTOY DENTRO  DE  SIGNUPPPP ADENTRO DEL TRY PERO AFUERA DEL AWAIT ...FETCH     DESPUES DE HACER  EL  FETCH    !!!!!!");
      console.log("VALORES RECIBIDOS DEL RES.STATUS" , res.status);
      
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

  // return (
  //   // <div className="flex min-h-screen flex-col items-center justify-between p-24">
  //   <div className="flex w-full  flex-col items-center justify-between px-[20px] py-[16px]">
  //     <div className="bg-[#212121] p-8 rounded shadow-md w-96">
  //       <h1 className="text-4xl text-center font-semibold mb-8">
  //         {" "}
  //         Para acceder al mes gratis de RTK, por favor ingresá tus datos
  //       </h1>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
  //           placeholder="Email"
  //           required
  //         />
  //         <input
  //           type="password"
  //           className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
  //           placeholder="Password"
  //           required
  //         />
  //         <button
  //           type="submit"
  //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-600 "
  //         >
  //           Enviar registro
  //         </button>
  //         <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
  //       </form>

  //       <div className="text-center text-blue-500 hover:underline mt-4">
  //         {" "}
  //         -- o --
  //       </div>

  //       <Link href="/">
  //         <div className="block text-center text-blue-500 hover:underline mt-2">
  //           Volver a Home
  //         </div>
  //       </Link>
  //     </div>
  //     {showPopup && (
  //       <div className="flex w-full  flex-col items-center justify-between px-[20px] py-[16px]">
  //         <div className="bg-[#212121] p-8 rounded shadow-md w-96 ">
  //           {/* <h2 className="text-2xl font-bold mb-4">¡Registro exitoso!</h2>
  //           <p>
  //             Te registraste con éxito !! Nos contactaremos con vos dentro de
  //             las siguientes 24 horas. Mientras tanto continuá disfrutando de la
  //             navegación en nuestro sitio
  //           </p> */}
  //           <h2 className="text-center  font-semibold mb-8">¡Ya estás a un paso de completar tu registro!</h2>
  //           <p className="text-center">
  //             Recién te enviamos un codigo de seguridad al correo con el cual te registraste. Por favor, revisá tu casilla y dale click al link que te enviamos para completar tu registro.
  //           </p>
  //           <div className="flex justify-center mt-4 ">
  //             <button
  //               className="bg-blue-600 text-white py-2 px-4 rounded "
  //               onClick={() => {
  //                 setShowPopup(false);
  //                 router.push("/");
  //               }}
  //             >
  //               Entendido
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="flex w-full flex-col items-center justify-between px-[20px] py-[16px]">
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


{/*         <div
 className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >.....""""</span
  >
</div> */}

        <div className="text-center text-blue-500 hover:underline mt-4">
          {" "}
          -- o --
        </div>

        <Link href="/">
          <div className="block text-center text-blue-500 hover:underline mt-2 mb-2">
            Volver a Home
          </div>
        </Link>
      </div>
      {showPopup && (
        <div className=" bg-[#212121] p-8 rounded shadow-md w-96 mt-8">
          <h2 className="text-4xl text-center font-semibold mb-8 mt-10">¡Ya estás a un paso de completar tu registro!</h2>
          <p className="w-full border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black">
            Recién te enviamos un codigo de seguridad al correo con el cual te registraste.
            <br />
            Revisá tu casilla y dale click al link que te enviamos para completar tu registro. 
          </p>
          {/* <div className="text-center">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded"
              onClick={() => {
                setShowPopup(false);
                router.push("/");
              }}
            >
              Entendido
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Signup;
