import { ImageType } from "@/interfaces/global";
import { getImageUrl } from "@/lib/get-image-url";
import Image from "next/image";

type OptionalProfileImageProps = {
  profile: ImageType | undefined;
  firstName: string;
  lastName: string;
};

export default function OptionalProfileImage({
  profile,
  firstName,
  lastName,
}: OptionalProfileImageProps) {
  return (
    <>
      {profile && profile.url ? (
        <Image
          src={getImageUrl(profile.url)}
          alt={profile?.name}
          fill
          className="rounded-[24px] object-cover text-center"
        />
      ) : (
        <div className="border-secondary bg-popover flex h-full w-full items-center justify-center rounded-[32px] border">
          <p className="text-title-xl text-secondary font-bold">
            {firstName[0]}
            {lastName[0]}
          </p>
        </div>
      )}
    </>
  );
}
