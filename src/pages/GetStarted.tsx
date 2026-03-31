import { CheckCircle2, Heart, ArrowRight, Shield, Users, Clock, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AuroraBackground from "@/components/AuroraBackground";import logo from "@/assets/Logo anora side full.png";import teamMember1 from "@/assets/team-member-1.jpeg";
import teamMember2 from "@/assets/team-member-2.jpeg";
import teamMember3 from "@/assets/team-member-3.jpeg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpeg";
import teamMember6 from "@/assets/team-member-6.jpeg";


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
        image: teamMember1
    },
    {
        name: "Ms. Oshadi Ranawaka",
        role: "UI/ UX Designer",
        bio: "UX designer specializing in accessible and user-friendly interfaces",
        image: teamMember2
    },
    {
        name: "Mr. Thusiru Kodithuwakku",
        role: "Back End Developer",
        bio: "Passionate about building scalable and secure backend systems",
        image: teamMember5
    },
    {
      name: "Ms. Senithi Premaratne",
      role: "Front End Developer/ Quality Assurance",
      bio: "Ensures a seamless and bug-free user experience through meticulous testing.",
      image: teamMember3
    },
    {
      name: "Mr. Thevindu Sithujaya",
      role: "Front End Developer/ Security Specialist",
      bio: "Focused on building secure and user-friendly web applications.",
      image: teamMember4
    },
    {
      name: "Ms. Pasandi Nimsara",
      role: "Front End Developer",
      bio: "Dedicated to creating engaging and intuitive user interfaces.",
      image: teamMember6
    }
  ];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <AuroraBackground />
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container px-4 mx-auto">
          <Link to="/" className="inline-block">
            <div className="px-5 py-3 rounded-full bg-white/20 backdrop-blur-xl shadow-sm border border-white/30 cursor-pointer group hover:shadow-md hover:bg-white/30 transition-all duration-300">
              <img src={logo} alt="anora" className="h-10 md:h-12 w-auto max-w-none object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>

      <div className="container relative z-10 px-4 py-12 max-w-6xl mx-auto pt-32">
        {/* Welcome Section */}
        <div className="text-center mb-16 animate-fade-in relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 tracking-tight drop-shadow-sm">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">anora</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            A safe, anonymous platform connecting people facing mental health challenges with compassionate support. 
            We're building a community where everyone can find help without judgment.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-foreground font-semibold shadow-sm hover:scale-105 transition-transform duration-300">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Launching Soon - Join Our Waitlist
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24 relative">
          {features.map((feature, index) => (
            <div key={index} className="p-8 md:p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 group">
              <div className="inline-flex p-4 rounded-2xl bg-white/30 backdrop-blur-md shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-white/40">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/75 font-medium text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div id="team" className="mb-24 scroll-mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 drop-shadow-sm">Meet Our Team</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
              A dedicated group of mental health professionals, tech experts, and advocates working together to create a safe space for everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="overflow-hidden rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                </div>
                <div className="p-8 relative z-10 -mt-24">
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-base text-foreground/80 mb-8 font-medium leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-3 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:scale-110">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="p-3 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Get Started */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 drop-shadow-sm">How to Get Started</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="p-8 lg:p-12 rounded-[3rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-primary to-indigo-500 text-white font-heading font-bold text-3xl mb-8 shadow-lg shadow-primary/30 -rotate-3 group-hover:rotate-0 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-xl text-foreground/75 font-medium leading-relaxed">{step.description}</p>
              </div>
            ))}
            {/* Arrow positioned between the two cards */}
            <ArrowRight className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/40 h-16 w-16 z-10" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-[100px] pointer-events-none"></div>
           <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground drop-shadow-sm tracking-tight">Ready to Begin?</h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Join our community and take the first step towards better mental health. 
              Sign up now to get early access when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button 
                size="lg" 
                className="text-xl px-10 py-8 rounded-full bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold"
              >
                Join Waitlist
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Link to="/">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-xl px-10 py-8 rounded-full bg-white/20 backdrop-blur-md text-foreground border-white/40 hover:bg-white/50 hover:text-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold shadow-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm md:text-base text-foreground/60 mt-16 font-medium">
          Need immediate help? Call the National Suicide Prevention Lifeline at <strong className="text-foreground">988</strong> or 
          text HOME to <strong className="text-foreground">741741</strong> for Crisis Text Line.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
