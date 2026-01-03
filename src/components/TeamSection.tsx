import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Director",
    bio: "Licensed clinical psychologist with 15+ years in mental health care",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Tech entrepreneur passionate about digital mental health solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    bio: "Mental health advocate with lived experience in peer support",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "James Anderson",
    role: "Operations Lead",
    bio: "Healthcare operations specialist focused on accessible care",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  }
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of mental health professionals, tech experts, and advocates working together to create a safe space for everyone.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-card/80 backdrop-blur-sm group ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
