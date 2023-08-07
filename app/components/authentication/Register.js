'use client'
import Link from "next/link";
import Google from "./Google";
// import Header from "../Header";
import SideBanner from "./SideBanner";
import Input from "./Input";
import Form from "../Form";
import { signupCredential } from "@/actions/authAction";
import FormBtn from "../FormBtn";
import Popup from "../Popup";

const Register = () => {

    let response = ""

    async function handleSignupCredential(formData) {
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        // console.log(email)
        const res = await signupCredential({ name, email, password })
        console.log(res?.msg)
        if (res?.msg) alert(res?.msg)
    }

    // console.log(msg)

    return (
        <>
            <SideBanner />
            {
                response
                    ?
                    <Popup msg={'Email'} />
                    :
                    <></>
            }
            <Form
                action={handleSignupCredential}
                style="flex flex-col w-full md:w-[60%] lg:w-[50%] justify-center items-center px-10 lg:px-10   shadow-xl h-[45em] lg:h-[58.5em]"
            >
                {/* <div className="w-full flex flex-col gap-1 ">
                    <Header
                        style="text-[26px] font-[700] flex justify-start items-start "
                        value="Join Now"
                    />
                    <span className="flex justify-start font-[400] items-start ">
                        Join now
                    </span>
                </div> */}
                <Google />
                <div className="flex flex-col justify-start items-start gap-5 w-full" >
                    <Input
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Name"
                        name='name'
                    />
                    <Input
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Email Address"
                        type="email"
                        name='email'
                    />
                    <Input
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Password"
                        name='password'
                        type="password"
                    />
                </div>
                <FormBtn name={'Register'} />
                <div className="flex justify-center items-center gap-3">
                    {"Already"} have an account?
                    <Link className="" href={"/login"}>
                        Login
                    </Link>
                </div>
            </Form>
        </>
    );
};

export default Register;
