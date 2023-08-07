'use client'
import { useRouter, useSearchParams } from "next/navigation"
import Header from "../components/Header"

const Errors = () => {

    const router = useRouter()
    const searchParms = useSearchParams()
    const errMsg = searchParms.get('error')

    return (
        <section className='flex flex-col  min-h-screen justify-center lg:px-10 xl:px-20 items-start pb-4 w-full' >
            <Header value={errMsg} style={`text-[30.5px] text-[red] `} />
            <button className="rounded-md bg-[#005555] text-white w-[200px] mt-1 p-4 py-3  font-bold disabled:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-30  " onClick={() => router.back()} >Try Again</button>
        </section>
    )
}

export default Errors