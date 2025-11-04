import { motion } from "framer-motion";
import { Target, Sparkles, Heart } from "lucide-react";
import Navigation from "../components/Navbar";
import aiVisual from "../assets/ai-visual.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-black dark:to-slate-950 text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-display mb-6">
            About <span className="gradient-text">MailMint</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            MailMint is built to simplify the way you communicate. 
            Create professional, meaningful emails instantly with the power of AI.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Empowering Communication with AI
            </h2>

            <p className="text-gray-400 mb-4 leading-relaxed">
  We believe that great communication should be effortless — not something that drains your time or energy. 
  Every message you send carries your intent, your personality, and your goals. 
  That’s why MailMint is built to help you communicate naturally and effectively, 
  blending cutting-edge AI with a deep understanding of human emotion and tone. 
  It doesn’t just write for you — it writes *with* you, learning your style and amplifying your voice.
</p>

<p className="text-gray-400 leading-relaxed">
  Whether you're reaching out to potential clients, applying for your dream job, 
  or reconnecting with someone important, MailMint ensures your message strikes the perfect balance between clarity and authenticity. 
  Our AI crafts every word with care, helping you express yourself confidently — without losing the human touch. 
  Because at the end of the day, communication isn’t just about sending messages — it’s about creating meaningful connections.
</p>

          </motion.div>

          <motion.div
  initial={{ opacity: 0, scale: 0.9, y: 40 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative group"
>
  <motion.img
    src={aiVisual}
    alt="AI and Email Concept"
    className="rounded-2xl shadow-xl w-[80%] h-[70%] border border-border mx-auto group-hover:shadow-glow transition-all duration-500"
    initial={{ y: 20 }}
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Floating gradient orb (animated glow) */}
  <motion.div
    className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl opacity-80"
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.6, 0.9, 0.6],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Soft rotating highlight ring for depth */}
  <motion.div
    className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none"
    animate={{
      rotate: [0, 2, -2, 0],
      opacity: [0.5, 0.7, 0.5],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

        </div>

        {/* Values Section (Short & Stylish) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gradient-card border border-border rounded-3xl p-10 shadow-soft"
        >
          <Heart className="w-10 h-10 text-primary mx-auto mb-4 animate-breathe" />
          <h3 className="text-2xl font-display mb-2">Built with Care & Purpose</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every feature in MailMint is crafted to help you save time and 
            express yourself better — blending AI intelligence with human creativity.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <p className="text-sm text-gray-500">Fast. Simple. Smart.</p>
          </div>
        </motion.div> */}
      </main>
        <Footer />
    </div>
  );
};

export default About;
