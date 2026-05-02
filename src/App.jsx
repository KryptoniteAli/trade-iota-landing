import React from "react";

export default function TradeIotaLandingPage() { const tradeUseCases = [ ["Verified trade identity", "trade.iota can become a memorable identity for exporters, importers, brokers, freight forwarders, ports, and customs-facing services."], ["Wallet address for settlement", "Instead of pasting a long IOTA address, a partner can send payments or assets to trade.iota once it resolves to the correct wallet."], ["Document verification hub", "Use trade.iota as the branded gateway for invoices, certificates of origin, bills of lading, warehouse receipts, and shipment proofs."], ["Tokenized RWA gateway", "Point buyers, financiers, and logistics partners to tokenized trade assets, NFTs, and digital product passports connected to real-world shipments."], ["Trust layer for partners", "A readable name reduces friction when multiple companies, agencies, and financial institutions need to verify the same trade flow."], ["Premium global trade brand", "trade.iota is short, category-defining, and aligned with IOTA’s focus on bringing global trade and real-world assets onchain."], ];

return ( <main style={styles.page}> <section style={styles.hero}> <div style={styles.overlay} /> <nav style={styles.nav}> <div style={styles.brand}> <IotaLogo /> <span>trade.iota</span> </div> <div style={styles.navLinks}> <a href="https://iotanames.com" style={styles.navLink}>IOTA Names</a> <a href="https://www.tradeport.xyz" style={styles.navLink}>TradePort</a> </div> </nav>

<div style={styles.heroContent}>
      <p style={styles.badge}>Premium IOTA Name For Sale</p>
      <h1 style={styles.h1}>trade.iota is for sale.</h1>
      <p style={styles.lead}>
        Own a category-defining IOTA Name for global trade, tokenized assets, supply-chain verification, and wallet-address routing. Make trade.iota the human-readable identity for onchain commerce.
      </p>
      <div style={styles.actions}>
        <a style={styles.primary} href="https://iotanames.com" target="_blank" rel="noreferrer">View on IOTA Names</a>
        <a style={styles.secondary} href="https://www.tradeport.xyz" target="_blank" rel="noreferrer">Explore TradePort</a>
      </div>
    </div>
  </section>

  <section style={styles.salePanel}>
    <div>
      <p style={styles.kicker}>Why this name matters</p>
      <h2 style={styles.h2}>A simple name for a complex global market.</h2>
      <p style={styles.body}>
        Global trade involves many parties, documents, identities, payments, and assets. A short IOTA Name like trade.iota can act as a trusted onchain destination: easy to remember, easy to share, and easier to verify than a long wallet address.
      </p>
    </div>
    <div style={styles.nameCard}>
      <p style={styles.small}>IOTA Name</p>
      <h3 style={styles.domain}>trade.iota</h3>
      <div style={styles.row}><span>Status</span><strong>For sale</strong></div>
      <div style={styles.row}><span>Use</span><strong>Wallet • Identity • Trade</strong></div>
      <div style={styles.row}><span>Category</span><strong>Global commerce</strong></div>
    </div>
  </section>

  <section style={styles.useCases}>
    <p style={styles.kickerCenter}>Global trade use cases</p>
    <h2 style={styles.h2Center}>What trade.iota can become</h2>
    <div style={styles.grid}>
      {tradeUseCases.map(([title, text]) => (
        <article style={styles.card} key={title}>
          <h3 style={styles.cardTitle}>{title}</h3>
          <p style={styles.cardText}>{text}</p>
        </article>
      ))}
    </div>
  </section>

  <section style={styles.walletSection}>
    <div>
      <p style={styles.kicker}>Domain name as wallet address</p>
      <h2 style={styles.h2}>Send to trade.iota instead of copying a long address.</h2>
      <p style={styles.body}>
        A readable IOTA Name can reduce payment friction in trade finance, invoice settlement, escrow, NFT transfers, and tokenized document workflows. It gives businesses a professional onchain identity that can be shared on invoices, QR codes, portals, and partner dashboards.
      </p>
    </div>
    <div style={styles.walletCard}>
      <p style={styles.small}>Recipient</p>
      <h3 style={styles.domainDark}>trade.iota</h3>
      <p style={styles.small}>Resolves to wallet</p>
      <p style={styles.address}>0x8f2a...91b2</p>
      <button style={styles.confirm}>Send / Transfer</button>
    </div>
  </section>

  <section style={styles.cta}>
    <h2 style={styles.ctaTitle}>Acquire trade.iota</h2>
    <p style={styles.ctaText}>A premium IOTA Name for builders, marketplaces, logistics platforms, trade-finance apps, and RWA projects.</p>
    <div style={styles.actionsCenter}>
      <a style={styles.primary} href="https://iotanames.com" target="_blank" rel="noreferrer">IOTA Names</a>
      <a style={styles.secondary} href="https://www.tradeport.xyz" target="_blank" rel="noreferrer">TradePort</a>
    </div>
  </section>
</main>

); }

function IotaLogo() { return ( <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-label="IOTA logo"> <circle cx="21" cy="21" r="21" fill="white" fillOpacity="0.1" /> <circle cx="13" cy="13" r="3" fill="white" /> <circle cx="21" cy="11" r="3" fill="white" /> <circle cx="29" cy="15" r="3" fill="white" /> <circle cx="16" cy="22" r="3" fill="white" /> <circle cx="25" cy="24" r="3" fill="white" /> <circle cx="18" cy="31" r="3" fill="white" /> <circle cx="31" cy="31" r="3" fill="white" /> </svg> ); }

const styles = { page: { minHeight: "100vh", background: "#020817", color: "white", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", }, hero: { position: "relative", minHeight: "92vh", backgroundImage: "linear-gradient(120deg, rgba(2,8,23,.92), rgba(2,8,23,.62)), url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80')", backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden", }, overlay: { position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, rgba(34,211,238,.28), transparent 28%), radial-gradient(circle at 10% 90%, rgba(124,58,237,.32), transparent 32%)", }, nav: { position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px 24px", maxWidth: 1180, margin: "0 auto", }, brand: { display: "flex", alignItems: "center", gap: 12, fontWeight: 800, fontSize: 20 }, navLinks: { display: "flex", gap: 10, flexWrap: "wrap" }, navLink: { color: "white", textDecoration: "none", border: "1px solid rgba(255,255,255,.18)", padding: "10px 12px", borderRadius: 999, background: "rgba(255,255,255,.06)" }, heroContent: { position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "96px 24px 120px" }, badge: { display: "inline-block", background: "rgba(34,211,238,.16)", border: "1px solid rgba(34,211,238,.38)", color: "#a5f3fc", borderRadius: 999, padding: "10px 14px", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".14em", fontSize: 12 }, h1: { fontSize: "clamp(52px, 12vw, 118px)", lineHeight: .88, letterSpacing: "-.07em", margin: "24px 0 0", maxWidth: 920 }, lead: { fontSize: "clamp(18px, 2.4vw, 24px)", lineHeight: 1.6, color: "#dbeafe", maxWidth: 760, marginTop: 26 }, actions: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }, actionsCenter: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginTop: 28 }, primary: { background: "#22d3ee", color: "#020817", textDecoration: "none", padding: "15px 22px", borderRadius: 16, fontWeight: 900, display: "inline-block" }, secondary: { border: "1px solid rgba(255,255,255,.22)", color: "white", textDecoration: "none", padding: "15px 22px", borderRadius: 16, fontWeight: 900, display: "inline-block", background: "rgba(255,255,255,.06)" }, salePanel: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, maxWidth: 1180, margin: "-72px auto 0", padding: 24, position: "relative", zIndex: 4 }, kicker: { color: "#67e8f9", textTransform: "uppercase", letterSpacing: ".16em", fontSize: 13, fontWeight: 900 }, kickerCenter: { color: "#67e8f9", textTransform: "uppercase", letterSpacing: ".16em", fontSize: 13, fontWeight: 900, textAlign: "center" }, h2: { fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1.02, letterSpacing: "-.04em", margin: "12px 0 16px" }, h2Center: { fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1.02, letterSpacing: "-.04em", margin: "12px auto 36px", textAlign: "center", maxWidth: 850 }, body: { color: "#cbd5e1", fontSize: 18, lineHeight: 1.75 }, nameCard: { background: "white", color: "#020817", borderRadius: 32, padding: 28, boxShadow: "0 30px 80px rgba(0,0,0,.35)" }, small: { color: "#64748b", fontSize: 12, textTransform: "uppercase", letterSpacing: ".16em", fontWeight: 900 }, domain: { fontSize: "clamp(36px, 8vw, 64px)", margin: "6px 0 24px", letterSpacing: "-.05em" }, row: { display: "flex", justifyContent: "space-between", gap: 10, borderTop: "1px solid #e2e8f0", padding: "15px 0", color: "#475569" }, useCases: { maxWidth: 1180, margin: "0 auto", padding: "80px 24px 40px" }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }, card: { background: "rgba(255,255,255,.065)", border: "1px solid rgba(255,255,255,.10)", borderRadius: 28, padding: 24 }, cardTitle: { fontSize: 22, margin: "0 0 10px" }, cardText: { color: "#cbd5e1", lineHeight: 1.65, margin: 0 }, walletSection: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, maxWidth: 1180, margin: "0 auto", padding: "70px 24px" }, walletCard: { background: "#f8fafc", color: "#020817", borderRadius: 32, padding: 28, alignSelf: "center" }, domainDark: { fontSize: "clamp(36px, 7vw, 56px)", margin: "6px 0 26px", letterSpacing: "-.05em" }, address: { fontFamily: "monospace", background: "#e2e8f0", padding: 16, borderRadius: 16, color: "#334155" }, confirm: { width: "100%", border: 0, background: "#020817", color: "white", padding: 16, borderRadius: 16, fontWeight: 900, marginTop: 12, fontSize: 16 }, cta: { textAlign: "center", padding: "80px 24px 100px", background: "linear-gradient(135deg, rgba(34,211,238,.16), rgba(124,58,237,.18))" }, ctaTitle: { fontSize: "clamp(38px, 8vw, 72px)", margin: 0, letterSpacing: "-.06em" }, ctaText: { color: "#dbeafe", fontSize: 19, lineHeight: 1.65, maxWidth: 700, margin: "18px auto 0" }, };
