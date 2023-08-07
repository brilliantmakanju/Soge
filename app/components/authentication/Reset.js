'use client'
import Link from "next/link";
import Header from "../Header";
import SideBanner from "./SideBanner";
import Input from "./Input";
import { resetPassword } from "@/actions/authAction";
import FormBtn from "../FormBtn";
import Form from "../Form";

const ResetPassword = () => {

    let response = ""

    async function handlePasswordReset(formData) {
        const email = formData.get('email')
        const res = await resetPassword({ email })
        console.log(res?.msg)
        if (res?.msg) alert(res?.msg)
    }
    return (
        <>
            <SideBanner />
            <Form
                action={handlePasswordReset}
                style="flex flex-col w-full md:w-[60%] lg:w-[50%] justify-center items-center px-10 lg:px-10   shadow-xl h-[45em] lg:h-[58.5em]"
            >
                <div className="w-full flex flex-col gap-1 ">
                    <Header
                        style="text-[26px] font-[700] flex justify-start items-start "
                        value="Forgotten Password"
                    />
                </div>
                <div className="flex flex-col justify-start items-start gap-5 w-full" >
                    <Input
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Email"
                        name='email'
                        type="email"
                    />
                </div>
                <FormBtn name={'Reset Password'} />
                <div className="flex justify-center my-2 items-center gap-3">
                    {"Register"} an account?
                    <Link className="" href={"/register"}>
                        Register
                    </Link>
                </div>
            </Form>
        </>
    );
};

export default ResetPassword;
