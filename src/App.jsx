import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Copy,
  ExternalLink,
  Globe2,
  Mail,
  Scale,
  ShieldCheck,
  Sparkles,
  Link as LinkIcon,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

import bg from "./assets/trade-bg.png";
import hero from "./assets/hero.png";
import iotaLogo from "./assets/iota-logo.png";

export default function App() {
  const sellerEmail = "your-email@example.com";

  const tradeportUrl = "https://tradeport.xyz/domain/trade.iota";
  const iotaNamesUrl = "https://iotanames.com";

  const slides = [bg, hero];
  const [activeSlide, setActiveSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const copyDomain = async () => {
    await navigator.clipboard.writeText("trade.iota");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const useCases = [
    "Digital trade platform",
    "Trade finance portal",
    "Supply-chain verification",
    "RWA tokenization brand",
    "Web3 marketplace",
    "Enterprise DLT product",
  ];

  const faqs = [
    {
      q: "What is trade.iota?",
      a: "trade.iota is a premium IOTA domain name positioned for digital trade, Web3 commerce, supply-chain, and tokenization use cases.",
    },
    {
      q: "Is this an investment offer?",
      a: "No. This page only advertises the possible sale of a domain name. It does not offer tokens, yield, equity, securities, or financial returns.",
    },
    {
      q: "Where can I view the marketplace listing?",
      a: "You can open the TradePort marketplace link from the buttons on this page.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={iotaLogo} alt="IOTA logo" className="h-8 w-8" />
            <span className="text-xl font-black tracking-wide">trade.iota</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={iotaNamesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-200"
            >
              <LinkIcon size={15} />
              IOTA Names
            </a>

            <a
              href={tradeportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
            >
              TradePort
              <ExternalLink size={15} />
            </a>

            <a
              href={`mailto:${sellerEmail}?subject=Offer for trade.iota`}
              className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950"
            >
              Make Offer
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 py-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
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
              digital trade, tokenization, supply-chain infrastructure, and
              next-generation commerce platforms.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${sellerEmail}?subject=Inquiry for trade.iota&body=Hello, I am interested in acquiring trade.iota.`}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:scale-105"
              >
                Contact Seller <ArrowRight size={18} />
              </a>

              <button
                onClick={copyDomain}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Copy size={18} />
                {copied ? "Copied!" : "Copy Domain"}
              </button>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm"
          >
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
              {[
                "Short, premium, memorable name",
                "Strong keyword: trade",
                "Suitable for lawful Web3 and enterprise use",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <BadgeCheck className="text-cyan-300" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-10 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide
                  ? "w-8 bg-cyan-300"
                  : "w-2.5 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

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
              <motion.div
                key={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 transition hover:border-cyan-300/50"
              >
                <ShieldCheck className="mb-4 text-cyan-300" />
                <h3 className="font-bold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 text-3xl font-black">FAQ</h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-bold"
              >
                {faq.q}
                <ChevronDown
                  className={`transition ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {openFaq === index && (
                <p className="px-5 pb-5 leading-7 text-slate-300">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-cyan-300 p-8 text-center text-slate-950">
          <Mail className="mx-auto mb-4" />
          <h2 className="text-3xl font-black">Acquire trade.iota</h2>
          <p className="mx-auto mt-3 max-w-2xl">
            Serious inquiries are welcome. Send your offer or view the domain on
            TradePort.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${sellerEmail}?subject=Offer for trade.iota`}
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white"
            >
              Submit Inquiry
            </a>

            <a
              href={tradeportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-950 px-6 py-3 font-bold text-slate-950"
            >
              View on TradePort <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} trade.iota. Domain sale only. Not
        affiliated with or endorsed by IOTA unless expressly stated.
      </footer>
    </main>
  );
}
