import { Carousel } from "../utils/material";
import Image from "next/image";

const Item = ({ src, alt }: { src: string; alt: string }) => (
  <div className="h-screen w-full">
    <Image
      src={src}
      alt={alt}
      width={4000}
      height={4000}
      className="h-full w-full object-cover"
    />
  </div>
);

export function MyCarousel() {
  return (
    <Carousel autoplay autoplayDelay={5000} loop className="rounded-xl">
        <Item src="/banner-sp-site-v3.jpg" alt="image 1" />
        <Item src="/banner-home.jpg" alt="image 2" />
        <Item src="/banner-acqio-mais-desktop.jpg" alt="image 3" />
        <Item src="/banner-acqio-link-desktop-v2.jpg" alt="image 4" />
        <Item src="/banner-site-v4.jpg" alt="image 5" />
    </Carousel>
  );
}
