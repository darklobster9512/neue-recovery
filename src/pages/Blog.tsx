import { Section } from "@/components/ui/section";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: "krypto-betrugsopfer-bekommt-869-bitcoin-zurueck",
      title: "Krypto Betrugsopfer bekommt 8,69 Bitcoin zurück",
      excerpt: "Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025).",
      image: "/lovable-uploads/ab82bf83-5ca8-46b3-83b4-5cb6f9c16646.png",
      date: "7. Juli 2025",
      readTime: "8 min",
      tags: ["CyberCrime", "Kryptowährung", "Betrugsbekämpfung"]
    },
    {
      id: "ceo-fraud-und-ueberweisungsbetrug",
      title: "CEO-Fraud und Überweisungsbetrug",
      excerpt: "Was tun bei Falschüberweisung nach gefälschten E-Mails? Professionelle Betrugsmasche mit gezielten Angriffen auf Unternehmen.",
      image: "/lovable-uploads/e6fcfe46-5300-4b17-bafe-fda583555ddc.png",
      date: "16. Juli 2025",
      readTime: "6 min",
      tags: ["CyberCrime", "CEO-Fraud", "Überweisungsbetrug"]
    },
    {
      id: "ogh-kreditgebuehr-unzulaessig",
      title: "Kreditbearbeitungsgebühren unzulässig",
      excerpt: "OGH-Urteil ermöglicht Rückforderung. In welchen Fällen Sie die bereits bezahlte Bearbeitungsgebühren zurückfordern können.",
      image: "/lovable-uploads/80e2e160-2ba5-459b-b753-58265ea0882e.png",
      date: "7. Juli 2025",
      readTime: "6 min",
      tags: ["Verbraucherrecht", "Bankrecht", "OGH-Urteil"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section className="py-20 lg:py-32 relative overflow-hidden h-[50vh] flex items-center bg-gray-800">
        <div className="absolute inset-0 w-full h-full" style={{ top: '-64px', height: 'calc(100% + 64px)' }}>
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{width:"177.78vh", height:"calc(100vh + 64px)", minWidth:"100%", minHeight:"calc(100% + 64px)"}}
            aria-label="Crypto Background Video"
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span> & Rechtsnews
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Aktuelle Fälle, Rechtsentwicklungen und Expertenwissen zu Kryptowährungen und CyberCrime
            </p>
          </div>
        </div>
      </Section>

      {/* Blog Posts Grid - 3 Columns */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="group relative h-[400px] flex flex-col">
                  {/* Direct blog post layout - no card background */}
                  <Link to={`/blog-post/${post.id}`} className="block h-full flex flex-col">
                    {/* Image Section - Exactly 50% */}
                    <div className="relative h-1/2 overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Text Section - Exactly 50% */}
                    <div className="h-1/2 p-3 flex flex-col justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h2 className="text-base lg:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div>
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Read More Link */}
                        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                          <span>Artikel lesen</span>
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Blog;