import Image from "next/image";

type ApprouvedTextProps = {
  text: string;
};

export default function ApprouvedText({ text }: ApprouvedTextProps) {
  return (
    <article className="flex items-center gap-[6px]">
      <div className="relative h-[24px] w-[24px]">
        <Image
          src={"/icon-park-solid_check-one.svg"}
          alt="yellow check one image"
          fill
        />
      </div>

      <p className="flex-1 text-[15px] leading-[100%] sm:text-[18px] min-[106.25rem]:text-[24px]">
        {text}
      </p>
    </article>
  );
}
