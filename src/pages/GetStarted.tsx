import { CheckCircle2, Heart, ArrowRight, Shield, Users, Clock, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GetStarted = () => {
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
      name: "Dr. Sarah Johnson",
      role: "Clinical Director",
      bio: "Licensed clinical psychologist with 15+ years in mental health care. Passionate about making therapy accessible to everyone.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Tech entrepreneur with a mission to use technology for social good. Previously worked on healthcare platforms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      bio: "Mental health advocate with lived experience. Trained peer support specialist dedicated to creating safe spaces.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "James Anderson",
      role: "Operations Lead",
      bio: "Healthcare operations specialist with 10+ years of experience in building accessible and scalable care systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Priya Patel",
      role: "Research Director",
      bio: "Mental health researcher focused on evidence-based interventions. Published author in peer-reviewed journals.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Alex Turner",
      role: "Design Lead",
      bio: "UX designer specializing in accessible design. Believes technology should be intuitive and welcoming for all.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
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
        <div className="mb-16">
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
