import { CheckCircle2, Heart, ArrowRight, Shield, Users, Clock } from "lucide-react";
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
      title: "Choose Your Privacy Level",
      description: "Decide whether you want to remain anonymous or share your profile."
    },
    {
      number: "3",
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

        {/* How to Get Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary h-8 w-8" />
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
