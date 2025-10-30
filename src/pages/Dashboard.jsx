import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiSolidSave } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  // const API_KEY = "AIzaSyDJVNIRhZk-CtvPKIPBTfLoxWDPpTfEpHQ";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [form, setForm] = useState({
    purpose: "",
    tone: "",
    recipientType: "",
    yourName: "",
    extraNote: "",
  });

  const [loading, setLoading] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Compact Gemini Email Generator
  const generateEmail = async () => {
    if (!form.purpose || !form.tone || !form.recipientType || !form.yourName) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    const prompt = `
Write a short, ${form.tone.toLowerCase()} and professional email for the purpose: "${form.purpose}". 
It should be addressed to a ${form.recipientType}. 
Sign the email as ${form.yourName}. 
${form.extraNote ? `Additional context: ${form.extraNote}` : ""}
Keep it clear, natural and impressive.
    `.trim();

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      const output =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response received.";
      setGeneratedEmail(output.trim());
      toast.success("Email Generated Successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!generatedEmail) return toast.error("No email to copy");
    navigator.clipboard.writeText(generatedEmail);
    toast.success("Copied to clipboard!");
  };

  const saveEmail = () => {
    if (!generatedEmail) return toast.error("No email to save");

    const prev = JSON.parse(localStorage.getItem("generatedEmails")) || [];
    const newEmail = {
      text: generatedEmail,
      date: new Date().toLocaleString(),
      formData: form,
    };
    localStorage.setItem("generatedEmails", JSON.stringify([newEmail, ...prev]));
    toast.success("Email saved!");
  };

  return (
  <div className="min-h-screen">
    <Navbar/>
      <div className="min-h-screen dark:bg-black text-black dark:text-white py-12">
      <motion.div
        className="max-w-5xl mx-auto mt-12 px-4 grid lg:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* --- LEFT FORM --- */}
        <motion.div
          className="bg-gradient-card border border-border rounded-2xl p-6 shadow-soft"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            ✨ Generate Professional Email
          </h2>

          <div className="space-y-4">
            <select
              name="purpose"
              onChange={handleChange}
              className="w-full p-3 border border-border rounded-xl bg-transparent focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Purpose</option>
              <option>Job Application</option>
              <option>Internship Request</option>
              <option>Follow Up</option>
              <option>Thank You</option>
              <option>Collaboration</option>
            </select>

            <select
              name="tone"
              onChange={handleChange}
              className="w-full p-3 border border-border rounded-xl bg-transparent focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Tone</option>
              <option>Formal</option>
              <option>Friendly</option>
              <option>Polite</option>
              <option>Enthusiastic</option>
            </select>

            <select
              name="recipientType"
              onChange={handleChange}
              className="w-full p-3 border border-border rounded-xl bg-transparent focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Recipient</option>
              <option>HR / Recruiter</option>
              <option>Professor</option>
              <option>Manager</option>
              <option>Developer</option>
            </select>

            <input
              type="text"
              name="yourName"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-3 border border-border rounded-xl bg-transparent"
            />

            <textarea
              name="extraNote"
              placeholder="(Optional) Add any extra note or context"
              onChange={handleChange}
              rows="3"
              className="w-full p-3 border border-border rounded-xl bg-transparent"
            ></textarea>

            <motion.button
              onClick={generateEmail}
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl text-lg font-medium text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            >
              {loading ? "Generating..." : "Generate Email 🚀"}
            </motion.button>
          </div>
        </motion.div>

        {/* --- RIGHT OUTPUT --- */}
        <motion.div
          className="bg-gradient-card border border-border rounded-2xl p-6 shadow-soft"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">📩 AI Generated Email</h2>

          <div className="whitespace-pre-wrap bg-background p-4 rounded-xl border min-h-[250px]">
            {generatedEmail ? (
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                {generatedEmail}
              </pre>
            ) : (
              <p className="text-muted-foreground text-center py-16">
                Your generated email will appear here...
              </p>
            )}
          </div>

          <div className="flex gap-4 mt-6 justify-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-border hover:bg-primary/10"
            >
              <FaRegCopy className="text-primary" /> Copy
            </motion.button>

            <motion.button
              whileTap={{ rotate: 360 }}
              onClick={generateEmail}
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-border hover:bg-primary/10"
            >
              <BsArrowRepeat className="text-primary" /> Regenerate
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={saveEmail}
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-border hover:bg-primary/10"
            >
              <BiSolidSave className="text-primary" /> Save
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
  );
};

export default Dashboard;
