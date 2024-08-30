"use client";

import { getUrlFileImage } from "@/lib/supabase/supabase";
import { AirPlane } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<AirPlane>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <Image
          src={getUrlFileImage(plane.image)}
          alt="Image airplane"
          width={120}
          height={120}
        />
      );
    },
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
          <Link
            href={`/dashboard/airplanes/edit/${plane.id}`}
            className="flex items-center"
          >
            <Pencil size={20} className="mr-2" />
            Edit
          </Link>
        </div>
      );
    },
  },
];
