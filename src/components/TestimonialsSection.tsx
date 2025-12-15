import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  role: string;
  story: string;
  rating: number;
  month: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    initials: "SM",
    role: "Connected with Volunteer",
    story: "I was going through a really dark time and did not know where to turn. Finding someone who would just listen without judgment changed everything for me. The volunteer I spoke with was so compassionate and helped me see that I was not alone. Three months later, I am in a much better place.",
    rating: 5,
    month: "March 2025",
  },
  {
    id: 2,
    name: "James K.",
    initials: "JK",
    role: "Anonymous Peer Support",
    story: "As someone who struggles with anxiety, talking to others who truly understand what it feels like has been incredibly validating. The anonymous chat gave me the courage to open up without fear. I have made real connections and learned coping strategies that actually work.",
    rating: 5,
    month: "February 2025",
  },
  {
    id: 3,
    name: "Maria L.",
    initials: "ML",
    role: "Professional Therapy",
    story: "After years of putting it off, I finally reached out for professional help through this platform. My therapist has been amazing and the convenience of online sessions made it so much easier to commit. I wish I had done this sooner. My relationships and work life have improved dramatically.",
    rating: 5,
    month: "January 2025",
  },
  {
    id: 4,
    name: "Alex T.",
    initials: "AT",
    role: "Crisis Support",
    story: "During my darkest moment, the SOS button literally saved my life. Within minutes, I was connected to someone who talked me through my crisis and helped me get the emergency support I needed. I am forever grateful for this service and the caring people behind it.",
    rating: 5,
    month: "December 2024",
  },
  {
    id: 5,
    name: "Rachel P.",
    initials: "RP",
    role: "Connected with Volunteer",
    story: "Being a college student dealing with depression, I needed someone to talk to but could not afford therapy. The verified volunteers here are incredible - they really care and have the training to help. I finally feel heard and understood. This platform gave me hope when I had none.",
    rating: 5,
    month: "April 2024",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Stories of Hope & Healing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who found support and connection through our platform.
            Names have been changed to protect privacy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-6 h-full flex flex-col bg-card hover:shadow-lg transition-all duration-300 border-border">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {testimonial.story}
                    </p>

                    <div className="mt-auto space-y-4">
                      <StarRating rating={testimonial.rating} />
                      
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 bg-primary/10">
                          <AvatarFallback className="text-primary font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                        {testimonial.month}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="p-6 rounded-lg bg-accent/30">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground"><strong>Satisfaction Rate</strong></p>
            </div>
            <div className="p-6 rounded-lg bg-accent/30">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-sm text-muted-foreground"><strong>Average Rating</strong></p>
            </div>
            <div className="p-6 rounded-lg bg-accent/30">
              <div className="text-3xl font-bold text-primary mb-2">30K+</div>
              <p className="text-sm text-muted-foreground"><strong>Success Stories</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
