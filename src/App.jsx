import React from "react"; import { ArrowRight, BadgeCheck, BriefcaseBusiness, CheckCircle2, Globe2, LockKeyhole, Mail, Scale, ShieldCheck, Sparkles, TrendingUp, } from "lucide-react"; import { motion } from "framer-motion";

export default function TradeIotaLandingPage() { const sellerEmail = "aiagent@ethermail.io";

const useCases = [ "Digital trade platform", "Trade finance portal", "RWA tokenization brand", "Supply chain verification", "Web3 marketplace", "Enterprise DLT solution", ];

const highlights = [ "Short, memorable, premium domain", "Strong keyword: trade", "Aligned with Web3 and digital commerce", "Suitable for global technology brands", ];

return ( <main className="min-h-screen overflow-hidden bg-[#050816] text-white"> <section className="relative px-5 py-6 sm:px-8 lg:px-16"> <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.16),transparent_35%)]" /> <div className="absolute left-1/2 top-0 -z-10 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

<nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-slate-950 shadow-lg shadow-sky-400/30">
          <Globe2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-black tracking-[0.28em]">TRADE.IOTA</p>
          <p className="text-xs text-slate-400">Premium domain sale</p>
        </div>
      </div>

      <a
        href={`mailto:${sellerEmail}?subject=Offer%20for%20trade.iota`}
        className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sky-200 sm:inline-flex"
      >
        Make Offer
      </a>
    </nav>

    <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-200">
          <Sparkles className="h-4 w-4" />
          Premium Web3 domain opportunity
        </div>

        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Own <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">trade.iota</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          A clean, high-authority domain name for digital trade, tokenization, supply chain, and next-generation commerce infrastructure.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${sellerEmail}?subject=Offer%20for%20trade.iota`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-sky-500/25 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            Contact Seller <Mail className="h-5 w-5" />
          </a>
          <a
            href="#compliance"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10"
          >
            View Compliance Notice <Scale className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-300" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-400/30 via-indigo-500/20 to-transparent blur-2xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-sky-300/20 bg-[#071024]/95 p-7">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">Domain Asset</p>
              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Available</div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/30 p-7 text-center">
              <p className="text-4xl font-black tracking-tight sm:text-5xl">trade.iota</p>
              <p className="mt-3 text-slate-400">Simple. Direct. Marketable.</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <BriefcaseBusiness className="mb-4 h-5 w-5 text-sky-300" />
                <p className="text-xs text-slate-400">Category</p>
                <p className="mt-1 font-bold">Digital Trade</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <TrendingUp className="mb-4 h-5 w-5 text-sky-300" />
                <p className="text-xs text-slate-400">Positioning</p>
                <p className="mt-1 font-bold">Web3 Brand</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
              Domain sale only. No investment, token, equity, dividend, yield, or financial return is offered.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>

  <section className="px-5 py-16 sm:px-8 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">Use cases</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Built for serious digital brands</h2>
        </div>
        <p className="max-w-xl text-slate-300">
          A versatile name for teams building lawful platforms across trade, technology, infrastructure, and digital commerce.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.07]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300 group-hover:bg-sky-400 group-hover:text-slate-950">
              <ArrowRight className="h-5 w-5" />
            </div>
            <p className="text-lg font-bold">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  <section id="compliance" className="px-5 py-16 sm:px-8 lg:px-16">
    <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/15 text-amber-200">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-200">PH SEC-friendly wording</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Compliance Notice</h2>
        </div>

        <div className="space-y-4 text-slate-300">
          <p className="leading-8">
            This page advertises the possible sale of a domain name only. It is not an investment solicitation, securities offering, token sale, exchange service, broker/dealer service, crowdfunding offer, lending product, or promise of profit.
          </p>
          <p className="leading-8">
            No equity, shares, dividends, yield, ownership in a company, tokens, or financial returns are being offered. Any buyer is responsible for independent legal, tax, and regulatory review before using the domain for any business activity.
          </p>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
            <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" />
            Not affiliated with, endorsed by, or representing any third-party organization unless expressly stated.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="px-5 py-20 text-center sm:px-8 lg:px-16">
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-400/15 to-indigo-500/10 p-8 shadow-2xl shadow-sky-950/50 backdrop-blur-xl sm:p-12">
      <BadgeCheck className="mx-auto mb-5 h-10 w-10 text-sky-300" />
      <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Acquire trade.iota</h2>
      <p className="mx-auto mt-5 max-w-2xl text-slate-300">
        Serious inquiries are welcome. Send your offer and preferred transfer process.
      </p>
      <a
        href={`mailto:${sellerEmail}?subject=Offer%20for%20trade.iota`}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-200"
      >
        Submit Inquiry <Mail className="h-5 w-5" />
      </a>
    </div>
  </section>

  <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
    © {new Date().getFullYear()} trade.iota domain sale page. Domain sale only. No investment product or financial return is offered.
  </footer>
</main>

); }
