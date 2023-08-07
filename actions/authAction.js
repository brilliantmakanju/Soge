'use server'

import { authOption } from "@/app/api/auth/[...nextauth]/route"
import User from "@/models/userModel"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import bcrypt from 'bcrypt'
import { generateToken, verifyToken } from "@/utlis/token"
import mailer from "@/utlis/mailer"

const BASE_URL = process.env.NEXTAUTH_URL

export async function updateUser({name, image, phone}){
    const session = await getServerSession(authOption)
    if(!session) throw new Error("Unauthorization")
    try {
        if (!name) return {msg: 'Name is Required'}
        if (!image) return {msg: 'Image is Required'}
        if (!phone) return {msg: 'Phone is Required'}
        const user = await User.findByIdAndUpdate(session?.user?._id, {
            name, image, phone
        }, { new: true }).select('-password')
        if(!user) throw new Error("Email does not exist!")
        return {msg: 'Update Profile Successfully'}
    } catch (error) {
        redirect(`/errors?error=${error.message}`)
        console.log(error.message)
    }
}

export async function signupCredential(data){
    try {
        const user = await User.findOne({ email: data.email })
        if(user) throw new Error("Email already exists!")

        if(data.password){
            data.password = await bcrypt.hash(data.password, 12)
        }
        const token = generateToken({user: data})

        await mailer({
            to: data.email,
            url: `${BASE_URL}/verify?token=${token}`,
            text: 'Verify Email'
        })
        return {msg: 'Sign Up Success! Check your email to complete the registration.'}
    } catch (error) {
        redirect(`/errors?error=${error.message}`)
        console.log(error.message)
    }
}

export async function verifyWithCredential(token){
    try {
        const { user } = verifyToken(token)
        const userExist = await User.findOne({email: user.email})
        if(userExist) return {msg: 'Verify Success!'}

        const newUser = new User(user)
        await newUser.save()

        return {msg: 'Verify Success!'}
    } catch (error) {
        redirect(`/errors?error=${error.message}`)
        console.log(error.message)
    }
}

export async function changePassword({oldpassword, newpassword}){
    try {
        const session = await getServerSession(authOption)
        if(!session) throw new Error('Unauthorization!')
        if(session?.user?.provider !== 'credentials'){
            throw new Error(`This account is signed in with ${session?.user?.provider}. You can't use this function`)
        }
       const user = await User.findById(session?.user?._id)
       if(!user) throw new Error('User does not exists!')

       const compare = await bcrypt.compare(oldpassword, user.password)
       if(!compare) throw new Error('Old Password does not match')

       const newpass = await bcrypt.hash(newpassword, 12)

       await User.findByIdAndUpdate(user._id, { password: newpass })

       return {msg: 'Change Password Successfully!'}

    } catch (error) {
        redirect(`/errors?error=${error.message}`)
        console.log(error.message)
    }
}

export async function resetPassword({email}){
    try {

        const user = await User.findOne({email})
        if(!user) throw new Error('Email does not exist!')

        if(user?.provider !== 'credentials'){
            throw new Error(`This account is signed in with ${session?.user?.provider}. You can't use this function`)
        }

        const token = generateToken({ userId: user._id })

        await mailer({
            to: email,
            url: `${BASE_URL}/reset_password?token=${token}`,
            text: 'Reset Password'
        })

       return {msg: 'Check your mail for a reset link'}

    } catch (error) {
        redirect(`/errors?error=${error.message}`)
        console.log(error.message)
    }
}


