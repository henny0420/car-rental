import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"
import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth"
import { NextResponse } from "next/server";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentails",
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'passoword', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB()

        try {
          const user = await User.findOne({ email: credentials.email })
          if (!user) return null

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!isValid) return ({ message: 'invalid credentials'}, {status: 400} )

          return user
        } catch (error) {
          return NextResponse({ error })
        }
      }

    }
    )
  ],
  callbacks: {

    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          await connectDB();

          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            await User.create({
              username: user.name,
              email: user.email,
              role: "USER",
            });
          }
          return true; // Let them in
        } catch (error) {
          console.log("Error saving Google user:", error);
          return false; // Block login if DB fails
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        await connectDB();
        const DBuser = await User.findOne({ email: token.email })
        token._id = DBuser._id?.toString(),
          token.role = DBuser.role,
          token.username = DBuser.username
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role,
          session.user._id = token._id,
          session.user.username = token.username
      }
      return session
    },
  },
  // pages: {
  //     sign : '/signin'
  // },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.SECRET_KEY
}