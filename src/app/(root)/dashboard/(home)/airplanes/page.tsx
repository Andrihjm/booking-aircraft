import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "../../components/columns-table";
import { getAirplanes } from "@/lib/airplanes";

const page = async () => {
  const airplanes = await getAirplanes();

  return (
    <div className="container-fluid">
      <div className="flex items-center justify-between">
        <h1 className="my-5 text-2xl font-bold">Airplanes</h1>

        <Link href={"/dashboard/airplanes/create"}>
          <Button>
            <Plus size={20} className="mr-2" />
            Create data
          </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={airplanes} />
    </div>
  );
};

export default page;
