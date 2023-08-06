'use server'
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

const client = new S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY || '',
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
    },
})


export async function imageUpload({ image }) {
    const regex = /^data:image\/(\w+);base64,/; // Regular expression to match the data URI prefix
    const match = image.match(regex);
    if (match && match[1]) {
        const newFile = Date.now().toString(36) + Math.random().toString(36).substr(2) + '.' + match[1]
        const imageData = image.replace(/^data:image\/\w+;base64,/, '');
        const imageBuffer = Buffer.from(imageData, 'base64');
        client.send(new PutObjectCommand({
            Bucket: "soge",
            Key: newFile,
            Body: imageBuffer,
            ACL: 'public-read',
            ContentType: match[1]
        }))
        const link = `https://soge.s3.amazonaws.com/${newFile}`
        return { link: link }
    }

}








