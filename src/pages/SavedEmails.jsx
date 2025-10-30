import React, { useEffect, useState } from "react";
import { Mail, Trash2, Copy, Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import Navigation from "../components/Navbar"; // ✅ Navbar Added

const SavedEmails = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("generatedEmails")) || [];
    setEmails(saved.reverse());
  }, []);

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard");
  };

  const handleDelete = (indexToRemove) => {
    const updated = emails.filter((_, i) => i !== indexToRemove);
    setEmails(updated);
    localStorage.setItem("generatedEmails", JSON.stringify(updated.reverse()));
    toast.success("Email deleted");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-black dark:to-slate-950 text-foreground">
      {/* ✅ Navbar */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Saved Emails</h1>
          <p className="text-muted-foreground text-lg">
            Review or reuse your generated emails anytime.
          </p>
        </motion.div>

        {/* No Saved Emails */}
        {emails.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <Mail className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground mb-6">
              No saved emails yet
            </p>
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition"
            >
              Generate New Email
            </button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {emails.map((email, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                {/* Date + Actions */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {email.Date || new Date().toLocaleDateString("en-US")}
                  </div>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(email.text);
                      }}
                      className="p-2 hover:bg-muted rounded-lg"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(index);
                      }}
                      className="p-2 hover:bg-destructive/20 rounded-lg text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Email Content */}
                <pre
                  className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90 max-h-48 overflow-hidden"
                  onClick={() => setSelectedEmail(email.text)}
                >
                  {email.text}
                </pre>

                {email.text.length > 300 && (
                  <p
                    className="mt-2 text-xs text-primary underline cursor-pointer"
                    onClick={() => setSelectedEmail(email.text)}
                  >
                    Click to view full email
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Full Email Modal */}
      <AnimatePresence>
        {selectedEmail && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 max-w-3xl w-[90%] max-h-[80vh] overflow-y-auto shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedEmail(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl font-semibold mb-4">Full Email Content</h2>
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                {selectedEmail}
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SavedEmails;
