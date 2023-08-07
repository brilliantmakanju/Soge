import React from 'react'
import Form from '../../Form'
import FormBtn from '../../FormBtn'
import { changePassword } from '@/actions/authAction'
import Input from '../../authentication/Input'

const Forms = ({ session }) => {
    async function handleUpdateAction(formData) {
        // 'use server'
        const oldpassword = formData.get('oldpassword')
        const newpassword = formData.get('newpassword')
        const res = await changePassword({ oldpassword, newpassword })
        console.log(res?.msg)

    }

    return (
        <Form action={handleUpdateAction} style={`flex w-full py-6 flex-col justify-start items-center gap-4 `} >
            <div className={`flex flex-col w-full lg:w-[600px]  p-3 justify-start items-start gap-4  `} >
                <label className='flex flex-col gap-2 w-full p-4 text-[16px] ' htmlFor='oldpassword' >
                    Old Password
                    <Input name="oldpassword" id='oldpassword' placeholder={'New Password'} style={`py-3 w-full `} />
                </label>
                <label className='flex flex-col w-full p-4 text-[16px] gap-2 ' htmlFor='newpassword' >
                    New Password
                    <Input name="newpassword" id='newpassword' placeholder={'New Password'} style={`py-3 w-full `} />
                </label>
            </div>
            <FormBtn name={'Save'} />
        </Form>
    )
}

export default Forms








