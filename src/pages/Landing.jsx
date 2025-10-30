import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import Navigation from "../components/Navbar";
import heroImage from "../assets/hero-bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        {/* Hero Content */}
        <div className="container relative z-10 px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-breathe">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                AI-Powered Email Assistant
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
              Write smarter,
              <span className="gradient-text"> not harder</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your AI sidekick that crafts and keeps your perfect emails.
              Generate personalized messages in seconds.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="flex items-center justify-center gap-2 text-lg px-8 py-6 rounded-xl bg-primary text-primary-foreground shadow-glow transition-all hover:scale-105 active:scale-95"
              >
                Start Generating
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-center gap-2 text-lg px-8 py-6 rounded-xl border border-border bg-transparent hover:bg-secondary/50 transition-all hover:scale-105 active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Why Choose MailMint?
            </h2>
            <p className="text-xl text-muted-foreground">
              Intelligent features for effortless communication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Generation",
                description:
                  "Smart algorithms create contextually perfect emails tailored to your needs and tone.",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description:
                  "Your data stays yours. All emails are encrypted and stored securely in your account.",
              },
              {
                icon: Clock,
                title: "Save Time",
                description:
                  "Generate professional emails in seconds. Focus on what matters while AI handles the writing.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-lift transition-all tilt-on-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-card rounded-3xl p-12 shadow-lift border border-border">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Ready to transform your inbox?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands who've made email writing effortless
            </p>
            <Link
              to="/dashboard"
              className="flex items-center justify-center gap-2 text-lg px-8 py-6 rounded-xl bg-primary text-primary-foreground shadow-glow animate-pulse-glow transition-all hover:scale-105 active:scale-95"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
