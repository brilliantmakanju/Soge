"use client";
import Link from "next/link";
import Google from "./Google";
import Header from "../Header";
import { useState } from "react";
import SideBanner from "./SideBanner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Input from "./Input";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const { data: session, status } = useSession();
    const [password, setPassword] = useState("");
    const [creating, setCreating] = useState(false);



    return (
        <>
            <SideBanner />
            <div
                className="flex flex-col w-full md:w-[60%] lg:w-[50%] justify-center items-center px-10 lg:px-10   shadow-xl h-[45em] lg:h-[58.5em]"
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
                        onChange={(e) => setEmail(e.target.value)}
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Email Address"
                        disabled={creating}
                    />
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        style="w-full p-2  h-[80px] border-[#EEE] focus:border-[#EEE] text-[15px] text-[#333333] "
                        placeholder="Password"
                        disabled={creating}
                        type="password"
                    />
                </div>
                <button
                    className="rounded-full bg-[#005555] text-white w-[50%] mt-5 p-4 font-bold disabled:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-30  "
                    disabled={creating}
                >
                    Login
                </button>
                <div className="flex justify-center my-3 items-center gap-3">
                    <Link className="" href={"/auth/register"}>
                        Forgotten Passoword
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-3">
                    {"Don't"} have an account yet?
                    <Link className="" href={"/auth/register"}>
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Login;
