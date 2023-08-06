'use client'

import Image from "next/image";
import { useState } from "react";
import { imageUpload } from "@/actions/imageUpload";
import { useSession } from "next-auth/react";
import { Skeleton } from "@mui/material";


const ImageUpload = ({ profile }) => {

    const [loaded, setLoaded] = useState("")
    const { data: session, status } = useSession()
    const [uploaded, setUploadedImage] = useState("")

    const handleImageChange = async (ev) => {
        const file = ev.target?.files["0"];
        // let imageUrl = ""
        new Promise((resolve) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                let image = reader.result;
                let imageUrl = reader.result;
                const res = await imageUpload({ image })
                setUploadedImage(res.link);
                setLoaded(imageUrl)
            };
        });
    };


    return (
        <>
            <input value={uploaded} hidden name="imageUrl" />
            {
                profile
                    ?
                    <label
                        htmlFor="files"
                        className="flex justify-start  gap-7 group items-center w-[150px] h-[150px]  lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden border-[2px] border-[gray] cursor-pointer relative "
                    >
                        {status === 'loading' ?
                            <>
                                <Skeleton animation="wave" variant="circular" width={200} height={200} />
                            </> :
                            <Image
                                width={900}
                                height={800}
                                alt={session?.user?.name}
                                src={!loaded?.length ? session?.user?.image : loaded}
                                className="w-[250px] h-[250px] object-cover rounded-full overflow-hidden "
                            />}
                        <div className="bg-[#000000ba] gap-3 text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 w-full h-full flex justify-center items-center  " >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                />
                            </svg>
                            Upload{" "}
                        </div>
                        <input
                            onChange={(ev) => handleImageChange(ev)}
                            type="file"
                            accept="image/png, image/jpeg"
                            id="files"
                            defaultValue={""}
                            hidden
                        />{" "}
                    </label>
                    :

                    <div className="flex flex-col  w-full  gap-7  ">
                        <div className="flex justify-start flex-wrap items-start gap-7 ">
                            {!!loaded?.length &&
                                <Image
                                    width={900}
                                    // onBlur={() => `${value}`}
                                    src={`${loaded}`}
                                    height={800}
                                    alt={"Image"}
                                    className="w-[250px] h-[250px] object-cover rounded-full overflow-hidden "
                                />
                            }
                            <label
                                htmlFor="files"
                                className="flex justify-center items-center gap-2 w-[100%] md:w-[50%] lg:w-[25%] p-5 bg-[#1B00EA] text-lg text-white border border-gray-300 rounded-lg cursor-pointer "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                    />
                                </svg>
                                Upload{" "}
                                <input
                                    onChange={(ev) => handleImageChange(ev)}
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    id="files"
                                    defaultValue={""}
                                    hidden
                                />{" "}
                            </label>
                        </div>
                    </div>

            }
        </>
        // <div className="flex flex-col w-full gap-7  ">
        //     <label
        //         htmlFor="files"
        //         className="flex justify-center items-center gap-2 w-[100%] md:w-[50%] lg:w-[25%] p-5 py-3 bg-[#1B00EA] text-lg text-white border border-gray-300 rounded-lg cursor-pointer "
        //     >
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             fill="none"
        //             viewBox="0 0 24 24"
        //             strokeWidth={1.5}
        //             stroke="currentColor"
        //             className="w-6 h-6"
        //         >
        //             <path
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        //             />
        //         </svg>
        //         Upload{" "}
        //         <input
        //             type="file"
        //             name="image"
        //             onChange={() => }
        //             accept="image/png, image/jpeg"
        //             id="files"
        //             hidden
        //         />{" "}
        //     </label >
        // </div>
    )
}

export default ImageUpload




















