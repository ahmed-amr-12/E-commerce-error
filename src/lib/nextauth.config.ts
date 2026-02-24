

import axios from "axios";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "***********",
        },
      },
      authorize: async function (credentials) {
        let response = await axios
          .post(
            `https://ecommerce.routemisr.com/api/v1/auth/signin`,
            credentials,
          )
          .then((res) => {
            let data = res.data;
            console.log(data);

            return data;
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });

        if (response.message == "success") {
          return {
            ...response.user,
            realTokenFromApi: response.token,
          } as any;
        }
      },
    }),
  ],
  callbacks: {
    jwt(params) {
      if (params.user) {
        params.token.realTokenFromApi = params.user.realTokenFromApi ;
      }
      console.log("params", params);

      return params.token;
    },
    session({ session, token }: any) {
      if (token?.realTokenFromApi) {
        session.token = token.realTokenFromApi;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};