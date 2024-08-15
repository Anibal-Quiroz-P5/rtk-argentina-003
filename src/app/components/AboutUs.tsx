

import React from "react";

const AboutUs = () => {
  return (
    <div className=" flex flex-col items-center justify-center mx-auto pt-[55px] lg:pt-[107px]  2xl:pb-[10px]  ">
      <div
        id="quienes-somos"
        className="py-[74px] text-[#36485C] lg:text-[18px] bg-gray-100 px-12   border-[3px]  border-[#F95901] rounded-3xl xl:w-[1040px] 2xl:w-[898px] 2xl:h-[586px] pt-10 2xl:pt-10  lg:w-[89%] "
      >
        <div className="text-center  text-[28px] font-montserrat  font-extrabold text-[#F95901] lg:text-[46px] lg:leading-[52px]  lg:pt-5 pb-3 2xl:pb-0 2xl:pt-[0px] 2xl:text-[43px]">
          ¿QUIÉNES SOMOS?
        </div>
        <div className="font-inter font-extrabold text-[16px] text-[#36485C]  text-center  lg:pt-[0px] 2xl:pb-[0px] 2xl:pt-0  2xl:text-[16px]">
          {" "}
          Somos un grupo de emprendedores provenientes de distintas
          <br />
          disciplinas que buscamos mejorar la calidad de vida de las personas.{" "}
        </div>
        <br />
        <div className="lg:pl-[75px] lg:pr-[75px]  ">
          <hr className="border-t-1 border border-[#868686]  " />
        </div>
        <div className="lg:flex  justify-between   lg:gap-[90px] 2xl:gap-[60px] 2xl:pl-[0px] pl-0 ">
          <div className="flex-1 ">
            <div className="  py-[74px] pb-8 lg:pb-0 pt-10 text-[#000000] lg:text-[18px] lg:pl-[78px] 2xl:pt-6   2xl:pl-[0px]">
              <div className="font-rubik font-semibold text-[16px]    2xl:text-[16px] pb-1  ">
                ¿Cómo nace RTK Argentina?
              </div>
              
              

              <p className="font-inter font-regular text-[16px] 2xl:text-[16px] ">
                Teniendo la ventaja de vivir en zona rural y dedicándonos
                profesionalmente al campo de las ciencias duras y la tecnología,
                pudimos observar las necesidades de nuestra comunidad y comenzar
                a plantear las soluciones. Motivados con un deseo profundo de
                superación personal, respeto a la gente y al ecosistema,
                decidimos comenzar con una de las tantas ideas que se fueron
                generando en el camino. Es de esta forma que nace RTK-Argentina,
                una empresa pensada para servir y ayudar en el crecimiento de
                nuestra comunidad.
              </p>
              
            </div>
          </div>

          <div className="lg:flex-1 lg:text-right ">
            <div className=" text-left py-[74px] pt-0 sm:pt-[5px] lg:pt-[41px] pb-0 text-[#000000] lg:text-[18px] lg:pr-[78px]  2xl:pt-6  2xl:pr-0">
              <div className="font-rubik font-semibold text-[16px]   2xl:text-[16px] pb-1">
                ¿Me puedo sumar al equipo?
              </div>
              
              <p className="font-inter font-regular text-[16px] 2xl:text-[16px]">
                Con este espíritu de arremeter contra los desafíos y crecer
                hasta el límite de nuestro pensamiento es que invitamos a todos
                aquellos que tengan este entusiasmo, disposición a desarrollarse
                y vocación de servicio a que nos acerquen su Curriculum Vitae
                para tenerlos en cuenta en un futuro no muy lejano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
