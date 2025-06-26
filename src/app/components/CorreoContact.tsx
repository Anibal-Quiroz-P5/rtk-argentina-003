


// "use client";

// import Link from "next/link";
// import React, { useState } from "react";

// const CorreoContact = () => {
//   const styles = {
//     clipPath:
//       "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });

//   const [submitting, setSubmitting] = useState(false);

  

//   const handleInputChange = (e: { target: { name: any; value: any } }) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
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
//       alert("Su consulta ha sido enviada!");
//     } else if (error) {
//       console.error(error);
//       alert("Error al enviar su consulta: " + error);
//     }

//     setSubmitting(false);
//   };

//   return (
//     <div className="pt-24 pb-14">

//     <div id="contacto" className="bg-[purple-100] pt-14 pb-14">
//       <div className="isolate  px-6 py-24 lg:py-12 lg:px-8 bg-[#E3F6E7] ">
//         <div
//           className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//           aria-hidden="true"
//         >
//           {/* <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"  style={styles}></div>
//            */}{" "}
//         </div>
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-extrabold text-[#111827] lg:text-[64px] tracking-tight  sm:text-4xl">
//             CONTACTO
//           </h2>
//           <p className="mt-2 lg:text-[18px] leading-8 text-[#111827] lg:pt-[25px]">
//             Escribinos tu mensaje, te contestaremos por mail a la brevedad.
//           </p>
//         </div>
//         <form
//           action="#"
//           method="POST"
//           className="mx-auto mt-16 max-w-xl sm:mt-10"
//           onSubmit={handleSubmit}
//         >
//           <div className="grid grid-cols-1 gap-y-6 ">
//             <div>
//               <label
//                 form="firstName"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Nombre
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="text"
//                   name="firstName"
//                   id="firstName"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             {/*       <div>
//         <label  form="lastName"  className="block text-sm font-semibold leading-6 text-gray-900">Last Name</label>
//         <div className="mt-2.5">
//           <input type="text" name="lastName" id="lastName" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange} />
//         </div>
//       </div> */}
//             <div className="sm:col-span-2">
//               <label
//                 form="company"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Area de aplicación de RTK
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="text"
//                   name="company"
//                   id="company"
//                   autoComplete="organization"
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 form="email"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Email
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             {/*       <div className="sm:col-span-2">
//         <label form="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Teléfono</label>
//         <div className="relative mt-2.5">
//           <div className="absolute inset-y-0 left-0 flex items-center">
//             <label form="country" className="sr-only">País</label>
//             <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              
//             <option>ARG</option> 
//             <option>US</option>              
//               <option>CA</option>
//               <option>EU</option>
//             </select>
//             <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange}/>
//         </div>
//       </div> */}
//             <div className="sm:col-span-2">
//               <label
//                 form="message"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Mensaje
//               </label>
//               <div className="mt-2.5">
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows={4}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleInputChange}
//                 ></textarea>
//               </div>
//             </div>
//             <div className="flex gap-x-4 sm:col-span-2">
//               {/*         <div className="flex h-6 items-center">
          
//           <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
//             <span className="sr-only">Agree to policies</span>
            
//             <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
//           </button>
//         </div> */}
// {/*               <label
//                 className="text-sm leading-6 text-gray-600"
//                 id="switch-1-label"
//               >
//                 Si además de tu consulta deseas probar gratis por un mes nuestro
//                 servicio, por favor
//                 <Link href="/signup" className="font-semibold text-indigo-600">
//                   {" "}
//                   registrate &nbsp;aquí{" "}
//                 </Link>
//               </label> */}
//             </div>
//           </div>
//           <div className="flex justify-center mt-10  ">
//             <button
//               type="submit"
//               className="block lg:w-[176px] lg:h-[50px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Enviar
//             </button>
//           </div>
// {/*           <div className="font-bold">
//             <br />
//             O comunicate a nuestro:
//             <br />
//             Whatsapp 11-41747989
//             <br />
//             Email: rtk-argentina@gmail.com
//           </div> */}
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CorreoContact;


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import AlertaPersonalizada from "./AlertaPersonalizada"; // Asegúrate de que la ruta sea correcta

// const CorreoContact = () => {
//   const styles = {
//     clipPath:
//       "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [alertVisible, setAlertVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");

//   const handleInputChange = (e: { target: { name: any; value: any } }) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
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

//   return (
//     <div className=" pt-[55px] lg:pt-24 pb-[55px]  2xl:pt-[46px] 2xl:pb-[40px]">
//       <AlertaPersonalizada
//         mensaje={alertMessage}
//         visible={alertVisible}
//         onClose={() => setAlertVisible(false)}
//       />
//       <div id="contacto" className="bg-[purple-100] 2xl:pt-14 2xl:pb-14">
//         <div className="mx-auto  px-6   lg:px-8 bg-[#E3F6E7] 2xl:w-[898px] h-[636px] 2xl:h-[682px] lg:w-[89%] rounded-3xl">
          

//           <div className=" text-center  ">
//             <h2 className=" font-monserrat font-extrabold text-[#111827] text-[16px] pt-10 2xl:pt-[56px]">
//               CONTACTO
//             </h2>
//             <p className=" lg:text-[18px]  text-[#111827]  font-inter font-regular text-[16px] 2xl:text-[16px]   2xl:pt-[10px]">
//               Escribinos tu mensaje, te contestaremos por mail a la brevedad.
//             </p>
//           </div>
//           <form
//             action="#"
//             method="POST"
//             className="mx-auto  max-w-xl  2xl:pt-[15px]"
//             onSubmit={handleSubmit}
//           >
//             <div className="grid grid-cols-1 gap-y-4   ">




//               <div  className="sm:col-span-2">
//                 <label
//                   htmlFor="firstName"
//                   className="block text-sm leading-6 text-gray-900   font-inter font-semibold  text-[16px] 2xl:text-[16px] "
//                 >
//                   Nombre
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="firstName"
//                     id="firstName"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>


//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm  leading-6 text-gray-900   font-inter font-semibold text-[16px] 2xl:text-[16px]"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     autoComplete="email"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>



//               <div className="sm:col-span-2">
//                 <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">Area de aplicación de RTK</label>
//                 <select id="service" name="service" className="mt-2.5 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange}>
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
//                   className="block text-sm leading-6 text-gray-900    font-inter font-semibold text-[16px] 2xl:text-[16px]"
//                 >
//                   Mensaje
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     name="message"
//                     id="message"
//                     rows={4}
//                     className="block w-full rounded-md border-0 px-3.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//                     onChange={handleInputChange}
//                   ></textarea>
//                 </div>
//               </div>




//               <div className="flex gap-x-4 sm:col-span-2"></div>
//             </div>
//             <div className="flex justify-center mt-6 2xl:mt-10">
//               <button
//                 type="submit"
//                 className="block lg:w-[176px] lg:h-[50px] rounded-md bg-[#F95901] px-3.5 py-2.5 text-center text-[16px] font-semibold text-white shadow-sm hover:bg-[#f3915d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Enviar
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CorreoContact;



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


"use client";

import Link from "next/link";
import React, { useState } from "react";
import AlertaPersonalizada from "./AlertaPersonalizada"; // Asegúrate de que la ruta sea correcta

const CorreoContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validar si los campos están vacíos
    if (!formData.firstName || !formData.email || !formData.service || !formData.message) {
      setAlertMessage("Por favor, completa todos los campos.");
      setAlertVisible(true);
      return;
    }

    setSubmitting(true);

    // send email
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

  return (
    <div className="pt-[55px] lg:pt-24 pb-[55px] 2xl:pt-[46px] 2xl:pb-[40px]">
      <AlertaPersonalizada
        mensaje={alertMessage}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
      <div id="contacto" className="bg-[purple-100] 2xl:pt-14 2xl:pb-14">
        <div className="mx-auto px-6 lg:px-8 bg-[#E3F6E7] 2xl:w-[898px] h-[636px]  xl:w-[1040px]  2xl:h-[682px] lg:w-[89%] rounded-3xl">
          <div className="text-center">
            <h2 className="font-monserrat font-extrabold text-[#111827] text-[28px] lg:text-[46px] 2xl:text-[43px] pt-10 2xl:pt-[56px]">
              CONTACTO
            </h2>
            <p className="lg:text-[18px] text-[#111827] font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:pt-[10px]">
              Escribinos tu mensaje, te contestaremos por mail a la brevedad.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mx-auto max-w-xl 2xl:pt-[15px]"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-y-4">
              <div className="sm:col-span-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm leading-6 text-gray-900 font-inter font-semibold text-[16px] 2xl:text-[16px]"
                >
                  Nombre
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    placeholder="Juan"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm leading-6 text-gray-900 font-inter font-semibold text-[16px] 2xl:text-[16px]"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="juan@ejemplo.com"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Área de aplicación de RTK
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2.5 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="agrimensura">AGRIMENSURA</option>
                  <option value="drones">DRONES</option>
                  <option value="agricultura">AGRICULTURA</option>
                  <option value="otros">OTROS</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm leading-6 text-gray-900 font-inter font-semibold text-[16px] 2xl:text-[16px]"
                >
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    className="block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-x-4 sm:col-span-2"></div>
            </div>
            <div className="flex justify-center mt-6 2xl:mt-10">
              <button
                type="submit"
                className="block lg:w-[176px] lg:h-[50px] rounded-md bg-[#F95901] px-3.5 py-2.5 text-center text-[16px] font-semibold text-white shadow-sm hover:bg-[#f3915d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorreoContact;
