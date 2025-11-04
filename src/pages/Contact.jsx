import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1bec1e31-f1d4-4099-ab61-5ee9087820e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message was sent successfully!",
        icon: "success",
        background: "#0a0a0a",
        color: "#fff",
        confirmButtonColor: "#6366f1",
      });
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navigation />

      {/* Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display mb-4">
              Let’s Keep in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or just want to say hi? We’d love to
              hear from you!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-card border border-border rounded-2xl p-8 shadow-soft"
            >
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="font-medium text-sm text-muted-foreground mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John"
                      className="w-full p-3 border border-border rounded-xl bg-transparent focus:ring-2 focus:ring-primary text-black transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-medium text-sm text-muted-foreground mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Doe"
                      className="w-full p-3 rounded-lg bg-transparent border border-border focus:ring-2 focus:ring-primary text-black transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-medium text-sm text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full p-3 rounded-lg bg-transparent border border-border focus:ring-2 focus:ring-primary text-black transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-medium text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Your message..."
                    className="w-full p-3 rounded-lg bg-transparent border border-border focus:ring-2 focus:ring-primary text-black h-32 resize-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display mb-3">Direct Contact</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer to email us directly? No problem.
                </p>
                <a
                  href="mailto:hello@genemail.com"
                  className="text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  csayush27@gmail.com
                </a>
              </div>

              <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display mb-3">Quick Response</h3>
                <p className="text-muted-foreground">
                  We usually reply within 24 hours — your feedback helps make
                  GenEmail even better.
                </p>
              </div>

              <div className="bg-gradient-card border border-border rounded-2xl p-6 shadow-soft text-center">
                <p className="text-sm text-muted-foreground italic">
                  “Real people. Real replies. Real fast.”
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
