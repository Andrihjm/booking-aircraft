import Navigation from "@/components/shared/navigation";
import Sidebar from "@/components/shared/sidebar";
import { getUser } from "@/lib/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, session } = await getUser();
  if (!session || user.role === "CUSTOMER") {
    redirect("/dashboard/sign-in");
  }

  return (
    <>
      <div>
        <Navigation />
        <div className="flex">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
