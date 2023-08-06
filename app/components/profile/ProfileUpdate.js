
import React from 'react'
import Form from '../Form'
import ImageUpload from './ImageUpload'
import Input from '../authentication/Input'
import CurrentUser from '@/utlis/currentUser'
import { updateUser } from '@/actions/authAction'

const ProfileUpdate = async () => {

    const session = await CurrentUser()

    async function handleUpdateAction(formData) {
        'use server'
        const name = formData.get('name')
        const image = formData.get('imageUrl')
        const phone = formData.get('phone')
        const res = await updateUser({ name, image, phone })
        console.log(res?.msg)

    }

    return (
        <Form action={handleUpdateAction} style={`flex w-full py-6 flex-col justify-start items-center gap-4 `} >
            <div className={`flex flex-col w-full lg:w-[600px]  p-3 justify-start items-start gap-4  `} >
                <div className='w-full flex justify-center items-center p-3 ' >
                    <ImageUpload profile />
                </div>
                <label className='flex flex-col gap-2 w-full p-4 text-[16px] ' htmlFor='name' >
                    Name
                    <Input name="name" id='name' value={session?.user?.name} placeholder={'First Last'} style={`py-3 w-full `} />
                </label>
                <label className='flex flex-col w-full p-4 text-[16px] gap-2 ' htmlFor='username' >
                    Username
                    <Input name="username" id='username' value={session?.user?.username} placeholder={'Username'} style={`py-3 w-full `} />
                </label>
                <label className='flex flex-col w-full p-4 text-[16px] gap-2 ' htmlFor='email' >
                    Email
                    <Input disabled name="email" id='email' value={session?.user?.email} placeholder={'email'} style={`py-3 w-full `} />
                </label>
                <label className='flex flex-col w-full p-4 text-[16px] gap-2 ' htmlFor='phone' >
                    Phone
                    <Input name="phone" id='phone' value={session?.user?.phone} placeholder={'Phone No'} style={`py-3 w-full `} />
                </label>
                <label className='flex flex-col w-full p-4 text-[16px] gap-2 ' htmlFor='role' >
                    Role
                    <Input disabled name="role" id='role' value={session?.user?.role} placeholder={'Role'} style={`py-3 w-full capitalize `} />
                </label>
            </div>
            <button className='w-full py-3 lg:py-4 lg:w-[250px] rounded-full text-white bg-[#005555]' >Save</button>
        </Form>
    )
}

export default ProfileUpdate








