import React from "react"; import { ShieldCheck, Globe2, BadgeCheck, Mail, ExternalLink, AlertTriangle } from "lucide-react"; import { motion } from "framer-motion";

export default function TradeIotaLandingPage() { const useCases = [ "Trade finance platform", "Digital trade marketplace", "RWA tokenization brand", "Supply chain verification", "Web3 trading portal", "Enterprise DLT product" ];

return ( <main className="min-h-screen bg-slate-950 text-white"> <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_30%)]" /> <div className="relative mx-auto max-w-6xl"> <nav className="mb-20 flex items-center justify-between"> <div className="flex items-center gap-2 text-lg font-bold tracking-tight"> <Globe2 className="h-6 w-6 text-sky-400" /> TRADE.IOTA </div> <a
href="mailto:your-email@example.com?subject=Offer%20for%20trade.iota"
className="rounded-full border border-sky-400/40 px-5 py-2 text-sm font-semibold text-sky-200 transition hover:bg-sky-400 hover:text-slate-950"
> Make an Offer </a> </nav>

<div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
            <BadgeCheck className="h-4 w-4" />
            Premium Web3 Domain For Sale
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Own the domain <span className="text-sky-400">trade.iota</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            A short, memorable domain name for builders in digital trade, tokenization, supply chain, and Web3 infrastructure.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:your-email@example.com?subject=Offer%20for%20trade.iota"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:bg-sky-300"
            >
              Contact Seller <Mail className="h-5 w-5" />
            </a>
            <a
              href="#compliance"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Compliance Notice <ShieldCheck className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur"
        >
          <div className="rounded-[1.5rem] border border-sky-400/20 bg-slate-900 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Domain Asset</p>
            <div className="mt-5 rounded-2xl bg-slate-950 p-6 text-center">
              <p className="text-4xl font-black tracking-tight sm:text-5xl">trade.iota</p>
              <p className="mt-3 text-slate-400">Simple. Direct. Web3-ready.</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-400">Category</p>
                <p className="mt-1 font-bold">Digital Trade</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-400">Status</p>
                <p className="mt-1 font-bold text-sky-300">For Sale</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  <section className="px-6 py-16 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-black sm:text-4xl">Potential use cases</h2>
      <p className="mt-4 max-w-2xl text-slate-300">
        The buyer may use the domain for a wide range of lawful technology, trading, or digital infrastructure projects.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/10 text-sky-300">
              <ExternalLink className="h-5 w-5" />
            </div>
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="compliance" className="px-6 py-16 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-6xl rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-8">
      <div className="flex flex-col gap-5 md:flex-row">
        <AlertTriangle className="h-8 w-8 shrink-0 text-amber-300" />
        <div>
          <h2 className="text-2xl font-black text-amber-100">Important PH SEC Compliance Notice</h2>
          <p className="mt-4 leading-8 text-slate-200">
            This page advertises the possible sale of a domain name only. It is not an investment solicitation, securities offering, token sale, crowdfunding offer, lending product, exchange service, broker/dealer service, or promise of profit. No equity, shares, dividends, yield, ownership in a company, or financial returns are being offered. Any buyer is responsible for independent legal, tax, and regulatory review before using the domain for any business activity.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="px-6 py-20 text-center sm:px-10 lg:px-20">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-4xl font-black">Interested in acquiring trade.iota?</h2>
      <p className="mt-5 text-slate-300">
        Send your inquiry or offer. Serious buyers only.
      </p>
      <a
        href="mailto:your-email@example.com?subject=Offer%20for%20trade.iota"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-950 transition hover:bg-sky-200"
      >
        Make an Offer <Mail className="h-5 w-5" />
      </a>
    </div>
  </section>

  <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
    © {new Date().getFullYear()} trade.iota domain sale page. Domain sale only. Not affiliated with, endorsed by, or representing any third-party organization unless expressly stated.
  </footer>
</main>

); }
