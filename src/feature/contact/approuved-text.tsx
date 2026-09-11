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

      <p className="text-p-sm sm:text-p-md 3xl:text-title-sm flex-1 leading-[100%]">
        {text}
      </p>
    </article>
  );
}
