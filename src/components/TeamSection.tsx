import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Mr. Dilshan D Prasanna",
    role: "Lead Developer",
    bio: "Tech entrepreneur with a mission to use technology for social good",
    image: "#"
  },
  {
    name: "Mr. Thusiru Kodithuwakku",
    role: "Back End Developer",
    bio: "Passionate about building scalable and secure backend systems",
    image: "#"
  },
  {
    name: "Ms. Oshadi Ranawaka",
    role: "Front End Designer",
    bio: "UX designer specializing in accessible and user-friendly interfaces",
    image: "#"
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
          
          {/* View All Card */}
          <Link to="/get-started#team">
            <Card
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm group cursor-pointer h-full flex items-center justify-center ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${teamMembers.length * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300">
                    <ArrowRight className="h-8 w-8 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">View All Team</h3>
                  <p className="text-sm text-muted-foreground">Meet all 6 team members</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
