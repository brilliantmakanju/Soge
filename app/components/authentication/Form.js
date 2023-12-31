"use client";
import Link from "next/link";
import Google from "./Google";
import Header from "../Header";
import { useState } from "react";
import SideBanner from "./SideBanner";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Input from "./Input";
import FormBtn from "../FormBtn";
import Form from "../Form";

const Login = ({ callbackUrl }) => {

    async function handleCredential(formData) {
        const email = formData.get('email')
        const password = formData.get('password')

        await signIn('credentials', { email, password, callbackUrl })
    }

    return (
        <>
            <SideBanner />
            <Form
                action={handleCredential}
                style="flex flex-col w-full md:w-[60%] lg:w-[50%] justify-center items-center px-10 lg:px-10   shadow-xl h-[45em] lg:h-[58.5em]"
            >
                <div className="w-full flex flex-col gap-1 ">
                    <Header
                        style="text-[26px] font-[700] flex justify-start items-start "
                        value="Hello Again!"
                    />
                    <span className="flex justify-start font-[400] items-start ">
                        Welcome Back
                    </span>
                </div>
                <Google />
                <div className="flex flex-col justify-start items-start gap-5 w-full" >
                    <Input
                        name="email"
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Email Address"
                    />
                    <Input
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                </div>
                <FormBtn name={'Login'} />
                <div className="flex justify-center my-3 items-center gap-3">
                    <Link className="" href={"/forgottenpassword"}>
                        Forgotten Passoword
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-3">
                    {"Don't"} have an account yet?
                    <Link className="" href={"/register"}>
                        Register
                    </Link>
                </div>
            </Form>
        </>
    );
};

export default Login;
