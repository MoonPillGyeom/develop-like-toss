import { MongoClient } from "mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      // 로그인 실행
      async authorize(credentials, req) {
        const params = {
          userId: credentials?.username,
          userPw: credentials?.password,
        };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_URL}/api/user/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
          }
        );

        const res = await response.json();

        if (res.message == "OK") {
          return res;
        } else {
          throw new Error(res.message);
        }
      },
    }),
  ],
  // 커스텀 로그인 페이지 사용
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
