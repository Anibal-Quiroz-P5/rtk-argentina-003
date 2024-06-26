const Features = () => {
  return (
    // <div className="bg-blue-300">
      <div>

    <div id="aplicaciones" className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
      <h1 className="text-center text-[32px] leading-[40px] font-extrabold text-[#4328EB] lg:text-[64px] lg:leading-[72px]">
        {" "}
        APLICACIONES
      </h1>
      
      {/* <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse "> */}
      <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl h-[523px] bg-[#FFFEF0]">
        <Image
          src={agrimensora}
          alt="Feature 1 image"
          /* className="hidden w-1/2 h-1/2 sm:block pr-12" */
          className="hidden w-1/2  sm:block pr-12"
        />

        <div className="sm:w-1/2 lg:py-[56px] ">
          <h3 className=" text-2xl lg:px-12 font-rubik font-semibold text-[#FFFFF] lg:text-[35px] text-center lg:text-left ">
            {" "}
            Aplicación en Agrimensura
          </h3>

          <Image
            src={agrimensora}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] px-12 text-[#36485C] lg:text-[18px]">
            El sistema RTK se utiliza en agrimensura para mejorar la eficiencia
            y calidad de los trabajos permitiendo a los profesionales del campo
            a obtener datos geoespaciales con una exactitud sin precedentes.
            {/* Esto resulta en una mejor toma de decisiones, optimización de
            recursos y mayor calidad en la ejecución de los proyectos. Como
            ejemplo, algunas de las aplicaciones son: */}
          </p>

          <div className="px-12">
            <ul className="list-disc px-4">
              <li className="flex-col  text-[#36485C] lg:text-[18px] gap-5">
                Relevamientos topográficos precisos en tiempo real, reduciendo
                costos y tiempos.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
                Delimitación de límites de propiedad.  {/* , garantizando una alta
                exactitud. */}
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
                Planificación de infraestructuras y gestión de recursos
                naturales. RTK ofrece precisión centimétrica en relevamientos
                topográficos en tiempo real, facilitando estas actividades.
                
              </li>
            </ul>
          </div>


          <div className="pt-8 px-12
          ">
            <Link href="/moreInfo/agrimensura">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded-full hover:shadow-[inset_0_-50px_50px_-50px_rgba(0,0,0,0.5)] shadow-lg">
  <p className="flex items-center gap-x-2 font-bold font-inter text-[#000000] lg:text-[18px] hover:text-white ">
    Mas información
  </p>
</button>
            </Link>
          </div>
        </div>
      </div>