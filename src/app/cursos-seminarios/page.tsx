"use client";

import React from "react";

const News = () => {
  return (
    <div id="cursos" className="flex flex-col items-center justify-center min-h-screen bg-[#002E1E] text-white p-8 ">
      <h1 className="text-5xl font-bold mb-8 mt-4">CURSOS Y SEMINARIOS</h1>
      <div className="flex flex-col gap-4">
        <img
          src="/assets/foto1.jpeg"
          alt="Foto 1"
          className="w-full h-auto rounded-lg mb-4"
        />
        <img
          src="/assets/foto2.jpeg"
          alt="Foto 2"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default News;