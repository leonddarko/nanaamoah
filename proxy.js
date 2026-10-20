
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Authorization is handled by the callback below.
  },
  {
    pages: {
      signIn: "/na-console-7x",
      error: "/na-console-7x",
    },
    callbacks: {
      authorized: ({ token }) => {
        // Require an authenticated user with the admin role.
        return Boolean(token && token.role === "admin");
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
