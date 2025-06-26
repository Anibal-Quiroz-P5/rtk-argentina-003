//components/Countdown.tsx



// 'use client';
// import { useEffect, useState } from 'react';

// const Countdown = () => {
//   const targetDate = new Date('2025-06-10T23:59:00').getTime(); // Fecha objetivo
//   const [timeLeft, setTimeLeft] = useState(getTimeLeft());

//   function getTimeLeft() {
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / 1000 / 60) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return { days, hours, minutes, seconds };
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(getTimeLeft());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="text-center text-white bg-red-600 p-4 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-2">¡Promoción de nuestra base RTKArg B10 a U$s 2.500 por tiempo limitado!</h2>
//       <div className="text-3xl font-mono">
//         {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
//       </div>
//     </div>
//   );
// };

// export default Countdown;





// 'use client';
// import { useEffect, useState } from 'react';

// const Countdown = () => {
//   const targetDate = new Date('2025-06-10T23:59:00').getTime(); // Reemplazá por tu fecha
//   const [timeLeft, setTimeLeft] = useState(getTimeLeft());

//   function getTimeLeft() {
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     if (difference <= 0) {
//       return { hours: '00', minutes: '00', seconds: '00', expired: true };
//     }

//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / (1000 * 60)) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return {
//       hours: String(hours).padStart(2, '0'),
//       minutes: String(minutes).padStart(2, '0'),
//       seconds: String(seconds).padStart(2, '0'),
//       expired: false,
//     };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(getTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   if (timeLeft.expired) {
//     return (
//       <div className="text-center p-6 bg-red-100 rounded-xl shadow-md">
//         <h2 className="text-2xl font-bold text-red-700">La promoción ha finalizado.</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md mx-auto flex flex-col items-center gap-4 border border-gray-200">
//       <h1 className="text-3xl font-extrabold text-black">FREE SHIPPING</h1>
//       <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
//         If you complete your purchase within:
//       </p>

//       <div className="flex space-x-2 text-center">
//         {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((unit, idx) => (
//           <div key={idx} className="bg-white border border-gray-300 rounded-md px-4 py-2 shadow-md text-2xl font-mono font-bold">
//             {unit}
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center gap-2 mt-4">
//         <span className="text-sm font-medium text-gray-700">Use the following code:</span>
//         <span className="bg-gray-900 text-white px-3 py-1 rounded font-semibold text-sm shadow">COUPON CODE</span>
//       </div>

//       <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300">
//         COMPLETE PURCHASE
//         <span className="text-white">➡️</span>
//       </button>
//     </div>
//   );
// };

// export default Countdown;



// 'use client';
// import { useEffect, useState } from 'react';

// const Countdown = () => {
//   const targetDate = new Date('2025-06-10T23:59:00').getTime();

//   const [timeLeft, setTimeLeft] = useState(getTimeLeft());

//   function getTimeLeft() {
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(getTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const isOver = Object.values(timeLeft).every((val) => val === 0);

//   const format = (val: number) => val.toString().padStart(2, '0');

//   if (isOver) {
//     return (
//       <div className="text-center text-red-600 font-bold text-xl mt-8">
//         ¡Promoción finalizada!
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-lg max-w-md mx-auto">
//       <h2 className="text-3xl font-extrabold text-black uppercase">Free Shipping</h2>
//       <p className="text-gray-700 mt-2 text-sm text-center">
//         If you complete your purchase within:
//       </p>

//       <div className="flex gap-2 mt-4">
//         <TimeBox label="d" value={format(timeLeft.days)} />
//         <TimeBox label="h" value={format(timeLeft.hours)} />
//         <TimeBox label="m" value={format(timeLeft.minutes)} />
//         <TimeBox label="s" value={format(timeLeft.seconds)} />
//       </div>

//       <div className="mt-5 flex items-center gap-2 bg-gray-200 px-4 py-2 rounded">
//         <span className="text-sm text-gray-700">Use the following code:</span>
//         <span className="font-bold bg-white px-3 py-1 rounded text-black">COUPON2025</span>
//       </div>

//       <button className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition">
//         COMPLETE PURCHASE
//       </button>
//     </div>
//   );
// };

// interface TimeBoxProps {
//   label: string;
//   value: string;
// }

// const TimeBox = ({ label, value }: TimeBoxProps) => (
//   <div className="flex flex-col items-center bg-gray-100 px-3 py-2 rounded">
//     <span className="text-2xl font-mono font-bold text-black">{value}</span>
//     <span className="text-xs text-gray-600 uppercase">{label}</span>
//   </div>
// );

// export default Countdown;



// 'use client';
// import { useEffect, useState } from 'react';

// const Countdown = () => {
//   const targetDate = new Date('2025-06-10T23:59:00').getTime();

//   const getTimeLeft = () => {
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / (1000 * 60)) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return { days, hours, minutes, seconds };
//   };

//   const [timeLeft, setTimeLeft] = useState(getTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(getTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Mostrar "Finalizado" si ya pasó la fecha
//   const isFinished = Object.values(timeLeft).every((val) => val === 0);

//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto text-center">
//       {!isFinished ? (
//         <>
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">🚚 FREE SHIPPING</h2>
//           <p className="text-lg text-gray-600 mb-6">If you complete your purchase within:</p>

//           <div className="flex justify-center items-center gap-4 mb-6">
//             {[
//               { value: timeLeft.days, label: 'd' },
//               { value: timeLeft.hours, label: 'h' },
//               { value: timeLeft.minutes, label: 'm' },
//               { value: timeLeft.seconds, label: 's' },
//             ].map(({ value, label }, i) => (
//               <div key={i} className="flex items-center bg-gray-100 px-4 py-3 rounded-lg shadow text-3xl font-mono text-gray-900">
//                 <span>{String(value).padStart(2, '0')}</span>
//                 <span className="ml-1 text-2xl font-semibold">{label}</span>
//               </div>
//             ))}
//           </div>

//           <div className="bg-black text-white px-4 py-2 rounded-lg inline-block text-lg font-semibold mb-4">
//             Use the following code: <span className="bg-white text-black px-3 py-1 ml-2 rounded">COUPON CODE</span>
//           </div>

//           <div>
//             <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-bold shadow hover:bg-blue-700 transition">
//               COMPLETE PURCHASE ➡️
//             </button>
//           </div>
//         </>
//       ) : (
//         <p className="text-2xl text-red-600 font-semibold">⛔ Promoción finalizada</p>
//       )}
//     </div>
//   );
// };

// export default Countdown;




/* 'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const targetDate = new Date('2025-06-10T23:59:00').getTime();

const getTimeLeft = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const FlipUnit = ({ value, label }: { value: number; label: string }) => {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-20 bg-white text-black rounded-md shadow-lg overflow-hidden text-3xl font-bold flex items-center justify-center mx-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-white text-lg mt-1">{label}</span>
    </div>
  );
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const pathname = usePathname(); // 👈 Ruta actual

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  // 👇 Ocultar botón si estás en '/diezPrimeros'
  const showButton = pathname !== '/diezPrimeros';


  // Clase condicional para el fondo
  const backgroundClass = pathname === '/' 
    ? 'bg-transparent' 
    : 'bg-gradient-to-b from-custom-green-start to-custom-green-end';



  return (
    <div className={`w-full flex flex-col items-center ${backgroundClass} py-10 px-4 rounded-xl shadow-lg text-center`}>
      <h2 className="text-white text-3xl font-extrabold mb-2">
        ¡Promoción base RTKArg B10 a U$s 2.500 por tiempo limitado!
      </h2>
      <p className="text-white text-md mb-6">Completá el formulario antes de que se acabe el tiempo:</p>

      <div className="flex gap-4 justify-center mb-6">
        <FlipUnit value={days} label="d" />
        <FlipUnit value={hours} label="h" />
        <FlipUnit value={minutes} label="m" />
        <FlipUnit value={seconds} label="s" />
      </div>

      {showButton && (
        <Link href="#contacto">
          <button className="flex items-center gap-x-2 bg-orange-500 text-white hover:bg-white hover:text-black font-semibold py-2 px-4 border border-[#F95901] hover:border-transparent rounded-full shadow-lg transition-all duration-300">
            <p className="text-[16px] font-inter font-bold 2xl:text-[16px]">
              COMPLETAR
            </p>
          </button>
        </Link>
      )}
    </div>
  );
} */



'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const targetDate = new Date('2025-06-28T23:59:00').getTime();

const getTimeLeft = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const FlipUnit = ({ value, label }: { value: number; label: string }) => {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-20 bg-white text-black rounded-md shadow-lg overflow-hidden text-3xl font-bold flex items-center justify-center mx-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-white text-lg mt-1">{label}</span>
    </div>
  );
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const pathname = usePathname(); // Ruta actual

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  // Ocultar botón si estás en '/diezPrimeros'
  const showButton = pathname !== '/diezPrimeros';

  // Clase condicional para el fondo
  const backgroundClass =
    /* pathname === '/' ? 'bg-transparent' : 'bg-gradient-to-b from-custom-green-start to-custom-green-end'; */
    pathname === '/' ? 'bg-gradient-to-b from-custom-green-start to-custom-green-end' : 'bg-gradient-to-b from-custom-green-start to-custom-green-end';

  return (
    <div
      // className={`w-full flex flex-col items-center ${backgroundClass} py-10 px-4 rounded-xl shadow-lg text-center`}
      className={`w-full flex flex-col items-center ${backgroundClass} py-10 px-4 rounded-xl shadow-lg text-center`}
    >
      <h2 className="text-white text-3xl font-extrabold mb-2">
        ¡Promoción base RTKArg B10 a U$s 2.500 por tiempo limitado!
      </h2>
      <p className="text-white text-md mb-6">Completá el formulario antes de que se acabe el tiempo:</p>

      <div className="flex gap-4 justify-center mb-6">
        <FlipUnit value={days} label="d" />
        <FlipUnit value={hours} label="h" />
        <FlipUnit value={minutes} label="m" />
        <FlipUnit value={seconds} label="s" />
      </div>

      {showButton && (
        /* <Link href="#contacto"> */
        <Link href={pathname === '/' ? '/diezPrimeros' : '#contacto'}>
          <button className="flex items-center gap-x-2 bg-orange-500 text-white hover:bg-white hover:text-black font-semibold py-2 px-4 border border-[#F95901] hover:border-transparent rounded-full shadow-lg transition-all duration-300">
            <p className="text-[16px] font-inter font-bold 2xl:text-[16px]">
              {pathname === '/' ? 'IR AL PRODUCTO' : 'MAS INFO'}
            </p>
          </button>
        </Link>
      )}
    </div>
  );
}