declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (args: { url: string }) => void;
    };
  }
}


// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import AlertaPersonalizada from "./AlertaPersonalizada"; // Asegúrate de que la ruta sea correcta
// import Script from "next/script";


// const CorreoContactToBuy = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     service: "",
//     message: "",
//   });
  

//   const [submitting, setSubmitting] = useState(false);
//   const [alertVisible, setAlertVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");

//   const handleInputChange = (e: { target: { name: string; value: string } }) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     // Validar si los campos están vacíos
//     if (!formData.firstName || !formData.email || !formData.service || !formData.message) {
//       setAlertMessage("Por favor, completa todos los campos.");
//       setAlertVisible(true);
//       return;
//     }

//     setSubmitting(true);

//     // send email
//     const response = await fetch("api/contact-us", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const { success, error } = await response.json();

//     if (success) {
//       setAlertMessage("Su consulta ha sido enviada!");
//       setAlertVisible(true);
//     } else if (error) {
//       console.error(error);
//       setAlertMessage("Error al enviar su consulta: " + error);
//       setAlertVisible(true);
//     }

//     setSubmitting(false);
//   };


//   const handleCalendlyClick = () => {
//   // @ts-ignore
//   window.Calendly.initPopupWidget({
//     url: "https://calendly.com/rtkarg-info"
//   });
//   return false;
// };

//   return (
//     <>
// <Script
//   src="https://assets.calendly.com/assets/external/widget.js"
//   strategy="afterInteractive"
// />
// <link
//   href="https://assets.calendly.com/assets/external/widget.css"
//   rel="stylesheet"
// />
//     <div className="pt-[55px] lg:pt-24 pb-[55px] 2xl:pt-[46px] 2xl:pb-[40px]">
//       <AlertaPersonalizada
//         mensaje={alertMessage}
//         visible={alertVisible}
//         onClose={() => setAlertVisible(false)}
//       />
//       <div id="contacto" className="bg-[purple-100] 2xl:pt-14 2xl:pb-14">
//         <div className="mx-auto px-6 lg:px-8 bg-[#E3F6E7] 2xl:w-[898px] xl:w-[1040px] lg:w-[89%] rounded-3xl py-10">

//           <div className="text-center">
// <h2 className="font-monserrat font-extrabold text-[#111827] text-[28px] lg:text-[46px] 2xl:text-[43px] pt-10 2xl:pt-[56px]">
//   QUIERO LA PROMOCIÓN<br />DE LA BASE RTK A U$S 2500
// </h2>
//             <p className="lg:text-[18px] text-[#111827] font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:pt-[10px]">
//               Agendá una reunión con nosotros para comprar tu base .
//             </p>
//           </div>
//           <form
//             action="#"
//             method="POST"
//             className="mx-auto max-w-xl 2xl:pt-[15px]"
//             onSubmit={handleSubmit}
//           >
//             {/* <div className="grid grid-cols-1 gap-y-4">
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="firstName"
//                   className="block text-sm leading-6 text-gray-900 font-inter font-semibold text-[16px] 2xl:text-[16px]"
//                 >
//                   Nombre
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="firstName"
//                     id="firstName"
//                     autoComplete="given-name"
//                     placeholder="Juan"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>


//               <div className="sm:col-span-2">
//          <label form="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Teléfono</label>
//          <div className="relative mt-2.5">
//            <div className="absolute inset-y-0 left-0 flex items-center">
//              <label form="country" className="sr-only">País</label>
//              <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              
//              <option>ARG</option> 
//              <option>US</option>              
//                <option>CA</option>
//                <option>EU</option>
//              </select>
//              <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//              </svg>
//            </div>
//            <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange}/>
//          </div>
//        </div>



//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm leading-6 text-gray-900 font-inter font-semibold text-[16px] 2xl:text-[16px]"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     autoComplete="email"
//                     placeholder="juan@ejemplo.com"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="service"
//                   className="block text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Área de aplicación de RTK
//                 </label>
//                 <select
//                   id="service"
//                   name="service"
//                   className="mt-2.5 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Selecciona un servicio</option>
//                   <option value="agrimensura">AGRIMENSURA</option>
//                   <option value="drones">DRONES</option>
//                   <option value="agricultura">AGRICULTURA</option>
//                   <option value="otros">OTROS</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm leading-6 text-gray-900 font-inter font-semibold text-[16px] 2xl:text-[16px]"
//                 >
//                   Mensaje
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     name="message"
//                     id="message"
//                     rows={4}
//                     placeholder="Escribe tu mensaje aquí..."
//                     className="block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//                     onChange={handleInputChange}
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="flex gap-x-4 sm:col-span-2"></div>
//             </div> */}
// {/*             <div className="flex justify-center mt-6 2xl:mt-10">
//               <button
//                 type="submit"
//                 className="block lg:w-[176px] lg:h-[50px] rounded-md bg-[#F95901] px-3.5 py-2.5 text-center text-[16px] font-semibold text-white shadow-sm hover:bg-[#f3915d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Enviar
//               </button>
//             </div> */}

// <div className="flex justify-center mt-4">
//       <button
//         type="button"
//         onClick={handleCalendlyClick}
//         className="block lg:w-[220px] lg:h-[50px] rounded-md bg-[#2563eb] px-4 py-2 text-[16px] font-semibold text-white shadow-sm hover:bg-[#1d4ed8] transition"
//       >
//         Reservar reunión por Calendly
//       </button>
//     </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
    
//   );
// };

// export default CorreoContactToBuy;




"use client";

import Link from "next/link";
import React, { useState } from "react";
import AlertaPersonalizada from "./AlertaPersonalizada"; // Asegúrate de que la ruta sea correcta
import Script from "next/script";

const CorreoContactToBuy = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showCalendly, setShowCalendly] = useState(false); // Nuevo estado para el modal

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.service || !formData.message) {
      setAlertMessage("Por favor, completa todos los campos.");
      setAlertVisible(true);
      return;
    }

    setSubmitting(true);

    const response = await fetch("api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { success, error } = await response.json();

    if (success) {
      setAlertMessage("Su consulta ha sido enviada!");
      setAlertVisible(true);
    } else if (error) {
      console.error(error);
      setAlertMessage("Error al enviar su consulta: " + error);
      setAlertVisible(true);
    }

    setSubmitting(false);
  };

  // Ahora, al hacer click, mostramos el modal propio
  const handleCalendlyClick = () => {
    setShowCalendly(true);
  };

  const handleCloseCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <>
      {/* Si quieres seguir usando el script de Calendly para otros fines, puedes dejarlo */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Modal Calendly personalizado */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
<div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-4 pt-8">
  <button
    onClick={handleCloseCalendly}
    className="absolute top-2 right-2 z-50 text-gray-500 hover:text-gray-700 text-xl font-bold bg-white rounded-full"
    aria-label="Cerrar"
  >
    ×
  </button>
  <iframe
    src="https://calendly.com/rtkarg-info"
    width="100%"
    height="550" // altura reducida para que la banda quede fuera
    frameBorder="0"
    className="rounded-b-lg"
    allow="camera; microphone; fullscreen"
    title="Calendly"
  ></iframe>
</div>
        </div>
      )}

      <div className="pt-[55px] lg:pt-24 pb-[55px] 2xl:pt-[46px] 2xl:pb-[40px]">
        <AlertaPersonalizada
          mensaje={alertMessage}
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        />
        <div id="contacto" className="bg-[purple-100] 2xl:pt-14 2xl:pb-14">
          <div className="mx-auto px-6 lg:px-8 bg-[#E3F6E7] 2xl:w-[898px] xl:w-[1040px] lg:w-[89%] rounded-3xl py-10">
            <div className="text-center">
              <h2 className="font-monserrat font-extrabold text-[#111827] text-[28px] lg:text-[46px] 2xl:text-[43px] pt-10 2xl:pt-[56px]">
                QUIERO LA PROMOCIÓN<br />DE LA BASE RTK A U$S 2500
              </h2>
              <p className="lg:text-[18px] text-[#111827] font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:pt-[10px]">
                Agendá una reunión con nosotros para comprar tu base .
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto max-w-xl 2xl:pt-[15px]"
              onSubmit={handleSubmit}
            >
              {/* ...tu formulario aquí... */}

              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={handleCalendlyClick}
                  className="block lg:w-[220px] lg:h-[65px] rounded-md bg-[#2563eb] px-4 py-2 text-[16px] font-semibold text-white shadow-sm hover:bg-[#1d4ed8] transition"
                >
                  Agendar una reunión virtual
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorreoContactToBuy;