/* import React from 'react'

const AboutUs = () => {
  return (
    <div id='quienes-somos' className='py-[74px] text-[#36485C] lg:text-[18px]' >
      <div className="text-center text-[32px] leading-[40px] font-medium text-[#8144f3] lg:text-[64px] lg:leading-[72px]">

      Quiénes somos ?
      </div>
      <br />
      <div className="py-[74px] text-[#36485C] lg:text-[18px]">
        
      Somos un grupo de emprendedores provenientes de distintas disciplinas que buscamos mejorar la calidad de vida de las personas.
Teniendo la ventaja de vivir en zona rural y dedicándonos profesionalmente al campo de las ciencias duras y la tecnología, pudimos observar las necesidades de nuestra comunidad y comenzar a plantear las soluciones.
Motivados con un deseo profundo de superación personal, respeto a la gente y al ecosistema, decidimos comenzar con una de las tantas ideas que se fueron generando en el camino. Es de esta forma que nace RTK-Argentina, una empresa pensada para servir y ayudar en el crecimiento de nuestra comunidad.
Con este espíritu de arremeter contra los desafíos y crecer hasta el límite de nuestro pensamiento es que invitamos a todos aquellos que tengan este entusiasmo, disposición a desarrollarse y vocación de servicio a que nos acerquen su Curriculum Vitae para tenerlos en cuenta en un futuro no muy lejano.
      </div>

      </div>
  )
}

export default AboutUs */

import React from "react";

const AboutUs = () => {
  return (
    <div className=" flex flex-col lg:pt-[177px] ">
      <div
        id="quienes-somos"
        className="py-[74px] text-[#36485C] lg:text-[18px] bg-gray-100 px-12  border-[3px]  border-[#F95901] rounded-3xl"
      >
        <div className="text-center text-[32px] leading-[40px] font-montserrat  font-extrabold text-[#F95901] lg:text-[64px] lg:leading-[72px] ">
          Quiénes somos ?
        </div>
        <p className="font-inter font-bold lg:text-[18px] text-red-700] text-center lg:pl-[377px] lg:pr-[377px] lg:pt-[33px] lg:pb-[33px] "> Somos un grupo de emprendedores provenientes de distintas disciplinas que buscamos mejorar la calidad de vida de las personas. </p>
        <br />
        <div className="lg:pl-[75px] lg:pr-[75px] lg:w-[1220px]">

        <hr className="border-t-1 border border-[#868686]  " />
        </div>
        <div className="lg:flex justify-between gap-[60px]">
          
          <div className="flex-1 ">

        <p className=" text-left py-[74px] text-[#000000] lg:text-[18px] lg:pl-[78px]">
          <p className="font-rubik font-semibold lg:text-[35px]">¿ Cómo nace RTK-Argentina ?</p>
          <br />
          Teniendo la
          ventaja de vivir en zona rural y dedicándonos profesionalmente al
          campo de las ciencias duras y la tecnología, pudimos observar las
          necesidades de nuestra comunidad y comenzar a plantear las soluciones.
          Motivados con un deseo profundo de superación personal, respeto a la
          gente y al ecosistema, decidimos comenzar con una de las tantas ideas
          que se fueron generando en el camino. Es de esta forma que nace
          RTK-Argentina, una empresa pensada para servir y ayudar en el
          crecimiento de nuestra comunidad. 
        </p>
          </div>

        <div className="lg:flex-1 lg:text-right ">

        <p className=" text-left py-[74px] text-[#000000] lg:text-[18px] lg:pr-[78px]">
        <p className="font-rubik font-semibold lg:text-[35px]">¿ Me puedo sumar al equipo ?</p>
          <br />
          Con este espíritu de arremeter
          contra los desafíos y crecer hasta el límite de nuestro pensamiento es
          que invitamos a todos aquellos que tengan este entusiasmo, disposición
          a desarrollarse y vocación de servicio a que nos acerquen su
          Curriculum Vitae para tenerlos en cuenta en un futuro no muy lejano.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
