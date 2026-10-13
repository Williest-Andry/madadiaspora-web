import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TopSearchBarProps = {
  className?: string;
};

export default function TopSearchBar({ className }: TopSearchBarProps) {
  return (
    <div
      className={cn(
        "flex h-[48px] w-[40%] items-center justify-center gap-[8px] rounded-[33px] bg-[#E6E6E6] px-[16px] py-[8px] xl:w-[636px] 2xl:w-[736px]",
        className
      )}
    >
      <div className="relative h-[24px] w-[24px]">
        <Image src={"/top-search-icon.svg"} alt="top-search-icon" fill />
      </div>
      <Input
        placeholder="Rechercher quelque chose..."
        className="text-[12px]!"
      />
    </div>
  );
}
