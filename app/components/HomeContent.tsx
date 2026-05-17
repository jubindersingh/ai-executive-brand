"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-8 py-5 border-b border-zinc-800 backdrop-blur sticky top-0 bg-zinc-950/70">
        <h1 className="font-semibold tracking-wide">AI Strategy Leader</h1>
        <div className="flex gap-6 text-sm text-zinc-300">
          <Link href="#experience">Experience</Link>
          <Link href="#impact">Impact</Link>
          <Link href="#insights">Insights</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>

      {/* HERO */}
      <section className="text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          AI Strategy. Enterprise Growth. Transformation at Scale.
        </motion.h1>

        <p className="mt-6 text-zinc-300 max-w-3xl mx-auto text-lg">
          Senior enterprise leader specializing in AI transformation, GTM strategy, and
          Fortune 500 growth initiatives across consulting and SaaS ecosystems.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#experience" className="bg-white text-black px-5 py-2 rounded-md">
            View Experience
          </a>
          <a href="#contact" className="border border-zinc-600 px-5 py-2 rounded-md">
            Contact
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            ["$10M+", "Enterprise Portfolio Managed"],
            ["14%", "Cost Savings Identified"],
            ["40+", "Fortune 500 Accounts"],
          ].map(([val, label]) => (
            <div
              key={val}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900"
            >
              <h3 className="text-3xl font-bold">{val}</h3>
              <p className="text-zinc-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Executive Experience</h2>

        <div className="space-y-6">
          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900">
            <h3 className="font-semibold">Senior Strategic Enterprise Account Manager</h3>
            <p className="text-zinc-400">HireEZ — $10M+ portfolio across Fortune 500 accounts</p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900">
            <h3 className="font-semibold">Junior Engagement Manager</h3>
            <p className="text-zinc-400">McKinsey & Company — AI transformation & GTM strategy</p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900">
            <h3 className="font-semibold">Enterprise Sales Leadership</h3>
            <p className="text-zinc-400">Led $20M+ revenue growth initiatives across SaaS & industrial clients</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Business Impact</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900">
            <h3 className="font-semibold">AI Deal Scoring System</h3>
            <p className="text-zinc-400 mt-2">
              Built ML-powered decision framework improving enterprise deal prioritization.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900">
            <h3 className="font-semibold">Procurement Transformation</h3>
            <p className="text-zinc-400 mt-2">
              Delivered 14% cost reduction through AI-driven sourcing optimization.
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">AI & Strategy Insights</h2>

        <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900">
          <h3 className="font-semibold">AI in Enterprise Sales</h3>
          <p className="text-zinc-400 mt-2">
            Exploring how AI is transforming pipeline generation, account planning, and enterprise GTM motions.
          </p>
          <p className="text-sm text-zinc-500 mt-4">
            (Upgrade: connect MDX blog or Notion CMS for live publishing)
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
        <p className="text-zinc-400 mt-4">
          Open to AI strategy, GTM leadership, and transformation roles.
        </p>

        <div className="mt-6 space-y-2 text-zinc-300">
          <p>Email: jubindersingh@email.com</p>
          <p>LinkedIn: linkedin.com/injubindersingh/</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        Built for executive visibility • Optimized for AI & recruiter search
      </footer>
    </div>
  );
}