import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuración de Next.js
  // ...
  // Configuración de CORS
  cors: {
    // Dominios permitidos
    origin: ['https://anibalquiroz.com', 'https://localhost:3000'],
    // Encabezados permitidos
    headers: ['Content-Type', 'Authorization'],
    // Métodos permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
};

export default nextConfig;