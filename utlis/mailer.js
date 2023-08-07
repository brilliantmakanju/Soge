
import nodemailer from 'nodemailer'
import { html } from './htmlMail'

const mailer = async ({ to, url, text }) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIl_PASSWORD
        }
    })

    const mailOption = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: 'Soge | Email Verfication',
        html: html({ url, text })
    }


    const result = await transporter.sendMail(mailOption)
    return result

}


export default mailer




