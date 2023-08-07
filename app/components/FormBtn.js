'use client'
import { experimental_useFormStatus as useFormStatus } from "react-dom";
const FormBtn = ({ name, ...props }) => {

    const { pending } = useFormStatus()

    return (
        <button
            className="rounded-full bg-[#005555] text-white w-[50%] mt-5 p-4 font-bold disabled:bg-[#1b3535] disabled:cursor-not-allowed disabled:opacity-30  "
            disabled={pending}
        >
            {pending ? 'Loading...' : name}
        </button>

    )
}

export default FormBtn


