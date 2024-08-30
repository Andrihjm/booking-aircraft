import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpenText, Plane, Ticket, User } from "lucide-react";
import LogOutButton from "@/app/(root)/dashboard/components/log-out-button";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] min-h-screen p-5 grow-0 shadow space-y-5">
        <div className="space-y-2">
          <Link href={"/dashboard/airplanes"}>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-start gap-2"
            >
              <Plane size={20} /> Airplanes
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-xs font-bold uppercase">Master Data</h1>

          <Link href={"/dashboard/airplanes"}>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-start gap-2"
            >
              <Plane size={20} /> Airplanes
            </Button>
          </Link>
          <Link href={"/dashboard/flights"}>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-start gap-2"
            >
              <BookOpenText size={20} /> Flight
            </Button>
          </Link>
          <Link href={"/dashboard/tickets"}>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-start gap-2"
            >
              <Ticket size={20} /> Tickets
            </Button>
          </Link>
          <Link href={"/dashboard/users"}>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-start gap-2"
            >
              <User size={20} /> Users
            </Button>
          </Link>
        </div>

        <LogOutButton />
      </div>
    </>
  );
};

export default Sidebar;
