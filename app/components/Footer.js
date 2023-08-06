import React from "react";
import Link from "next/link";
import { greatVibes } from "@/public/font";
import Header from "./Header";

const Footer = () => {
    return (
        <footer className="px-2 lg:px-20 flex-col py-12 h-auto flex justifiy-between items-start lg:items-center gap-8 w-full xl:container xl:mx-auto ">
            <div className=" lg:flex-row flex-col flex justifiy-between items-center gap-5 w-full ">
                <div className="w-full lg:w-[50%] flex flex-col justify-start items-start gap-1  ">
                    <Link
                        className="text-[33px] flex justify-start lg:pl-4 items-center font-bold text-[#005555]  "
                        href={"/"}
                    >
                        Soge
                    </Link>
                    <span
                        className={`lg:px-5 w-full break-words text-[17px] text-[#504F59] font-[400] leading-[28px] ${greatVibes} `}
                    >
                        SogeKing is the best place to buy and rent your dream home
                        throughout Indonesia
                    </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row py-5 lg:p-5 justify-between items-start lg:items-center gap-10 ">
                    <div className="flex justify-start items-start gap-3 flex-col">
                        <Header
                            value="For Beginner"
                            style="font-[600] text-[#191726] text-[20px] "
                        />
                        <ul className="flex flex-col justify-start items-start gap-2 font-[400] text-[16px] text-[#504F59] ">
                            <Link href={"/"}>About</Link>
                            <Link href={"/"}>Career</Link>
                            <Link href={"/"}>Promotion</Link>
                        </ul>
                    </div>
                    <div className="flex justify-start items-start gap-3 flex-col">
                        <Header
                            value="Overview"
                            style="font-[600] text-[#191726] text-[20px] "
                        />
                        <ul className="flex flex-col justify-start items-start gap-2 font-[400] text-[16px] text-[#504F59] ">
                            <Link href={"/"}>Product</Link>
                            <Link href={"/"}>Categories</Link>
                            <Link href={"/"}>Pricing</Link>
                        </ul>
                    </div>
                    <div className="flex justify-start items-start gap-3 flex-col">
                        <Header
                            value="Explore Us"
                            style="font-[600] text-[#191726] text-[20px] "
                        />
                        <ul className="flex flex-col justify-start items-start gap-2 font-[400] text-[16px] text-[#504F59] ">
                            <Link href={"/"}>Our Career</Link>
                            <Link href={"/"}>Privacy</Link>
                            <Link href={"/"}>Terms & Conditions</Link>
                        </ul>
                    </div>
                    <div className="flex justify-start items-start gap-3 flex-col">
                        <Header
                            value="Connect Us"
                            style="font-[600] text-[#191726] text-[20px] "
                        />
                        <ul className="flex flex-col justify-start items-start gap-2 font-[400] text-[16px] text-[#504F59] ">
                            <Link href={"/"}>support@sogeking.com</Link>
                            <Link href={"/"}>021-733-249</Link>
                            <Link href={"/"}>Serpong, South Tanggerang</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <span className="text-[17px] font-[400] text-[#504F59] " >Copyright 2023 • All Rights Reserved SogeKing by mlw.fig</span>
        </footer>
    );
};

export default Footer;
