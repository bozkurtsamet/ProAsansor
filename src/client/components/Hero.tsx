import ProAsansorGalleryPhoto1 from "../assets/ProAsansorGalleryPhoto1.jpeg";
import ProAsansorGalleryPhoto2 from "../assets/ProAsansorGalleryPhoto2.jpeg";

import Slider from "./Slider";

export interface Photos {
  images: string[];
}

function Hero() {
  const GalleryPhoto: Photos = {
    images: [ProAsansorGalleryPhoto1, ProAsansorGalleryPhoto2],
  };
  return (
    <div>
      <Slider images={GalleryPhoto.images} />
    </div>
  );
}

export default Hero;
