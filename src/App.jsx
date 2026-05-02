import React from "react";

export default function TradeIotaLandingPage() { const features = [ ["Verifiable trade documents", "Digitize invoices, certificates, bills of lading, and shipment records with tamper-evident proofs on IOTA."], ["Tokenized goods and assets", "Represent consignments, product passports, warehouse receipts, and real-world trade assets as onchain objects."], ["Identity-first trust layer", "Connect traders, authorities, logistics providers, and finance partners through verifiable digital identities."], ["IOTA Names", "Use a domain-style name as a wallet address, making payments and asset transfers easier to read."], ];

return ( <div style={styles.page}> <section style={styles.hero}> <div style={styles.badge}>Trade infrastructure powered by IOTA</div> <h1 style={styles.h1}>Bring global trade onchain.</h1> <p style={styles.lead}> trade.iota helps businesses, logistics providers, and institutions verify trade documents, tokenize real-world assets, and route payments through simple human-readable IOTA names. </p> <div style={styles.actions}> <a style={styles.primary} href="#names">Explore IOTA Names</a> <a style={styles.secondary} href="#use-cases">View use cases</a> </div> </section>

<section style={styles.grid} id="use-cases">
    {features.map(([title, text]) => (
      <div style={styles.card} key={title}>
        <h2 style={styles.cardTitle}>{title}</h2>
        <p style={styles.cardText}>{text}</p>
      </div>
    ))}
  </section>

  <section style={styles.names} id="names">
    <div>
      <p style={styles.kicker}>IOTA Names use case</p>
      <h2 style={styles.h2}>Use a domain-style name as a wallet address.</h2>
      <p style={styles.body}>
        Long wallet addresses are hard to read and easy to mistype. IOTA Names can make trade payments and asset transfers easier by letting users send to readable names such as acme.iota, exporter.iota, or finance-desk.iota instead of copying a long address.
      </p>
      <ul style={styles.list}>
        <li>Send IOTA or assets to acme.iota instead of a long wallet address.</li>
        <li>Attach a trusted trade identity to a readable name.</li>
        <li>Use one branded name as a payment, identity, and verification endpoint.</li>
        <li>Reduce address-entry mistakes when settling invoices or transferring tokenized documents.</li>
      </ul>
    </div>

    <div style={styles.phoneCard}>
      <p style={styles.small}>Recipient</p>
      <h3 style={styles.name}>acme-trade.iota</h3>
      <p style={styles.small}>Resolves to</p>
      <p style={styles.address}>0x8f2a...91b2</p>
      <button style={styles.confirm}>Confirm transfer</button>
    </div>
  </section>

  <section style={styles.footerCta}>
    <h2 style={styles.h2}>Built for institutions, usable by everyone.</h2>
    <p style={styles.body}>
      trade.iota is designed for government agencies, exporters, customs brokers, logistics providers, financiers, and marketplaces that need neutral digital trust infrastructure.
    </p>
  </section>
</div>

); }

const styles = { page: { minHeight: "100vh", background: "#020817", color: "white", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", }, hero: { padding: "72px 24px 48px", maxWidth: 1100, margin: "0 auto", }, badge: { display: "inline-block", border: "1px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.08)", borderRadius: 999, padding: "10px 14px", color: "#cbd5e1", fontSize: 14, marginBottom: 24, }, h1: { fontSize: "clamp(44px, 10vw, 82px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: 0, maxWidth: 850, }, lead: { fontSize: 18, lineHeight: 1.7, color: "#cbd5e1", maxWidth: 760, marginTop: 24, }, actions: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28, }, primary: { background: "#22d3ee", color: "#020817", textDecoration: "none", padding: "14px 20px", borderRadius: 16, fontWeight: 700, }, secondary: { border: "1px solid rgba(255,255,255,.18)", color: "white", textDecoration: "none", padding: "14px 20px", borderRadius: 16, fontWeight: 700, }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16, maxWidth: 1100, margin: "0 auto", padding: "24px", }, card: { background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.10)", borderRadius: 28, padding: 24, }, cardTitle: { fontSize: 22, margin: "0 0 10px" }, cardText: { color: "#cbd5e1", lineHeight: 1.6, margin: 0 }, names: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 1100, margin: "40px auto 0", padding: "48px 24px", background: "white", color: "#020817", borderRadius: 32, }, kicker: { color: "#64748b", textTransform: "uppercase", letterSpacing: ".16em", fontSize: 13, fontWeight: 700, }, h2: { fontSize: "clamp(30px, 6vw, 48px)", lineHeight: 1.05, margin: "10px 0 16px" }, body: { color: "#475569", fontSize: 17, lineHeight: 1.7 }, list: { color: "#334155", lineHeight: 1.8, paddingLeft: 20 }, phoneCard: { background: "#f1f5f9", borderRadius: 28, padding: 24, alignSelf: "center", }, small: { color: "#64748b", fontSize: 13, textTransform: "uppercase", letterSpacing: ".12em" }, name: { fontSize: 32, margin: "6px 0 28px" }, address: { fontFamily: "monospace", background: "white", padding: 16, borderRadius: 16 }, confirm: { width: "100%", border: 0, background: "#020817", color: "white", padding: 16, borderRadius: 16, fontWeight: 700, marginTop: 12, }, footerCta: { maxWidth: 1100, margin: "0 auto", padding: "64px 24px 80px", }, };
