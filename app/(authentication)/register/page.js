import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"
import Register from "@/app/components/authentication/Register"
const page = async () => {
    const session = await getServerSession(authOption)
    if(session === 'null') 
    if(session != 'null' ){
        window.location.href = "/"
    }

    return (
        <section className='flex  min-h-screen justify-center lg:px-10 xl:px-20 items-center pb-4 w-full' >
            <Register />
        </section>
    )
}

export default page