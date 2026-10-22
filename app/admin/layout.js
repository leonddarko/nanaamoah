import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AdminShell from "./components/AdminShell";

export const metadata = {
  title: {
    default: "Management Portal | Nana Amoah",
    template: "%s | Nana Amoah Admin",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/na-console-7x");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <AdminShell
      user={{
        name: session.user.name,
        email: session.user.email,
      }}
    >
      {children}
    </AdminShell>
  );
}