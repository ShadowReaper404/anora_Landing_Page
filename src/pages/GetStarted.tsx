import { CheckCircle2, Heart, ArrowRight, Shield, Users, Clock, Linkedin, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "@/assets/Logo anora side full.png";
import teamMember1 from "@/assets/team-member-1.jpeg";
import teamMember2 from "@/assets/team-member-2.jpeg";
import teamMember3 from "@/assets/team-member-3.jpeg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpeg";
import teamMember6 from "@/assets/team-member-6.jpeg";
import EmpathySection, { EmpathyCascade } from "@/components/EmpathySection";
import { LineArtDivider } from "@/components/LivingLineArt";

// ─── Data (unchanged) ──────────────────────────────────────────────────────────
const steps = [
  {
    number: "1",
    title: "Create Your Account",
    description: "Sign up with your email or social account. It only takes 30 seconds.",
  },
  {
    number: "2",
    title: "Connect & Get Support",
    description: "Start talking with peers, volunteers, or licensed professionals.",
  },
];

const features = [
  { icon: Shield, title: "Safe & Private",    description: "End-to-end encryption and HIPAA compliance" },
  { icon: Users,  title: "Expert Team",       description: "Licensed therapists and trained volunteers" },
  { icon: Clock,  title: "24/7 Available",    description: "Support whenever you need it most" },
];

const teamMembers = [
  { name: "Mr. Dilshan D Prasanna",    role: "Project Manager/ Lead Developer",            bio: "Tech entrepreneur with a mission to use technology for social good",                      image: teamMember1 },
  { name: "Ms. Oshadi Ranawaka",       role: "UI/ UX Designer",                            bio: "UX designer specializing in accessible and user-friendly interfaces",                     image: teamMember2 },
  { name: "Mr. Thusiru Kodithuwakku", role: "Back End Developer",                         bio: "Passionate about building scalable and secure backend systems",                           image: teamMember5 },
  { name: "Ms. Senithi Premaratne",   role: "Front End Developer/ Quality Assurance",     bio: "Ensures a seamless and bug-free user experience through meticulous testing.",             image: teamMember3 },
  { name: "Mr. Thevindu Sithujaya",   role: "Front End Developer/ Security Specialist",   bio: "Focused on building secure and user-friendly web applications.",                          image: teamMember4 },
  { name: "Ms. Pasandi Nimsara",      role: "Front End Developer",                        bio: "Dedicated to creating engaging and intuitive user interfaces.",                           image: teamMember6 },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

/** Warm, organic soft blob background – no aurora flashing */
const PageBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-40 -left-40  w-[500px] h-[500px] bg-secondary rounded-full filter blur-3xl opacity-50 animate-float-slow"  />
    <div className="absolute top-1/3 -right-32   w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-3xl opacity-60 animate-float-slower" />
    <div className="absolute -bottom-40 left-1/4 w-[460px] h-[460px] bg-secondary rounded-full filter blur-3xl opacity-40 animate-float-slow"  style={{ animationDelay: "5s" }} />
  </div>
);

/** Re-usable section heading block */
const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const GetStarted = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <PageBackground />

      {/* ── Sticky Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link to="/" className="inline-block">
            <div className="px-5 py-3 rounded-full bg-white shadow-sm border border-border/50 cursor-pointer group hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <img src={logo} alt="anora" className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
          <Link to="/" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* ── Welcome Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Decorative organic blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none animate-float-slow" />

        <div className="container px-4 mx-auto text-center max-w-4xl animate-fade-in">
          {/* Privacy pill – matches Hero */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 shadow-sm border border-primary/20">
            <Lock className="w-4 h-4" />
            <span>100% Private &amp; Anonymous</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Welcome to{" "}
            <span className="text-primary relative inline-block">
              anora
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            A safe, anonymous platform connecting people facing mental health challenges with compassionate support.
            We're building a community where everyone can find help without judgment.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white text-foreground font-semibold shadow-sm border border-border/60 hover:scale-105 transition-transform duration-300 cursor-default">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Launching Soon - Join Our Waitlist
          </div>
        </div>
      </section>

      {/* ╌╌╌ Ripple divider ╌╌╌ */}
      <LineArtDivider art="ripple" maxWidth={320} color="hsl(var(--primary))" strokeWidth={1.2} className="opacity-50" />

      {/* ── Features Grid ── */}
      <EmpathySection variant="rise" className="container px-4 mx-auto max-w-6xl mb-24">
        <SectionHeading title="" />
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-[2rem] bg-white border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground font-medium text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </EmpathySection>

      {/* ╌╌╌ Bloom divider ╌╌╌ */}
      <LineArtDivider art="bloom" maxWidth={120} color="hsl(var(--primary))" strokeWidth={1.2} className="opacity-50 my-4" />

      {/* ── Team Section ── */}
      <section id="team" className="container px-4 mx-auto max-w-6xl mb-24 scroll-mt-28">
        <EmpathySection variant="mist">
          <SectionHeading
            title="Meet Our Team"
            subtitle="A dedicated group of mental health professionals, tech experts, and advocates working together to create a safe space for everyone."
          />
        </EmpathySection>

        <EmpathyCascade stagger={100} variant="rise" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-[2rem] bg-white border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-secondary/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>

              {/* Info */}
              <div className="px-8 pb-8 -mt-10 relative z-10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6">{member.bio}</p>
                <div className="flex gap-3">
                  {[Linkedin, Mail].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white border border-border/60 hover:border-primary transition-all duration-300 shadow-sm hover:scale-110"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </EmpathyCascade>
      </section>

      {/* ╌╌╌ Wave divider ╌╌╌ */}
      <LineArtDivider art="wave" color="hsl(var(--primary))" strokeWidth={1.2} className="opacity-40 my-4" />

      {/* ── How to Get Started ── */}
      <EmpathySection variant="rise" className="container px-4 mx-auto max-w-6xl mb-24">
        <SectionHeading title="How to Get Started" />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group p-10 rounded-[2rem] bg-white border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-primary text-white font-heading font-bold text-2xl mb-8 shadow-lg shadow-primary/25 -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">{step.description}</p>
            </div>
          ))}
          {/* Arrow between the steps */}
          <ArrowRight className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/30 h-14 w-14 z-10" />
        </div>
      </EmpathySection>

      {/* ╌╌╌ Breath divider ╌╌╌ */}
      <LineArtDivider art="breath" maxWidth={130} color="hsl(var(--primary))" strokeWidth={1.0} className="opacity-50 my-4" />

      {/* ── Call to Action ── */}
      <EmpathySection variant="breathe" className="container px-4 mx-auto max-w-5xl mb-16">
        <div className="relative overflow-hidden rounded-[3rem] bg-secondary border border-border/60 shadow-sm px-10 py-16 md:px-20 md:py-24 text-center">
          {/* Organic blobs inside card */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold text-sm mb-8 shadow-sm border border-border/60">
              <Heart className="w-4 h-4 fill-primary" />
              Your journey starts here
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground tracking-tight mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join our community and take the first step towards better mental health.
              Sign up now to get early access when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                size="lg"
                className="text-xl px-10 py-8 rounded-full bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold"
              >
                Join Waitlist
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Link to="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-xl px-10 py-8 rounded-full bg-white text-foreground border-border hover:bg-secondary/80 hover:text-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold shadow-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </EmpathySection>

      {/* ── Footer note ── */}
      <p className="text-center text-sm md:text-base text-muted-foreground mt-4 mb-16 font-medium px-4">
        Need immediate help? Call the National Suicide Prevention Lifeline at{" "}
        <strong className="text-foreground">988</strong> or text HOME to{" "}
        <strong className="text-foreground">741741</strong> for Crisis Text Line.
      </p>
    </div>
  );
};

export default GetStarted;
