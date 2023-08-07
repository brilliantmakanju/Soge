import User from "@/models/userModel";
import bcrypt from 'bcrypt'
import NextAuth from "next-auth/next";
import connectDB from "@/utlis/database"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

connectDB()

export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Soge",
            credentials: {
                username: { label: "Email", type: "email", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials

                const user = await signInWithCredentials({ email, password })
                return user
            }
        })
    ],
    pages: {
        signIn: '/authentication/login',
        error: '/errors'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.type === 'oauth') {
                return await signInWithOAuth({ account, profile })
            }
            return true
        },
        async jwt({ token, trigger, session }) {

            if (trigger === 'update') {
                token.user.name = session.name
                token.user.image = session.image
                token.user.phone = session.phone
            } else {
                const user = await getUserByEmail({ email: token.email })
                token.user = user
            }

            return token
        },
        async session({ session, token }) {
            session.user = token.user
            return session
        }
    }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }

async function signInWithCredentials({ email, password }) {
    const user = await User.findOne({ email })
    if (!user) throw new Error('Email does not exists!')

    const compare = await bcrypt.compare(password, user.password)
    if (!compare) throw new Error('Password does not match!')

    return { ...user._doc, _id: user._id.toString() }
}

async function signInWithOAuth({ account, profile }) {
    const user = await User.findOne({ email: profile.email })
    if (user) return true

    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider
    })
    await newUser.save()
    return true
}


async function getUserByEmail({ email }) {
    const user = await User.findOne({ email }).select('-password')
    if (!user) throw new Error('Email does not exist')

    return { ...user._doc, _id: user._id.toString() }
}








