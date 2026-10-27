import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const items = [
  { label: "Les plus récents", value: false },
  { label: "Les plus anciens", value: true },
];

type SortCreatedDateSelectorProps = {
  value: boolean;
  onChange: (newValue: boolean) => void;
  className?: string;
};

export default function SortCreatedDateSelector({
  value,
  onChange,
  className,
}: SortCreatedDateSelectorProps) {
  return (
    <Select
      items={items}
      value={value}
      onValueChange={(selected) => onChange(selected ?? false)}
    >
      <SelectTrigger
        className={cn(
          "max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] lg:h-[51px] lg:w-[355px]!",
          className
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{"Sélectionnez l'ordre"}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.label} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
