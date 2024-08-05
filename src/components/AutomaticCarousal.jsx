import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Define your image data
const imagesData = [
  { title: "Image 1", img: "/shop/1.jpg" },
  { title: "Image 2", img: "/shop/2.jpg" },
  { title: "Image 3", img: "/shop/3.jpg" },
  { title: "Image 4", img: "/shop/4.jpg" },
  { title: "Image 5", img: "/shop/5.jpg" },
];

export function AutomaticCarousal() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {imagesData.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6 relative">
                    <Image
                      src={image.img}
                      alt={image.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
