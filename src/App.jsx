import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Mail,
  Scale,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Link as LinkIcon,
} from "lucide-react";
import { motion } from "framer-motion";

// Import the background image and the IOTA logo from the assets folder.
// Make sure these files exist in `src/assets` in your project.
import bg from "./assets/trade-bg.png";
import iotaLogo from "./assets/iota-logo.png";

export default function App() {
  // Update this email address to your preferred contact.
  const sellerEmail = "aiagent@ethermail.io";

  // List of example use cases for the domain.
  const useCases = [
    "Digital trade platform",
    "Trade finance portal",
    "Supply‑chain verification",
    "RWA tokenization brand",
    "Web3 marketplace",
    "Enterprise DLT product",
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white relative">
      {/* Navigation bar with IOTA logo, site name, links to iotanames.com and TradePort, and a contact button */}





<nav className="flex flex-wrap items-center justify-between gap-y-4 px-6 py-4">
  <div className="flex items-center gap-3">
    <img src={iotaLogo} alt="IOTA logo" className="w-8 h-8" />
    <span className="text-xl font-bold tracking-wide">trade.iota</span>
  </div>
  <div className="flex flex-wrap items-center gap-4">
    <a
      href="https://iotanames.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-cyan-300 hover:underline"
    >
      <LinkIcon size={16} />
      More IOTA names
    </a>
    <a
      href="https://tradeport.xyz/domain/trade.iota"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
    >
      View on TradePort
      <ExternalLink size={16} />
    </a>
    <a
      href={`mailto:${sellerEmail}?subject=Offer for trade.iota`}
      className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950"
    >
      Make Offer
    </a>
  </div>
</nav>









      {/* Hero section with a background image and call‑to‑action buttons */}
      <section
        className="relative overflow-hidden px-6 py-20 lg:px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left side: title, description, and call‑to‑action links */}
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
              {/* Contact seller call to action */}
              <a
                href={`mailto:${sellerEmail}?subject=Inquiry for trade.iota&body=Hello, I am interested in acquiring trade.iota.`}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950"
              >
                Contact Seller <ArrowRight size={18} />
              </a>
              {/* Link to compliance notice section */}
              <a
                href="#compliance"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
              >
                Compliance Notice
              </a>
            </div>
          </motion.div>
          {/* Right side: domain asset card */}
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

      {/* Use cases section */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Use cases
          </p>
          <h2 className="text-3xl font-black md:text-5xl">
            Built for serious digital brands
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
              >
                <ShieldCheck className="mb-4 text-cyan-300" />
                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance notice */}
      <section id="compliance" className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-8">
          <div className="mb-4 flex items-center gap-3 text-amber-200">
            <Scale />
            <h2 className="text-2xl font-black">Compliance Notice</h2>
          </div>
          <p className="leading-8 text-slate-200">
            This page advertises the possible sale of a domain name only. It is
            not an investment solicitation, securities offering, token sale,
            exchange service, broker/dealer service, crowdfunding offer, lending
            product, or promise of profit. No equity, shares, dividends, yield,
            tokens, or financial returns are being offered.
          </p>
        </div>
      </section>

      {/* Final call to action section */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-cyan-300 p-8 text-center text-slate-950">
          <Mail className="mx-auto mb-4" />
          <h2 className="text-3xl font-black">Acquire trade.iota</h2>
          <p className="mx-auto mt-3 max-w-2xl">
            Serious inquiries are welcome. Send your offer and preferred domain
            transfer process.
          </p>
          <a
            href={`mailto:${sellerEmail}?subject=Offer for trade.iota`}
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white"
          >
            Submit Inquiry
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} trade.iota. Domain sale only. Not
        affiliated with or endorsed by IOTA unless expressly stated.
      </footer>
    </main>
  );
}
