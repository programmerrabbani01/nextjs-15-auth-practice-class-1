import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: "q4dmHC8CqMQYmpCpuaVfRg3VYt/r02Wb/KdTTGb/SIM=",
  session: {
    strategy: "jwt",

    // maxAge: 30 * 24 * 60 * 60,

    // updateAge: 24 * 60 * 60,
    // generateSessionToken: () => {
    //   return randomUUID?.() ?? randomBytes(32).toString("hex");
    // },
  },
};
