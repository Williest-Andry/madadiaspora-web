import AlubmCenterLoader from "./album-center-loader";
import AlbumSideLoader from "./album-side-loader";

export default function AlbumLoader() {
  return (
    <div className="hidden gap-[20px] xl:flex">
      <AlbumSideLoader />
      <AlubmCenterLoader />
      <AlbumSideLoader />
    </div>
  );
}
