import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { certificates as defaultCertificates, type Certificate } from "@/data/certificates";

interface CertificatesProps {
  title?: string;
  images?: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ title = "Certificates", images }) => {
  const items = images && images.length > 0 ? images : defaultCertificates;

  return (
    <aside aria-label="Certificates slider" className="space-y-4">
      <h3 className="text-xl font-semibold font-heading text-primary">{title}</h3>
      <Card className="p-2">
        <Carousel className="w-full">
          <CarouselContent>
            {items.map((item, idx) => (
              <CarouselItem key={idx} className="basis-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto rounded-md"
                />
                {item.caption && (
                  <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between mt-2">
            <CarouselPrevious aria-label="Previous certificate" />
            <CarouselNext aria-label="Next certificate" />
          </div>
        </Carousel>
      </Card>
    </aside>
  );
};

export default Certificates;
