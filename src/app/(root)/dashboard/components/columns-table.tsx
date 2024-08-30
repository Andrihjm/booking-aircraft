"use client";

import { AirPlane } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<AirPlane>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Link href={`/dashboard/airplanes/edit/${plane.id}`} className="flex items-center">
            <Pencil size={20} className="mr-2" />
            Edit
          </Link>
        </div>
      );
    },
  },
];
