
// import User from '../../models/User';
// import connect from '../../utils/db';
// import bcrypt from 'bcryptjs';
// import { NextResponse } from 'next/server';
// import crypto from 'crypto';
// import { log } from 'console';
// import nodemailer from 'nodemailer';

// export const POST = async (request: any) => {
//   console.log("ENTRÉ A LA  RUTA  1    POST");
//   const { email, password } = await request.json();

//   await connect();

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return new NextResponse("Email is already in use", { status: 400 });
//   }

//   // Generar un token de verificación
//   const verificationToken = generateVerificationToken();

//   console.log("EL TOKEN DE VERIFICACION GENERADO ES:", verificationToken);

//   const hashedPassword = await bcrypt.hash(password, 5);

//   const newUser = new User({
//     email,
//     password: hashedPassword,
//     verificationToken: verificationToken,
//     verified: false,
//   });

//   try {
//     await newUser.save();

//     // Enviar el correo de verificación
//     await sendVerificationEmail(email, verificationToken);
    
//     return new NextResponse("Usuario creado, usuario registrado", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };

// // Función para generar un token de verificación
// function generateVerificationToken(): string {
//   return Math.random().toString(36).substring(2, 10);
// }

// // Función para enviar el correo de verificación
// async function sendVerificationEmail(email: string, verificationToken: string) {
//   const transporter = nodemailer.createTransport({
//     // Configuración de Nodemailer
//     host: 'smtp-mail.outlook.com',
//     port: 587,
//     auth: {
//       user: 'anibal_d_quiroz@outlook.com',
//       pass: 'cafeconleche1*'
//     }
//   });

//   // const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;
//   const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${verificationToken}`;

//   await transporter.sendMail({
//     from: 'anibal_d_quiroz@outlook.com',
//     to: email,
//     subject: 'Verifica tu cuenta',
//     text: `Haz clic en el siguiente enlace para verificar tu cuenta: ${verificationLink}`
//   });
// }

//------------------------------------------------------


import User from '../../models/User';
import connect from '../../utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (request: any) => {
  console.log("ENTRÉ A LA RUTA POST");
  const { email, password } = await request.json();

  // Validaciones básicas
  if (!email || !password) {
    return new NextResponse("Faltan campos obligatorios", { status: 400 });
  }

  await connect();

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("El email ya está en uso", { status: 400 });
    }

    const verificationToken = generateVerificationToken();
    console.log("EL TOKEN DE VERIFICACION GENERADO ES:", verificationToken);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verified: false,
    });

    await newUser.save();

    await sendVerificationEmail(email, verificationToken);
    
    return new NextResponse("Usuario creado, usuario registrado", { status: 200 });
  } catch (err: any) {
    console.error("Error al registrar usuario:", err);
    return new NextResponse("Error interno del servidor", { status: 500 });
  }
};

function generateVerificationToken(): string {
  return Math.random().toString(36).substring(2, 10);
}

async function sendVerificationEmail(email: string, verificationToken: string) {
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp-mail.outlook.com',
  //   port: 587,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS
  //   }
  // });
  const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
      }
    });

  const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${verificationToken}`;

  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_ADMIN_EMAI,
    to: email,
    subject: 'Verifica tu cuenta',
    text: `Haz clic en el siguiente enlace para verificar tu cuenta: ${verificationLink}`
  });
}
