import { authOption } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

const CurrentUser = async () => {

    const session = await getServerSession(authOption)

    return session

}

export default CurrentUser