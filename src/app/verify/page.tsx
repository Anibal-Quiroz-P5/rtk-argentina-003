/* "use client"
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const VerifyPage = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      console.log("HOLAAAA  ENTRE  A LA VERIFICACION DEL TOKENNNNN !!!!");
      
      // Aquí puedes realizar la lógica de verificación del token
      // Por ejemplo, hacer una solicitud a tu API para verificar el token
      // y mostrar un mensaje al usuario indicando si la verificación fue exitosa o no
      verifyToken(token as string);
    }
  }, [token]);

  const verifyToken = async (tokenValue: string) => {
    try {
      const response = await fetch(`/api/verify?token=${tokenValue}`, {
        method: 'POST',
      });

      if (response.ok) {
        // Mostrar mensaje de verificación exitosa
        console.log('Verificación exitosa');
      } else {
        // Mostrar mensaje de error de verificación
        console.error('Error al verificar el token');
      }
    } catch (error) {
      console.error('Error al verificar el token:', error);
    }
  };

  return (
    <div>
      <h1>Verificando token...</h1>
    </div>
  );
};

export default VerifyPage; */


/* "use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const VerifyPage = () => {
  const searchParams = useSearchParams();  
  const token = searchParams.get('token');

  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');

  useEffect(() => {
    if (token) {
      verifyToken(token);
    }
  }, [token]);

  const verifyToken = async (tokenValue: string) => {

    try {
      console.log("HOLAAAA  ENTRE  A LA VERIFICACION DEL TOKENNNNN !!!!");

      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: tokenValue }),
      });

      console.log("LA   RESPONSE  TRAIDA EN ESTE OTRO LUGAR ES :  ", response);
      

      if (response.ok) {
        // Verificación exitosa
        setVerificationStatus('success');
      } else {
        // Error de verificación
        setVerificationStatus('error');
      }
    } catch (error) {
      console.error('Error al verificar el tokeeen:', error);
      setVerificationStatus('error');
    }
  };

  return (
    <div>
      <p> ACA ENTRO A LA PAGINA DE VERIFY</p>
      {verificationStatus === 'pending' && <h1>Verificando token...</h1>}
      {verificationStatus === 'success' && <h1>¡Verificación exitosa!</h1>}
      {verificationStatus === 'error' && <h1>Error al verificar el token</h1>}
    </div>
  );
};

export default VerifyPage;
 */


//---------------------------------------------------------------


/* "use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');

  useEffect(() => {
    if (token) {
      verifyToken(token);
    }
  }, [token]);

  const verifyToken = async (tokenValue: string) => {
    try {
      console.log("HOLAAAA  ENTRE  A LA VERIFICACION DEL TOKENNNNN !!!!");

      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: tokenValue }),
      });

      console.log("LA   RESPONSE  TRAIDA EN ESTE OTRO LUGAR ES :  ", response);
      

      if (response.ok) {
        // Verificación exitosa
        setVerificationStatus('success');
      } else {
        // Error de verificación
        setVerificationStatus('error');
      }
    } catch (error) {
      console.error('Error al verificar el tokeeen:', error);
      setVerificationStatus('error');
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <p> ACA ENTRO A LA PAGINA DE VERIFY</p>
        {verificationStatus === 'pending' && <h1>Verificando token...</h1>}
        {verificationStatus === 'success' && <h1>¡Verificación exitosa!</h1>}
        {verificationStatus === 'error' && <h1>Error al verificar el token</h1>}
      </div>
    </Suspense>
  );
};

export default VerifyPage; */


//---------------------------------------------------------------

// "use client";
// import { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const VerifyPage = () => {
//   const searchParams = useSearchParams();
//   const token = searchParams.get('token');

//   const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');

//   useEffect(() => {
//     if (token) {
//       verifyToken(token);
//     }
//   }, [token]);

//   const verifyToken = async (tokenValue: string) => {
//     try {
//       console.log("HOLAAAA  ENTRE  A LA VERIFICACION DEL TOKENNNNN !!!!");

//       const response = await fetch('/api/verify', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token: tokenValue }),
//       });

//       console.log("LA   RESPONSE  TRAIDA EN ESTE OTRO LUGAR ES :  ", response);
      

//       if (response.ok) {
//         // Verificación exitosa
//         setVerificationStatus('success');
//       } else {
//         // Error de verificación
//         setVerificationStatus('error');
//       }
//     } catch (error) {
//       console.error('Error al verificar el tokeeen:', error);
//       setVerificationStatus('error');
//     }
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div>
//         <p> ACA ENTRO A LA PAGINA DE VERIFY</p>
//         {verificationStatus === 'pending' && <h1>Verificando token...</h1>}
//         {verificationStatus === 'success' && <h1>¡Verificación exitosa!</h1>}
//         {verificationStatus === 'error' && <h1>Error al verificar el token</h1>}
//       </div>
//     </Suspense>
//   );
// };

// export default VerifyPage;

//---------------------------------------------------------------

"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const VerifyPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyClient />
    </Suspense>
  );
};

const VerifyClient = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');

  useEffect(() => {
    if (token) {
      verifyToken(token);
    }
  }, [token]);

  const verifyToken = async (tokenValue: string) => {
    try {
      console.log("HOLAAAA  ENTRE  A LA VERIFICACION DEL TOKENNNNN !!!!");

      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: tokenValue }),
      });

      console.log("LA   RESPONSE  TRAIDA EN ESTE OTRO LUGAR ES :  ", response);

      if (response.ok) {
        // Verificación exitosa
        setVerificationStatus('success');
      } else {
        // Error de verificación
        setVerificationStatus('error');
      }
    } catch (error) {
      console.error('Error al verificar el tokeeen:', error);
      setVerificationStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <p> ACA ENTRO A LA PAGINA DE VERIFY</p> */}
      {verificationStatus === 'pending' && <h1 className="text-center">Verificando token...</h1>}
      {/* {verificationStatus === 'success' && <h1>¡Verificación exitosa Ahora te redirigiremos automáticamente al sitio para que puedas continuar navegando</h1>} */}

      {verificationStatus === 'success' && (
        <div className="flex flex-col items-center">
          <h1 className="text-center">¡Verificación exitosa!</h1>
          <Link href={process.env.NEXT_PUBLIC_BASE_URL ?? '/'} className="bg-blue-600 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded text-lg mt-6">
            <button className="text-center">¡Ahora sí estás registrado!
            <br />
            Volver al sitio de RTK-Argentina</button>
          </Link>
        </div>
      )}

      {verificationStatus === 'error' && <h1>Error al verificar el token</h1>}
    </div>
  );
};

export default VerifyPage;
