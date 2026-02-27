
// import { mailOptions, transporter } from "../../../../emails/client";
// import { replaceMergeTags, stripHTMLTags } from "../../../../emails/helpers";
// import { NextResponse } from "next/server";
// import fs from 'fs';
// import path from 'path';

// // -----------------------------
// // RATE LIMIT (anti bots)
// // -----------------------------
// const RATE_LIMIT = 3;            // máximo 3 envíos
// const WINDOW_MS = 60 * 1000;     // por minuto
// const ipMap = new Map();

// function rateLimit(ip) {
//     const now = Date.now();

//     if (!ipMap.has(ip)) {
//         ipMap.set(ip, { count: 1, start: now });
//         return false; // no bloquear
//     }

//     const data = ipMap.get(ip);

//     // ventana vencida → resetear
//     if (now - data.start > WINDOW_MS) {
//         ipMap.set(ip, { count: 1, start: now });
//         return false;
//     }

//     data.count++;

//     if (data.count > RATE_LIMIT) {
//         return true; // bloquear
//     }

//     return false;
// }

// // -----------------------------
// // S A N I T I Z A C I Ó N
// // -----------------------------
// function sanitize(str) {
//     return str
//         .replace(/<[^>]*>?/gm, '')   // elimina HTML
//         .replace(/[{}$<>]/g, '')     // elimina símbolos peligrosos
//         .trim();
// }

// // -----------------------------
// // V A L I D A C I Ó N   F O R M A L
// // -----------------------------
// function validateInput(data) {
//     const nameRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{2,40}$/;
//     const messageRegex = /^[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ\s.,!?()'"-]{5,600}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!data.firstName || !nameRegex.test(data.firstName)) {
//         return "El nombre no es válido.";
//     }
//     if (!data.email || !emailRegex.test(data.email)) {
//         return "El email no es válido.";
//     }
//     if (!data.message || !messageRegex.test(data.message)) {
//         return "El mensaje no es válido.";
//     }
//     return null;
// }

// // -----------------------------
// // MAIN HANDLER
// // -----------------------------
// export async function POST(request) {
//     try {
//         const ip = request.headers.get("x-forwarded-for") || "unknown";

//         // RATE LIMIT
//         if (rateLimit(ip)) {
//             return NextResponse.json(
//                 { error: "Demasiados intentos. Intente nuevamente en 1 minuto." },
//                 { status: 429 }
//             );
//         }

//         const data = await request.json();

//         // Sanitizar
//         data.firstName = sanitize(data.firstName || "");
//         data.email = sanitize(data.email || "");
//         data.message = sanitize(data.message || "");

//         // Validación
//         const error = validateInput(data);
//         if (error) {
//             return NextResponse.json({ error }, { status: 400 });
//         }

//         // Cargar plantilla HTML
//         const htmlFilePath = path.join(process.cwd(), "emails", "contact-form.html");
//         let htmlContent = fs.readFileSync(htmlFilePath, "utf8");

//         // Merge tags
//         htmlContent = replaceMergeTags(data, htmlContent);
//         const plainTextContent = stripHTMLTags(htmlContent);

//         // Envío email
//         await transporter.sendMail({
//             ...mailOptions,
//             subject: `Formulario de consulta de un cliente`,
//             text: plainTextContent,
//             html: htmlContent,
//         });

//         return NextResponse.json({ success: true });

//     } catch (err) {
//         console.error("❌ Error en API:", err);
//         return NextResponse.json(
//             { error: "Error interno del servidor." },
//             { status: 500 }
//         );
//     }
// }


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


import { mailOptions, transporter } from "../../../../emails/client";
import { replaceMergeTags, stripHTMLTags } from "../../../../emails/helpers";

import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';



export async function POST(request) {
    const data = await request.json();

    // get html template
    const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
    console.log('htmlFilePath: ', htmlFilePath);

    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8', (err, htmlContent) => {
        if (err) {
            console.error('Error reading HTML file: ', err);
            return;
        }
    });

    // replace merge tags with values
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: `formulario de consulta de un cliente`,
           text: plainTextContent,
           html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: err.status });
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// import { mailOptions, transporter } from "../../../../emails/client";
// import { replaceMergeTags, stripHTMLTags } from "../../../../emails/helpers";
// import { NextResponse } from "next/server";
// import fs from 'fs';
// import path from 'path';

// export async function POST(request) {
//     const data = await request.json();

//     // Leer y actualizar el número de formulario
//     const counterFilePath = path.join(process.cwd(), 'form-counter.txt');
//     let formNumber = 0;

//     try {
//         // Leer el número actual
//         formNumber = parseInt(fs.readFileSync(counterFilePath, 'utf8'), 10);

//         // Incrementar el número
//         formNumber += 1;

//         // Guardar el número actualizado
//         fs.writeFileSync(counterFilePath, formNumber.toString(), 'utf8');
//     } catch (err) {
//         console.error('Error reading or updating form counter: ', err);
//         return NextResponse.json({ error: 'Error updating form counter' }, { status: 500 });
//     }

//     // Obtener la plantilla HTML
//     const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
//     let htmlContent;

//     try {
//         htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
//     } catch (err) {
//         console.error('Error reading HTML file: ', err);
//         return NextResponse.json({ error: 'Error reading HTML file' }, { status: 500 });
//     }

//     // Reemplazar las etiquetas de combinación con los valores
//     htmlContent = replaceMergeTags(data, htmlContent);
//     const plainTextContent = stripHTMLTags(htmlContent);

//     try {
//         await transporter.sendMail({
//            ...mailOptions,
//            subject: `${formNumber.toString().padStart(5, '0')} - formulario de consulta de un cliente`,
//            text: plainTextContent,
//            html: htmlContent,
//         });

//         return NextResponse.json({ success: true });
//     } catch (err) {
//         console.error(err);
//         return NextResponse.json({ error: err.message }, { status: err.status });
//     }
// }
