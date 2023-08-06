import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import connectDB from "@/utlis/database"
import GoogleProvider from 'next-auth/providers/google'

connectDB()

export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages:{
        signIn: '/authentication/login'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }){
            if(account.type === 'oauth' ){
                return await signInWithOAuth({ account, profile })
            }
            return true
        },
        async jwt({ token, trigger, session }){

            console.log(trigger)

            const user = await getUserByEmail({ email: token.email })
            token.user = user
            return token
        },
        async session({ session, token }){
            session.user = token.user
            return session
        }
    }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }


async function signInWithOAuth({ account, profile }){
    const user = await User.findOne({ email: profile.email })
    if(user) return true

    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider
    })

    await newUser.save()

    console.log(newUser)

    return true
}


async function getUserByEmail({ email }){
    const user = await User.findOne({email}).select('-password')
    if(!user) throw new Error('Email does not exist')

    return { ...user._doc, _id: user._id.toString() }
}








