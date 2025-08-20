import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Opulex transformed my investment approach. The AI insights are a game-changer, providing clarity I've never had before.",
    name: 'Alexandra Chen',
    title: 'Venture Capitalist',
    avatar: 'AC',
    imgSrc: 'https://placehold.co/100x100.png',
  },
  {
    quote: "As someone who values security and performance, Opulex delivers on both fronts. The risk management tools are top-tier.",
    name: 'Benjamin Carter',
    title: 'Fintech Entrepreneur',
    avatar: 'BC',
    imgSrc: 'https://placehold.co/100x100.png',
  },
  {
    quote: "Finally, a platform that feels as sophisticated as the markets it navigates. The user experience is unparalleled.",
    name: 'Sophia Rodriguez',
    title: 'Private Equity Analyst',
    avatar: 'SR',
    imgSrc: 'https://placehold.co/100x100.png',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
       <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline">What Our Experts Say</h2>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Trusted by leading voices in finance and investment.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-secondary border-none h-full flex flex-col justify-between">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    <p className="italic text-lg font-body">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-4 mt-4">
                      <Avatar>
                        <AvatarImage src={testimonial.imgSrc} alt={testimonial.name} data-ai-hint="portrait" />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold font-headline">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.title}</p>
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
