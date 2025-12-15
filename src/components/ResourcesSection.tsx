import { useState } from "react";
import { Book, FileText, Headphones, Phone, Play, Pause, ChevronRight, Globe, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const articles = [
  { id: 1, title: "Understanding Anxiety", category: "Anxiety", readTime: "5 min", description: "Learn about the signs, symptoms, and coping strategies for anxiety." },
  { id: 2, title: "Coping with Depression", category: "Depression", readTime: "7 min", description: "Practical steps to manage depression and find hope." },
  { id: 3, title: "Building Resilience", category: "Self-Care", readTime: "4 min", description: "Strengthen your mental resilience with proven techniques." },
  { id: 4, title: "Mindfulness Basics", category: "Mindfulness", readTime: "6 min", description: "An introduction to mindfulness and its benefits." },
  { id: 5, title: "Sleep & Mental Health", category: "Wellness", readTime: "5 min", description: "The connection between quality sleep and mental wellbeing." },
  { id: 6, title: "Stress Management", category: "Stress", readTime: "8 min", description: "Effective strategies to reduce and manage daily stress." },
];

const guides = [
  { id: 1, title: "Self-Care Workbook", pages: 24, format: "PDF", description: "A comprehensive guide to building daily self-care habits." },
  { id: 2, title: "Anxiety Relief Journal", pages: 30, format: "PDF", description: "Journaling prompts and exercises for managing anxiety." },
  { id: 3, title: "Mindfulness Starter Kit", pages: 18, format: "PDF", description: "Everything you need to begin your mindfulness journey." },
  { id: 4, title: "Crisis Coping Cards", pages: 12, format: "PDF", description: "Portable coping strategies for difficult moments." },
];

const meditations = [
  { id: 1, title: "Morning Calm", duration: "10:00", category: "Morning", isPlaying: false },
  { id: 2, title: "Anxiety Relief", duration: "15:00", category: "Anxiety", isPlaying: false },
  { id: 3, title: "Deep Sleep", duration: "20:00", category: "Sleep", isPlaying: false },
  { id: 4, title: "Stress Release", duration: "12:00", category: "Stress", isPlaying: false },
  { id: 5, title: "Body Scan", duration: "18:00", category: "Relaxation", isPlaying: false },
  { id: 6, title: "Gratitude Practice", duration: "8:00", category: "Positivity", isPlaying: false },
];

const hotlines = [
  { country: "United States", name: "988 Suicide & Crisis Lifeline", number: "988", available: "24/7" },
  { country: "United Kingdom", name: "Samaritans", number: "116 123", available: "24/7" },
  { country: "Canada", name: "Crisis Services Canada", number: "1-833-456-4566", available: "24/7" },
  { country: "Australia", name: "Lifeline Australia", number: "13 11 14", available: "24/7" },
  { country: "India", name: "iCall", number: "9152987821", available: "Mon-Sat 8am-10pm" },
  { country: "Germany", name: "Telefonseelsorge", number: "0800 111 0 111", available: "24/7" },
  { country: "France", name: "SOS Amitié", number: "09 72 39 40 50", available: "24/7" },
  { country: "Japan", name: "TELL Lifeline", number: "03-5774-0992", available: "24/7" },
];

const ResourcesSection = () => {
  const isVisible = useScrollReveal();
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Anxiety", "Depression", "Self-Care", "Mindfulness", "Wellness", "Stress"];
  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={isVisible.ref}
          className={`text-center mb-12 transition-all duration-700 ${isVisible.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1">
            Resources
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mental Health Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of articles, guides, meditations, and crisis support resources.
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              <span className="hidden sm:inline">Articles</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Guides</span>
            </TabsTrigger>
            <TabsTrigger value="meditations" className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              <span className="hidden sm:inline">Meditations</span>
            </TabsTrigger>
            <TabsTrigger value="hotlines" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Hotlines</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <ScrollArea className="w-full whitespace-nowrap pb-4">
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                    className="capitalize"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                      Read More 
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <Card 
                  key={guide.id}
                  className="group hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-20 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <FileText className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                        <CardDescription className="mt-1">{guide.description}</CardDescription>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge variant="outline">{guide.format}</Badge>
                          <span className="text-sm text-muted-foreground">{guide.pages} pages</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full group-hover:bg-primary/90">
                      Download Free Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="meditations" className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {meditations.map((meditation, index) => (
                <Card 
                  key={meditation.id}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    playingId === meditation.id ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => togglePlay(meditation.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        playingId === meditation.id 
                          ? 'bg-primary text-primary-foreground animate-pulse' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                      }`}>
                        {playingId === meditation.id ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5 ml-0.5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{meditation.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{meditation.category}</Badge>
                          <span className="text-sm text-muted-foreground">{meditation.duration}</span>
                        </div>
                      </div>
                    </div>
                    {playingId === meditation.id && (
                      <div className="mt-4">
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '35%' }} />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hotlines" className="space-y-6">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4">
                <p className="text-sm text-destructive font-medium">
                  If you're in immediate danger, please call your local emergency services immediately.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hotlines.map((hotline, index) => (
                <Card 
                  key={hotline.country}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-foreground">{hotline.country}</span>
                    </div>
                    <h4 className="text-sm text-muted-foreground mb-2">{hotline.name}</h4>
                    <a 
                      href={`tel:${hotline.number.replace(/\s/g, '')}`}
                      className="text-lg font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      {hotline.number}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {hotline.available}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
