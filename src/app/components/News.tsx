// 'use client'; 
// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import Image from "next/image";
// import agricolas from "../../../public/assets/MaskGroup5.jpg";

// interface NewsCard {
//   title: string;
//   image: string;
//   description: string;
//   link: string;
// }

// const newsData: NewsCard[] = [
//   {
//     title: 'Noticia 1',
//     image: '/image1.jpg',
//     description: 'Descripción breve de la noticia 1.',
//     link: '/noticia-1',
//   },
//   {
//     title: 'Noticia 2',
//     image: '/image2.jpg',
//     description: 'Descripción breve de la noticia 2.',
//     link: '/noticia-2',
//   },
//   {
//     title: 'Noticia 3',
//     image: '/image3.jpg',
//     description: 'Descripción breve de la noticia 3.',
//     link: '/noticia-3',
//   },
// ];

// const News: React.FC = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {newsData.map((news, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-xl font-bold p-4">{news.title}</h2>
//             <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
//             <p className="p-4">{news.description}</p>
//             <Link href={news.link}>
//               <p className="block text-center bg-blue-500 text-white py-2 rounded-b-lg hover:bg-blue-600 transition duration-300">
//                 Más
//               </p>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//       <div className="mt-8 text-center">
//         <Link href="/noticias">
//           <p className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
//             Más noticias
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default News;


'use client'; 
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";

interface NewsCard {
  title: string;
  image: string;
  description: string;
  link: string;
}

const newsData: NewsCard[] = [
  {
    title: 'Capacitaciones',
    image: '/assets/image1.jpg',
    description: 'Capacitaciones  teórico-prácticas de aplicaciones de agroquímicos con drones...',
    link: '/noticia-1',
  },
  {
    title: 'Ensayos',
    image: '/assets/image2.jpg',
    description: ' RTK para ensayos a campo para empresas semilleras y laboratorios...',
    link: '/noticia-2',
  },
  {
    title: 'Avances',
    image: '/assets/image3.jpg',
    description: 'Avances en aplicación de agroquímicos de forma sustentable, resolviendo desafíos logísticos...',
    link: '/noticia-3',
  },
];

const News: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8    xl:w-[1040px]  2xl:w-[898px] lg:w-[89%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold p-4">{news.title}</h2>
            <div className="w-full h-48 relative">
              <Image 
                src={news.image} 
                alt={news.title} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <p className="p-4">{news.description}</p>
            <Link href={news.link}>
              <p className="block text-center bg-blue-500 text-white py-2 rounded-b-lg hover:bg-blue-600 transition duration-300">
                Más
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/noticias">
          <p className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Más noticias
          </p>
        </Link>
      </div>
    </div>
  );
};

export default News;
