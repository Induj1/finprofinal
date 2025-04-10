
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { FadeInUp, SlideInRight, SlideInLeft } from '@/components/ui/Animation';

interface Banner {
  id: number;
  image: string;
  alt: string;
}

const EventBannerCarousel = () => {
  const banners: Banner[] = [
    { 
      id: 1, 
      image: "/lovable-uploads/indore.jpg", 
      alt: "FINPRO Indore Event" 
    },
    { 
      id: 2, 
      image: "/lovable-uploads/pune.jpg", 
      alt: "FINPRO Pune Event" 
    },
    { 
      id: 3, 
      image: "/lovable-uploads/blr.jpg", 
      alt: "FINPRO Bangalore Event" 
    },
    { 
      id: 4, 
      image: "/lovable-uploads/hyderabad.jpg", 
      alt: "FINPRO Hyderabad Event" 
    },
    { 
      id: 5, 
      image: "/lovable-uploads/bombay.jpg", 
      alt: "FINPRO Mumbai Event" 
    },
    { 
      id: 6, 
      image: "/lovable-uploads/delhi.jpg", 
      alt: "FINPRO Delhi Event" 
    }
  ];

  // Auto rotate settings
  const [api, setApi] = React.useState<any>();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  useEffect(() => {
    if (!api) return;
    
    // Auto rotate every 5 seconds
    const interval = setInterval(() => {
      api?.scrollNext();
    }, 5000);
    
    // Update current index when slide changes
    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    return () => {
      clearInterval(interval);
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <FadeInUp>
      <div className="w-full overflow-hidden">
        <Carousel
          opts={{ 
            loop: true,
            align: "start"
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={banner.id} className="md:basis-full">
                <div className="relative w-full">
                  {index % 2 === 0 ? (
                    <SlideInRight delay={100}>
                      <img 
                        src={banner.image} 
                        alt={banner.alt}
                        className="w-full h-[450px] object-cover rounded-md"
                      />
                    </SlideInRight>
                  ) : (
                    <SlideInLeft delay={100}>
                      <img 
                        src={banner.image} 
                        alt={banner.alt}
                        className="w-full h-[450px] object-cover rounded-md"
                      />
                    </SlideInLeft>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselPrevious className="hover:scale-110 transition-transform" />
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext className="hover:scale-110 transition-transform" />
          </div>
        </Carousel>
      </div>
    </FadeInUp>
  );
};

export default EventBannerCarousel;
