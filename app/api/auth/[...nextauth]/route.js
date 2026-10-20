import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/models/User";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // console.log("EMAIL:", credentials.email);

        await connectDB();

        console.log("CONNECTED");

        const normalizedEmail = credentials.email?.toLowerCase();
        const user = await User.findOne({ email: normalizedEmail });

        // console.log("USER:", user);

        if (!user) {
          throw new Error("No user found");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        // console.log("PASSWORD VALID:", isValid);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          name: `${user.firstName} ${user.lastName}`, // Fallback for standard NextAuth components
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.name = `${token.firstName} ${token.lastName}`;
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/na-console-7x", // Custom login page
    error: "/na-console-7x", // Redirect auth errors here
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
