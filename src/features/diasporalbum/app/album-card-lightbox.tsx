import AlbumCard from "./album-card";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { Album } from "@/interfaces/album/album-types";
import { mapToSlideImage } from "@/lib/mapper/album-mapper";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
type AlbumCardLightBoxProps = {
  data: Album;
};

export default function AlbumCardLightBox({ data }: AlbumCardLightBoxProps) {
  const [index, setIndex] = useState(false);

  const slides = data.images.map((image) =>
    mapToSlideImage(image, data.info.title, data.info.summary)
  );

  return (
    <>
      <AlbumCard data={data} onClick={() => setIndex(true)} />

      <Lightbox
        plugins={[Captions, Zoom, Fullscreen, Slideshow, Thumbnails]}
        open={index}
        close={() => setIndex(false)}
        slides={slides}
        zoom={{ supports: ["custom-slide"], maxZoom: 10 }}
        slideshow={{
          delay: 2000,
        }}
      />
    </>
  );
}
