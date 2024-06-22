/* import React from 'react';


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a la página de Videos de RTK-Argentina</h1>
      <div className="w-full max-w-4xl">
        <video className="w-full h-auto" controls>
          <source src="/video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default HomePage; */

/* 'use client'
import React, { useEffect, useState } from 'react';
import Player from 'react-player';

const VideoComponent = () => {
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    const videoFile = '/home/anibalcoder/PROBAR-RTK-3/rtk-argentina-003/src/app/public/assets/video.mp4'; // Reemplaza con la ruta del video en tu PC
    setVideo(videoFile);
  }, []);

  return (
    <div>
      {video && (
        <Player
          url={video}
          controls
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default VideoComponent; */