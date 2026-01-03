import { CheckCircle2, Heart, ArrowRight, Shield, Users, Clock, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const GetStarted = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      description: "Sign up with your email or social account. It only takes 30 seconds."
    },
    {
      number: "2",
      title: "Connect & Get Support",
      description: "Start talking with peers, volunteers, or licensed professionals."
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Private",
      description: "End-to-end encryption and HIPAA compliance"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed therapists and trained volunteers"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Support whenever you need it most"
    }
  ];

  const teamMembers = [
    {
        name: "Mr. Dilshan D Prasanna",
        role: "Project Manager/ Lead Developer",
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
        role: "UI/ UX Designer",
        bio: "UX designer specializing in accessible and user-friendly interfaces",
        image: "#"
    },
    {
      name: "Mr. Thevindu Sithujaya",
      role: "Front End Developer/ Security Specialist",
      bio: "Focused on building secure and user-friendly web applications.",
      image: "#"
    },
    {
      name: "Ms. Senithi Premaratne",
      role: "Front End Developer/ Quality Assurance",
      bio: "Ensures a seamless and bug-free user experience through meticulous testing.",
      image: "#"
    },
    {
      name: "Ms. Pasandi Nimsara",
      role: "NODANI",
      bio: "Mt sithanna ba adahaganna ba hithannawath ida na.",
      image: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
      {/* Header */}
      <div className="container px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 hover-scale group">
          <Heart className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
          <span className="text-xl font-bold text-foreground">Project Anon</span>
        </Link>
      </div>

      <div className="container px-4 py-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to Project Anon
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A safe, anonymous platform connecting people facing mental health challenges with compassionate support. 
            We're building a community where everyone can find help without judgment.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold shadow-lg">
            <CheckCircle2 className="h-5 w-5" />
            Launching Soon - Join Our Waitlist
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <CardHeader>
                <div className="inline-flex p-3 rounded-full bg-primary/10 w-fit mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div id="team" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of mental health professionals, tech experts, and advocates working together to create a safe space for everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-card/80 backdrop-blur-sm group">
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-3">
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

        {/* How to Get Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 text-white font-bold text-xl mb-4 shadow-lg shadow-primary/30">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-primary h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-2 border-primary/30 shadow-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community and take the first step towards better mental health. 
              Sign up now to get early access when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Need immediate help? Call the National Suicide Prevention Lifeline at <strong>988</strong> or 
          text HOME to <strong>741741</strong> for Crisis Text Line.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
