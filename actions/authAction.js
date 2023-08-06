'use server'

import { authOption } from "@/app/api/auth/[...nextauth]/route"
import User from "@/models/userModel"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

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
        // redirect(`/errors?error=${error.message}`)
        console.log(error.message)
    }
}
