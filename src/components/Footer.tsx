const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Crisis Hotlines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mental Health Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Self-Care Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Become a Volunteer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Join as Professional</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong className="text-foreground">Emergency:</strong> If you're in crisis, call 988 (Suicide & Crisis Lifeline) or text HOME to 741741
          </p>
          <p>© 2024 MindConnect. Supporting mental health, one conversation at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
