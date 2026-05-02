import React from "react"; import { motion } from "framer-motion"; import { ArrowRight, Globe2, ShieldCheck, Wallet, FileCheck2, Boxes, Landmark, CheckCircle2 } from "lucide-react"; 

export default function TradeIotaLandingPage() { const features = [ { icon: <FileCheck2 className="h-6 w-6" />, title: "Verifiable trade documents", text: "Digitize invoices, certificates, bills of lading, and shipment records with tamper-evident proofs on IOTA." }, { icon: <Boxes className="h-6 w-6" />, title: "Tokenized goods and assets", text: "Represent consignments, product passports, warehouse receipts, and real-world trade assets as onchain objects." }, { icon: <ShieldCheck className="h-6 w-6" />, title: "Identity-first trust layer", text: "Connect traders, authorities, logistics providers, and finance partners through verifiable digital identities." }, { icon: <Wallet className="h-6 w-6" />, title: "Human-readable wallet routing", text: "Use IOTA Names so a domain-style name can point to a wallet address, making payments easier and safer." } ];

const useCases = [ "Send IOTA or assets to acme.iota instead of copying a long wallet address.", "Attach a trusted trade identity to a readable name such as exporter.iota or portagent.iota.", "Use one branded name as a payment, identity, and verification endpoint for trade partners.", "Reduce address-entry mistakes when settling invoices or transferring tokenized documents." ];

return ( <main className="min-h-screen bg-slate-950 text-white"> <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"> <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_#22d3ee,_transparent_34%),radial-gradient(circle_at_bottom_left,_#7c3aed,_transparent_30%)]" /> <div className="relative mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"> <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}> <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200"> Trade infrastructure powered by IOTA </div> <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"> Bring global trade onchain. </h1> <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"> trade.iota helps businesses, logistics providers, and institutions verify trade documents, tokenize real-world assets, and route payments through simple human-readable IOTA names. </p> <div className="mt-8 flex flex-col gap-3 sm:flex-row"> <Button className="rounded-2xl px-6 py-6 text-base"> Start building <ArrowRight className="ml-2 h-5 w-5" /> </Button> <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10"> Explore IOTA Names </Button> </div> </motion.div>

<motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
        <Card className="rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur">
          <CardContent className="p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Example trade identity</p>
                <h2 className="mt-1 text-3xl font-semibold text-white">acme-trade.iota</h2>
              </div>
              <Globe2 className="h-10 w-10 text-cyan-300" />
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-950/70 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Wallet address</span>
                <span className="text-cyan-200">0x8f...91b2</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Trade role</span>
                <span>Verified exporter</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Documents</span>
                <span>Invoices • Certificates • NFTs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Status</span>
                <span className="inline-flex items-center gap-2 text-emerald-300"><CheckCircle2 className="h-4 w-4" /> Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>

  <section className="px-6 py-20 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Why trade.iota</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">A trust layer for real-world commerce</h2>
        <p className="mt-4 text-slate-300">
          IOTA provides scalable Layer 1 programmability with Move and supports EVM smart contracts on Layer 2, making it suitable for trade workflows that require security, auditability, and interoperability.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="rounded-3xl border-white/10 bg-white/[0.06] text-white">
            <CardContent className="p-6">
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  <section className="px-6 py-20 sm:px-10 lg:px-16 bg-white text-slate-950">
    <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">IOTA Names use case</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">Use a domain-style name as a wallet address.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Long wallet addresses are hard to read and easy to mistype. With IOTA Names, trade participants can use readable identifiers like acme.iota, exporter.iota, or finance-desk.iota to route payments, assets, and identity references.
        </p>
      </div>
      <div className="rounded-[2rem] bg-slate-100 p-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <Wallet className="h-6 w-6" />
            <h3 className="text-2xl font-semibold">Send payment</h3>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Recipient</p>
              <p className="mt-1 text-xl font-medium">acme-trade.iota</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Resolves to</p>
              <p className="mt-1 font-mono text-sm text-slate-600">0x8f2a...91b2</p>
            </div>
            <Button className="w-full rounded-2xl py-6">Confirm transfer</Button>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl grid gap-4 md:grid-cols-2">
      {useCases.map((item) => (
        <div key={item} className="flex gap-3 rounded-3xl border border-slate-200 p-5">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" />
          <p className="text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  </section>

  <section className="px-6 py-20 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
      <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white lg:col-span-2">
        <CardContent className="p-8">
          <Landmark className="mb-5 h-8 w-8 text-cyan-300" />
          <h2 className="text-3xl font-semibold">Built for institutions, usable by everyone</h2>
          <p className="mt-4 leading-7 text-slate-300">
            trade.iota is designed for real-world trade flows: government agencies, exporters, customs brokers, logistics providers, financiers, and marketplaces that need a neutral infrastructure for digital trust.
          </p>
        </CardContent>
      </Card>
      <Card className="rounded-3xl border-cyan-300/20 bg-cyan-300/10 text-white">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold">Call to action</h3>
          <p className="mt-3 text-slate-300">Claim your IOTA name, connect your wallet, and start making trade assets easier to verify, pay, and transfer.</p>
          <Button className="mt-6 w-full rounded-2xl py-6">Launch app</Button>
        </CardContent>
      </Card>
    </div>
  </section>
</main>

); }
