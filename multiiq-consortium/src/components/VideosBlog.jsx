import React from "react";
import { Card, CardContent } from "./ui/card";
import { Play } from "lucide-react";

const VideosBlog = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding CMHC MLI Select Program",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      duration: "8:45",
      type: "video",
    },
    {
      id: 2,
      title: "5 Benefits of Multifamily Investment",
      thumbnail:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      duration: "6:20",
      type: "video",
    },
    {
      id: 3,
      title: "How to Build Wealth Through Real Estate",
      thumbnail:
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800",
      duration: "10:15",
      type: "video",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Maximizing ROI with 50-Year Amortization",
      excerpt:
        "Discover how extended amortization periods can significantly improve your cash flow and investment returns.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      date: "Nov 10, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Why Multifamily is the Smart Investment Choice",
      excerpt:
        "Learn why savvy investors are choosing multifamily properties backed by government programs for stable returns.",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
      date: "Nov 8, 2025",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Understanding Your Investment Timeline",
      excerpt:
        "A comprehensive guide to what you can expect from purchase to positive cash flow in your first year.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      date: "Nov 5, 2025",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Videos Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educational Videos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch our expert insights on multifamily investing and CMHC
              financing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:border-gold"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy/60 flex items-center justify-center group-hover:bg-navy/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-navy fill-navy" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-navy/90 text-gold px-3 py-1 rounded text-sm font-semibold">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Insights
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay informed with our latest articles on real estate investment
              strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:border-gold"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
                  <button className="text-gold font-semibold hover:text-gold-light transition-colors">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosBlog;
