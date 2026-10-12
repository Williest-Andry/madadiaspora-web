import { Button } from "@/components/ui/button";
import { MoveLeft, ShieldX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-20 mb-30 flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <ShieldX size={200} color="var(--secondary)" />
        <p className="text-[80px] font-bold sm:text-[100px]">
          4<span className="text-secondary">0</span>4
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-title-md sm:text-title-xl font-bold">
          Page introuvable !
        </h2>
        <p className="text-p-md sm:text-p-xl">Cette page n'existe pas</p>
      </div>
      <Link
        href="/"
        className="bg-secondary flex cursor-pointer items-center justify-center rounded-[54px] px-4 py-2"
      >
        <MoveLeft color="var(--primary)" />
        <Button
          className={"text-p-md text-primary hover:text-primary cursor-pointer"}
          variant={"ghost"}
        >
          Retourner à l'accueil
        </Button>
      </Link>
    </div>
  );
}
