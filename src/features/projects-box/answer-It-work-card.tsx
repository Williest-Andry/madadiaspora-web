import { twMerge } from "tailwind-merge";

interface AnswerItWorkCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export default function AnswerItWorkCard({ number, title, description, className }: AnswerItWorkCardProps) {
  return (
    <div className={twMerge(
      "flex w-full flex-col gap-4 rounded-[8px] bg-[#0F2A33] p-6 text-white",
      className
    )}>
      <span className="text-4xl font-semibold leading-none">{number}</span>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="line-clamp-2 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}