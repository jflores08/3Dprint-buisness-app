import { FC } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselSpacing: FC<{ websites: string[] }> = ({ websites }) => {
  return (
    <Carousel className=" max-w-sm">
      <CarouselPrevious />
      <CarouselContent className="-ml-1">
        {websites.map((website, index) => (
          <CarouselItem key={index} className="pl-1 w-100 h-600">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{website}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
export { CarouselSpacing };
