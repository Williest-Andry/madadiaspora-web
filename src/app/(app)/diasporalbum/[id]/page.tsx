// "use client";

// import Image from "next/image";
// import {
//   RowsPhotoAlbum,
//   type Photo,
//   type RenderImageContext,
//   type RenderImageProps,
// } from "react-photo-album";
// import { useAblumDetails } from "@/hooks/album/use-album";
// import { useParams } from "next/navigation";
// import { AlbumType } from "@/interfaces/album/album-types";

// function renderNextImage(
//   { alt = "", title, sizes }: RenderImageProps,
//   { photo, width, height }: RenderImageContext
// ) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         position: "relative",
//         aspectRatio: `${width} / ${height}`,
//       }}
//     >
//       <Image
//         fill
//         src={photo}
//         alt={alt}
//         title={title}
//         sizes={sizes}
//         placeholder={"blurDataURL" in photo ? "blur" : undefined}
//       />
//     </div>
//   );
// }

// export default function DiasporAlbumDetails() {
//   const { id, type } = useParams();

//   const { album } = useAblumDetails(
//     id?.toString() ?? "",
//     (type as AlbumType) ?? "EVENT"
//   );


//   return (
   
//   );
// }
