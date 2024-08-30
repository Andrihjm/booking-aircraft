import Navigation from "@/components/shared/navigation";
import Sidebar from "@/components/shared/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Navigation />
        <div className="flex gap-5">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
}
