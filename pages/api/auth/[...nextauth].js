import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../lib/prisma';

const authHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Email and Password',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: 'Email',
          type: 'text',
          placeholder: 'bachata_dancer@highwycombe.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        // const hostname = `http://${req.headers.host}`;
        const hostname = req.headers.origin;
        // const hostname = `http://${req.headers.host}`;
        if ('username' in credentials && 'password' in credentials) {
          const res = await fetch(`${hostname}/api/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          });
          const user = await res.json();
          if (res.ok && user) {
            if (user.error) {
              // bad credentials
              return null;
            }
            return user;
          }
          // login failed
          return null;
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (token) {
        session.user.admin = token.admin;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      token.user = user;
      if (user) {
        token.admin = user.admin;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};
