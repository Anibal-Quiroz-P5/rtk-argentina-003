
// import { mailOptions, transporter } from "../../../../emails/client";
// import { replaceMergeTags, stripHTMLTags } from "../../../../emails/helpers";

// import { NextResponse } from "next/server";
// import fs from 'fs';
// import path from 'path';



// export async function POST(request) {
//     const data = await request.json();

//     // get html template
//     const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
//     console.log('htmlFilePath: ', htmlFilePath);

//     let htmlContent = fs.readFileSync(htmlFilePath, 'utf8', (err, htmlContent) => {
//         if (err) {
//             console.error('Error reading HTML file: ', err);
//             return;
//         }
//     });

//     // replace merge tags with values
//     htmlContent = replaceMergeTags(data, htmlContent);
//     const plainTextContent = stripHTMLTags(htmlContent);

//     try {
//         await transporter.sendMail({
//            ...mailOptions,
//            subject: `formulario de consulta de un cliente`,
//            text: plainTextContent,
//            html: htmlContent,
//         });

//         return NextResponse.json({ success: true });
//     } catch (err) {
//         console.error(err);
//         return NextResponse.json({ error: err.message }, { status: err.status });
//     }
// }


import { mailOptions, transporter } from "../../../../emails/client";
import { replaceMergeTags, stripHTMLTags } from "../../../../emails/helpers";
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    const data = await request.json();

    // Leer y actualizar el número de formulario
    const counterFilePath = path.join(process.cwd(), 'form-counter.txt');
    let formNumber = 0;

    try {
        // Leer el número actual
        formNumber = parseInt(fs.readFileSync(counterFilePath, 'utf8'), 10);

        // Incrementar el número
        formNumber += 1;

        // Guardar el número actualizado
        fs.writeFileSync(counterFilePath, formNumber.toString(), 'utf8');
    } catch (err) {
        console.error('Error reading or updating form counter: ', err);
        return NextResponse.json({ error: 'Error updating form counter' }, { status: 500 });
    }

    // Obtener la plantilla HTML
    const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
    let htmlContent;

    try {
        htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    } catch (err) {
        console.error('Error reading HTML file: ', err);
        return NextResponse.json({ error: 'Error reading HTML file' }, { status: 500 });
    }

    // Reemplazar las etiquetas de combinación con los valores
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: `${formNumber.toString().padStart(5, '0')} - formulario de consulta de un cliente`,
           text: plainTextContent,
           html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: err.status });
    }
}
