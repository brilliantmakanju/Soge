// import fs from 'fs'
// import prisma from "@/libs/prismadb"
import { NextResponse, NextRequest } from "next/server";
// import { promises as fsPromises } from 'fs';
// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"


// const client = new S3Client({
//   region: "us-east-1",
//   credentials: {
//     accessKeyId: process.env.S3_ACCESS_KEY || '',
//     secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
//   },
// })


export async function POST(Request) {
  const data = await req.json()
  const { image } = data
  console.log(image)
//   const regex = /^data:image\/(\w+);base64,/; // Regular expression to match the data URI prefix
//   const match = image.match(regex);
//   if (match && match[1]) {
//     const newFile = Date.now().toString(36) + Math.random().toString(36).substr(2) + '.' + match[1]
//     const imageData = image.replace(/^data:image\/\w+;base64,/, '');
//     const imageBuffer = Buffer.from(imageData, 'base64');


//     const links = [];


//     client.send(new PutObjectCommand({
//       Bucket: "soge",
//       Key: newFile,
//       Body: imageBuffer,
//       ACL: 'public-read',
//       ContentType: match[1]
//     }))
//     const link = `https://soge.s3.amazonaws.com/${newFile}`
//     // await fsPromises.unlink(newFile);
//     // fs.unlink(newFile,(err) => {
//     //   if (err) {
//     //     console.error('Error deleting the file:', err);
//     //   } else {
//     //     console.log('File deleted successfully.');
//     //   }
//     // });
//     // links.push(link)
//     // console.log(link)

//     return NextResponse.json({'links':link}, { "status": 200 })
//   }
  

}
