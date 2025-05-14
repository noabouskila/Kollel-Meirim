'use client';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


export default function CarouselImage() {
    return (
        <section className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <Carousel autoPlay interval={3000} infiniteLoop>
            <div>
              <Image src="/KOLLEL1.jpeg" alt="Étude 1" width={600} height={400} className="object-cover w-full h-full" />
            </div>
            <div>
              <Image src="/KOLLEL2.jpeg" alt="Étude 2" width={600} height={400} className="object-cover w-full h-full" />
            </div>
            <div>
              <Image src="/KOLLEL3.jpeg" alt="Étude 3" width={600} height={400} className="object-cover w-full h-full" />
            </div>
            <div>
              <Image src="/KOLLEL4.jpeg" alt="Étude 4" width={600} height={400} className="object-cover w-full h-full" />
            </div>
          </Carousel>
      </section>
    );
}