import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Mail,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import bg from "./assets/trade-bg.png"; // 1️⃣ import the background image

export default function App() {
  const sellerEmail = "aiagent@ethermail.io";

  const useCases = [
    "Digital trade platform",
    "Trade finance portal",
    "Supply-chain verification",
    "RWA tokenization brand",
    "Web3 marketplace",
    "Enterprise DLT product",
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white relative">
      {/* Hero with background image */}
      <section
        className="mx-auto max-w-7xl px-6 py-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,          // 2️⃣ set the background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay to improve contrast */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <nav className="relative z-10 flex items-center justify-between">
          <div className="text-xl font-bold tracking-wide">trade.iota</div>
          <a
            href={`mailto:${sellerEmail}?subject=Offer for trade.iota`}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950"
          >
            Make Offer
          </a>
        </nav>

        <div className="relative z-10 grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles size={16} />
              Premium domain sale
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Own the digital trade name for Web3.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              <strong>trade.iota</strong> is a clean, memorable domain name for
              digital trade, tokenization, supply‑chain infrastructure, and
              next‑generation commerce platforms.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${sellerEmail}?subject=Inquiry for trade.iota&body=Hello, I am interested in acquiring trade.iota.`}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950"
              >
                Contact Seller <ArrowRight size={18} />
              </a>
              <a
                href="#compliance"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
              >
                Compliance Notice
              </a>
            </div>
          </motion.div>

          <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3 text-cyan-200">
              <Globe2 />
              <span className="font-semibold">Domain Asset</span>
            </div>

            <div className="rounded-3xl bg-slate-950/70 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Available
              </p>
              <h2 className="mt-3 text-4xl font-black">trade.iota</h2>
              <p className="mt-4 text-slate-300">
                Simple. Direct. Brandable. Built for serious digital trade
                infrastructure.
              </p>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <BadgeCheck className="text-cyan-300" size={18} />
                Short, premium, memorable name
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="text-cyan-300" size={18} />
                Strong keyword: trade
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="text-cyan-300" size={18} />
                Suitable for lawful Web3 and enterprise use
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections remain unchanged */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        {/* … use cases … */}
      </section>
      <section id="compliance" className="mx-auto max-w-5xl px-6 py-16">
        {/* … compliance notice … */}
      </section>
      <section className="px-6 pb-20">
        {/* … inquiry section … */}
      </section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} trade.iota. Domain sale only. Not affiliated
        with or endorsed by IOTA unless expressly stated.
      </footer>
    </main>
  );
}
