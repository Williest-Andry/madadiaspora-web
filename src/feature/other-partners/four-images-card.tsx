import DoubleImagesCard from "../partners/double-images-card";

type FourImagesCardProps = {
  leftFirstImage: string;
  leftSecondImage: string;
  rightFirstImage: string;
  rightSecondImage: string;
};

export default function FourImagesCard({
  leftFirstImage,
  leftSecondImage,
  rightFirstImage,
  rightSecondImage,
}: FourImagesCardProps) {
  return (
    <figure className="flex h-[250px] w-[390px] flex-col gap-1 sm:h-[300px] sm:w-[600px] sm:gap-3 lg:h-[500px] lg:w-[800px]">
      <DoubleImagesCard
        leftImage={leftFirstImage}
        rightImage={rightFirstImage}
      />

      <DoubleImagesCard
        leftImage={leftSecondImage}
        rightImage={rightSecondImage}
      />
    </figure>
  );
}
