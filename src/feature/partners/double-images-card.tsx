import Image from "next/image";

type DoubleImagesCardProps = {
  rightImage: string;
  leftImage: string;
};

export default function DoubleImagesCard({
  rightImage,
  leftImage,
}: DoubleImagesCardProps) {
  return (
    <figure className="relative flex h-full w-full justify-between">
      <figure className="relative w-[49.5%]">
        <Image src={rightImage} alt={rightImage} fill />
      </figure>
      <figure className="relative w-[49.5%]">
        <Image src={leftImage} alt={leftImage} fill />
      </figure>
    </figure>
  );
}
