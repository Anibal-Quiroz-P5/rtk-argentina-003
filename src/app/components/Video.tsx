import React from 'react'

const Video: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src="https://www.youtube.com/embed/nULYRUqWCaU?si=gqOIpfmP3vveC-SO"
          title="YouTube video player"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video
