import React from "react";

export default function TradeIotaLandingPage() { const tradeUseCases = [ ["Verified trade identity", "A memorable identity for exporters, importers, brokers, freight forwarders, ports, and customs-facing services."], ["Wallet address for settlement", "Send payments or assets to trade.iota instead of copying and pasting a long wallet address."], ["Document verification hub", "A branded gateway for invoices, certificates of origin, bills of lading, warehouse receipts, and shipment proofs."], ["Tokenized RWA gateway", "Point buyers, financiers, and logistics partners to tokenized trade assets, NFTs, and digital product passports."], ["Trust layer for partners", "Reduce friction when companies, agencies, and financial institutions need to verify the same trade flow."], ["Premium global trade brand", "Short, category-defining, and aligned with IOTA’s focus on bringing global trade and real-world assets onchain."], ];

return ( <main style={styles.page}> <style>{css}</style>

<section style={styles.hero}>
    <div className="mesh" />
    <div className="grain" />

    <nav style={styles.nav}>
      <a href="https://www.iota.org" target="_blank" rel="noreferrer" style={styles.logoLink}>
        <div style={styles.brand}>
          <IotaLogo />
          <div>
            <span className="brandText">IOTA</span>
            <p style={styles.logoText}>Official IOTA Network</p>
          </div>
        </div>
      </a>

      <div style={styles.partnerLinks}>
        <a href="https://iotanames.com" target="_blank" rel="noreferrer" className="partnerCard">
          <div className="partnerIcon">◎</div>
          <div>
            <strong>IOTA Names</strong>
            <p>Get your unique iotanames here</p>
          </div>
        </a>

        <a href="https://www.tradeport.xyz" target="_blank" rel="noreferrer" className="partnerCard">
          <div className="partnerIcon">◈</div>
          <div>
            <strong>TradePort</strong>
            <p>Trade here</p>
          </div>
        </a>
      </div>
    </nav>

    <div style={styles.heroContent}>
      <p className="pill">Premium IOTA Name For Sale</p>

      <h1 style={styles.h1}>
        <span className="headlineSmall">Own</span>
        <span className="glowText">trade.iota</span>
      </h1>

      <p style={styles.lead}>
        The premium IOTA Name for global trade, tokenized assets, supply-chain verification, and wallet-address routing.
      </p>

      <div className="domainPlate">
        <span>trade.iota</span>
        <em>Wallet • Identity • Global commerce</em>
      </div>

      <div style={styles.actions}>
        <a className="primaryBtn" href="https://iotanames.com" target="_blank" rel="noreferrer">View on IOTA Names</a>
        <a className="ghostBtn" href="https://www.tradeport.xyz" target="_blank" rel="noreferrer">Explore TradePort</a>
      </div>
    </div>
  </section>

  <section style={styles.salePanel}>
    <div style={styles.copyBlock}>
      <p style={styles.kicker}>Why this name matters</p>
      <h2 style={styles.h2}>A simple name for a complex global market.</h2>
      <p style={styles.body}>
        Global trade involves many parties, documents, identities, payments, and assets. A short IOTA Name like <strong>trade.iota</strong> can act as a trusted onchain destination: easy to remember, easy to share, and easier to verify than a long wallet address.
      </p>
    </div>
    <div className="nameCard">
      <p style={styles.small}>IOTA Name</p>
      <h3 className="cardDomain">trade.iota</h3>
      <div style={styles.row}><span>Status</span><strong>For sale</strong></div>
      <div style={styles.row}><span>Use</span><strong>Wallet • Identity • Trade</strong></div>
      <div style={styles.row}><span>Category</span><strong>Global commerce</strong></div>
    </div>
  </section>

  <section style={styles.useCases}>
    <p style={styles.kickerCenter}>Global trade use cases</p>
    <h2 style={styles.h2Center}>What <span className="inlineGlow">trade.iota</span> can become</h2>
    <div style={styles.grid}>
      {tradeUseCases.map(([title, text], index) => (
        <article className="useCard" key={title} style={{ animationDelay: `${index * 90}ms` }}>
          <span className="cardNumber">0{index + 1}</span>
          <h3 style={styles.cardTitle}>{title}</h3>
          <p style={styles.cardText}>{text}</p>
        </article>
      ))}
    </div>
  </section>

  <section style={styles.walletSection}>
    <div>
      <p style={styles.kicker}>Domain name as wallet address</p>
      <h2 style={styles.h2}>Send to <span className="inlineGlow">trade.iota</span> instead of copying a long address.</h2>
      <p style={styles.body}>
        A readable IOTA Name can reduce payment friction in trade finance, invoice settlement, escrow, NFT transfers, and tokenized document workflows.
      </p>
    </div>
    <div className="walletCard">
      <p style={styles.small}>Recipient</p>
      <h3 className="walletDomain">trade.iota</h3>
      <p style={styles.small}>Resolves to wallet</p>
      <p style={styles.address}>0x8f2a...91b2</p>
      <button className="sendBtn">Send / Transfer</button>
    </div>
  </section>

  <section style={styles.cta}>
    <h2 style={styles.ctaTitle}>Acquire <span className="inlineGlow">trade.iota</span></h2>
    <p style={styles.ctaText}>A premium IOTA Name for builders, marketplaces, logistics platforms, trade-finance apps, and RWA projects.</p>
    <div style={styles.actionsCenter}>
      <a className="primaryBtn" href="https://iotanames.com" target="_blank" rel="noreferrer">IOTA Names</a>
      <a className="ghostBtn" href="https://www.tradeport.xyz" target="_blank" rel="noreferrer">TradePort</a>
    </div>
  </section>
</main>

); }

function IotaLogo() { return ( <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-label="IOTA logo"> <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.1" /> <circle cx="15" cy="14" r="3.4" fill="white" /> <circle cx="24" cy="12" r="3.4" fill="white" /> <circle cx="33" cy="17" r="3.4" fill="white" /> <circle cx="18" cy="25" r="3.4" fill="white" /> <circle cx="28" cy="27" r="3.4" fill="white" /> <circle cx="20" cy="36" r="3.4" fill="white" /> <circle cx="35" cy="36" r="3.4" fill="white" /> </svg> ); }

const css = `

{ box-sizing: border-box; } html { scroll-behavior: smooth; } body { margin: 0; } .mesh { position: absolute; inset: 0; background: linear-gradient(120deg, rgba(2,8,23,.96), rgba(2,8,23,.62)), radial-gradient(circle at 76% 20%, rgba(34,211,238,.4), transparent 28%), radial-gradient(circle at 10% 82%, rgba(168,85,247,.38), transparent 32%), url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80'); background-size: cover; background-position: center; transform: scale(1.02); } .grain { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 46px 46px; mask-image: linear-gradient(to bottom, rgba(0,0,0,.55), transparent 82%); } .brandText, .glowText, .inlineGlow, .cardDomain, .walletDomain { background: linear-gradient(90deg, #fff, #67e8f9, #a78bfa, #fff); background-size: 240% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shimmer 4s linear infinite; } .headlineSmall { display: block; font-size: clamp(22px, 5vw, 42px); letter-spacing: .18em; text-transform: uppercase; color: #a5f3fc; margin-bottom: 8px; } .glowText { display: block; filter: drop-shadow(0 0 18px rgba(34,211,238,.32)); } .inlineGlow { font-weight: 900; } .pill { display: inline-block; background: rgba(34,211,238,.13); border: 1px solid rgba(34,211,238,.55); box-shadow: 0 0 30px rgba(34,211,238,.18), inset 0 0 20px rgba(34,211,238,.08); color: #a5f3fc; border-radius: 999px; padding: 12px 16px; font-weight: 900; text-transform: uppercase; letter-spacing: .18em; font-size: 12px; } .domainPlate { display: inline-flex; flex-direction: column; gap: 5px; margin-top: 18px; padding: 18px 20px; border-radius: 24px; border: 1px solid rgba(255,255,255,.16); background: rgba(255,255,255,.075); backdrop-filter: blur(16px); box-shadow: 0 18px 60px rgba(0,0,0,.22); } .domainPlate span { font-size: clamp(32px, 10vw, 74px); font-weight: 950; letter-spacing: -.07em; line-height: .9; } .domainPlate em { color: #cbd5e1; font-style: normal; font-weight: 700; } .partnerCard { display: flex; align-items: center; gap: 12px; text-decoration: none; color: white; padding: 12px 14px; border-radius: 18px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); backdrop-filter: blur(14px); min-width: 210px; transition: transform .2s ease, background .2s ease; } .partnerCard:hover { transform: translateY(-2px); background: rgba(255,255,255,.12); } .partnerCard strong { display: block; font-size: 15px; } .partnerCard p { margin: 2px 0 0; color: #cbd5e1; font-size: 12px; } .partnerIcon { width: 42px; height: 42px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(34,211,238,.25), rgba(168,85,247,.25)); font-size: 20px; font-weight: 900; }


.primaryBtn, .ghostBtn { text-decoration: none; padding: 16px 22px; border-radius: 18px; font-weight: 950; display: inline-flex; align-items: center; justify-content: center; min-height: 56px; transition: transform .2s ease, box-shadow .2s ease; } .primaryBtn { background: linear-gradient(135deg, #22d3ee, #67e8f9); color: #020817; box-shadow: 0 16px 45px rgba(34,211,238,.25); } .ghostBtn { border: 1px solid rgba(255,255,255,.22); color: white; background: rgba(255,255,255,.06); } .primaryBtn:hover, .ghostBtn:hover { transform: translateY(-2px); } .nameCard, .walletCard { background: rgba(255,255,255,.92); color: #020817; border-radius: 34px; padding: 28px; box-shadow: 0 30px 90px rgba(0,0,0,.36); border: 1px solid rgba(255,255,255,.6); } .cardDomain, .walletDomain { font-size: clamp(42px, 10vw, 72px); margin: 6px 0 24px; letter-spacing: -.07em; line-height: .92; } .useCard { position: relative; overflow: hidden; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.11); border-radius: 30px; padding: 26px; animation: floatIn .7s ease both; } .useCard:before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at top right, rgba(34,211,238,.18), transparent 36%); opacity: .9; } .useCard > * { position: relative; z-index: 1; } .cardNumber { color: #67e8f9; font-weight: 950; letter-spacing: .14em; font-size: 12px; } .sendBtn { width: 100%; border: 0; background: linear-gradient(135deg, #020817, #172554); color: white; padding: 17px; border-radius: 18px; font-weight: 950; margin-top: 12px; font-size: 16px; } @keyframes shimmer { to { background-position: 240% center; } } @keyframes floatIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } } @media (max-width: 620px) { .domainPlate { width: 100%; } .primaryBtn, .ghostBtn { width: 100%; } } `;

const styles = { page: { minHeight: "100vh", background: "#020817", color: "white", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }, hero: { position: "relative", minHeight: "100vh", overflow: "hidden" }, nav: { position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px 24px", maxWidth: 1180, margin: "0 auto" }, brand: { display: "flex", alignItems: "center", gap: 12, fontWeight: 950, fontSize: 22 }, partnerLinks: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center" }, logoLink: { textDecoration: "none", color: "white" }, logoText: { margin: 0, color: "#cbd5e1", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }, heroContent: { position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "80px 24px 100px" }, h1: { fontSize: "clamp(64px, 16vw, 148px)", lineHeight: .84, letterSpacing: "-.08em", margin: "26px 0 0", maxWidth: 980 }, lead: { fontSize: "clamp(19px, 3vw, 28px)", lineHeight: 1.45, color: "#e0f2fe", maxWidth: 800, marginTop: 26, fontWeight: 500 }, actions: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }, actionsCenter: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginTop: 28 }, salePanel: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, maxWidth: 1180, margin: "0 auto", padding: "72px 24px 40px" }, copyBlock: { alignSelf: "center" }, kicker: { color: "#67e8f9", textTransform: "uppercase", letterSpacing: ".18em", fontSize: 13, fontWeight: 950 }, kickerCenter: { color: "#67e8f9", textTransform: "uppercase", letterSpacing: ".18em", fontSize: 13, fontWeight: 950, textAlign: "center" }, h2: { fontSize: "clamp(34px, 7vw, 58px)", lineHeight: 1.02, letterSpacing: "-.05em", margin: "12px 0 16px" }, h2Center: { fontSize: "clamp(34px, 7vw, 58px)", lineHeight: 1.02, letterSpacing: "-.05em", margin: "12px auto 36px", textAlign: "center", maxWidth: 860 }, body: { color: "#cbd5e1", fontSize: 18, lineHeight: 1.75 }, small: { color: "#64748b", fontSize: 12, textTransform: "uppercase", letterSpacing: ".16em", fontWeight: 950 }, row: { display: "flex", justifyContent: "space-between", gap: 10, borderTop: "1px solid #e2e8f0", padding: "15px 0", color: "#475569" }, useCases: { maxWidth: 1180, margin: "0 auto", padding: "74px 24px 40px" }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }, cardTitle: { fontSize: 23, margin: "12px 0 10px" }, cardText: { color: "#cbd5e1", lineHeight: 1.65, margin: 0 }, walletSection: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, maxWidth: 1180, margin: "0 auto", padding: "70px 24px" }, address: { fontFamily: "monospace", background: "#e2e8f0", padding: 16, borderRadius: 16, color: "#334155" }, cta: { textAlign: "center", padding: "84px 24px 108px", background: "linear-gradient(135deg, rgba(34,211,238,.16), rgba(124,58,237,.18))" }, ctaTitle: { fontSize: "clamp(40px, 9vw, 76px)", margin: 0, letterSpacing: "-.07em" }, ctaText: { color: "#dbeafe", fontSize: 19, lineHeight: 1.65, maxWidth: 720, margin: "18px auto 0" }, };
