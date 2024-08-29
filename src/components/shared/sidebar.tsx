import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpenText, Plane } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center flex-nowrap gap-5">
        <div className="w-[20%] min-h-screen p-5 grow-0 shadow space-y-5">
          <div className="space-y-2">
            <Link href={"/"}>
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

            <Link href={"/"}>
              <Button
                variant={"ghost"}
                className="w-full flex items-center justify-start gap-2"
              >
                <Plane size={20} /> Airplanes
              </Button>
            </Link>
            <Link href={"/"}>
              <Button
                variant={"ghost"}
                className="w-full flex items-center justify-start gap-2"
              >
                <BookOpenText size={20} /> Airplanes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
