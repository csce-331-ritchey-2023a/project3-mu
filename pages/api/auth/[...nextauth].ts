import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      let isAllowedToSignIn = true
      const allowedUser = [
        'Carter Patton',
        'Sam Bierle',
        'Santiago Fonseca',
        'Anuska Pant',
        'Philip Ritchey'
      ];
      console.log(user);
      if (allowedUser.includes(String(user.name))) {
        isAllowedToSignIn = true
      }
      else {
        isAllowedToSignIn = false
      }
      return isAllowedToSignIn
    }
  }
}

export default NextAuth(authOptions)