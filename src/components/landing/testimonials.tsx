
"use client";

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials: any[] = [];

const Testimonials = () => {
  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <section className="py-20 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-4">Praised by Wealth-Builders</h2>
        <p className="text-muted-foreground mb-12">
          Don't just take our word for it. Here's what our members have to say about their journey with Opulex.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card className="h-full bg-secondary/50 border-primary/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="portrait" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonials;
