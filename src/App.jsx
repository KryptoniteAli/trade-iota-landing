import React from "react";

export default function TradeIotaLandingPage() { const tradeUseCases = [ ["Verified trade identity", "A memorable identity for exporters, importers, brokers, freight forwarders, ports, and customs-facing services."], ["Wallet address for settlement", "Send payments or assets to trade.iota instead of copying and pasting a long wallet address."], ["Document verification hub", "A branded gateway for invoices, certificates of origin, bills of lading, warehouse receipts, and shipment proofs."], ["Tokenized RWA gateway", "Point buyers, financiers, and logistics partners to tokenized trade assets, NFTs, and digital product passports."], ["Trust layer for partners", "Reduce friction when companies, agencies, and financial institutions need to verify the same trade flow."], ["Premium global trade brand", "Short, category-defining, and aligned with IOTA’s focus on bringing global trade and real-world assets onchain."], ];

return ( <main className="page"> <style>{css}</style>

<section className="hero">
    <div className="bg" />
    <div className="aurora one" />
    <div className="aurora two" />
    <div className="gridLines" />

    <nav className="nav">
      <a href="https://www.iota.org" target="_blank" rel="noreferrer" className="iotaBrand">
        <IotaLogo />
        <div>
          <strong>IOTA</strong>
          <span>Official Network</span>
        </div>
      </a>

      <div className="topCards">
        <a href="https://iotanames.com" target="_blank" rel="noreferrer" className="topCard">
          <img src="/src/assets/iotanames.jpg" alt="IOTA Names" />
          <div>
            <strong>IOTA Names</strong>
            <span>Get your unique iotanames here</span>
          </div>
        </a>

        <a href="https://www.tradeport.xyz" target="_blank" rel="noreferrer" className="topCard">
          <img src="/src/assets/tradeport.svg" alt="TradePort" />
          <div>
            <strong>TradePort</strong>
            <span>Trade here</span>
          </div>
        </a>
      </div>
    </nav>

    <div className="heroInner">
      <div className="eyebrow">Premium IOTA Name For Sale</div>
      <h1>
        <span className="own">Own the future of trade</span>
        <span className="domain">trade.iota</span>
      </h1>
      <p className="heroText">
        A premium, human-readable IOTA Name for global trade, tokenized assets, supply-chain verification, and wallet-address routing.
      </p>

      <div className="heroActions">
        <a className="primaryBtn" href="https://iotanames.com" target="_blank" rel="noreferrer">View on IOTA Names</a>
        <a className="ghostBtn" href="https://www.tradeport.xyz" target="_blank" rel="noreferrer">Explore TradePort</a>
      </div>

      <div className="spotlightCard">
        <div>
          <span className="miniLabel">Premium name</span>
          <strong>trade.iota</strong>
          <p>Wallet • Identity • Global commerce</p>
        </div>
        <div className="status">For sale</div>
      </div>
    </div>
  </section>

  <section className="section split">
    <div>
      <p className="kicker">Why this name matters</p>
      <h2>A simple name for a complex global market.</h2>
      <p className="bodyText">
        Global trade involves many parties, documents, identities, payments, and assets. A short IOTA Name like <b>trade.iota</b> can act as a trusted onchain destination: easy to remember, easy to share, and easier to verify than a long wallet address.
      </p>
    </div>
    <div className="statsCard">
      <div><span>Status</span><strong>For sale</strong></div>
      <div><span>Use</span><strong>Wallet • Identity • Trade</strong></div>
      <div><span>Category</span><strong>Global commerce</strong></div>
    </div>
  </section>

  <section className="section">
    <p className="kicker center">Global trade use cases</p>
    <h2 className="centerTitle">What <span>trade.iota</span> can become</h2>
    <div className="useGrid">
      {tradeUseCases.map(([title, text], index) => (
        <article className="useCard" key={title}>
          <small>0{index + 1}</small>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  </section>

  <section className="section split walletWrap">
    <div>
      <p className="kicker">Domain name as wallet address</p>
      <h2>Send to <span>trade.iota</span> instead of copying a long address.</h2>
      <p className="bodyText">
        A readable IOTA Name can reduce payment friction in trade finance, invoice settlement, escrow, NFT transfers, and tokenized document workflows.
      </p>
    </div>
    <div className="walletCard">
      <span>Recipient</span>
      <strong>trade.iota</strong>
      <span>Resolves to wallet</span>
      <code>0x8f2a...91b2</code>
      <button>Send / Transfer</button>
    </div>
  </section>

  <section className="cta">
    <h2>Acquire <span>trade.iota</span></h2>
    <p>A premium IOTA Name for builders, marketplaces, logistics platforms, trade-finance apps, and RWA projects.</p>
    <div className="heroActions centerActions">
      <a className="primaryBtn" href="https://iotanames.com" target="_blank" rel="noreferrer">IOTA Names</a>
      <a className="ghostBtn" href="https://www.tradeport.xyz" target="_blank" rel="noreferrer">TradePort</a>
    </div>
  </section>
</main>

); }

function IotaLogo() { return ( <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-label="IOTA logo"> <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,.10)" /> <circle cx="15" cy="14" r="3.4" fill="white" /> <circle cx="24" cy="12" r="3.4" fill="white" /> <circle cx="33" cy="17" r="3.4" fill="white" /> <circle cx="18" cy="25" r="3.4" fill="white" /> <circle cx="28" cy="27" r="3.4" fill="white" /> <circle cx="20" cy="36" r="3.4" fill="white" /> <circle cx="35" cy="36" r="3.4" fill="white" /> </svg> ); }

const css = `

{ box-sizing: border-box; } body { margin: 0; } .page { min-height: 100vh; background: #030712; color: white; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; overflow-x: hidden; } .hero { position: relative; min-height: 100vh; overflow: hidden; } .bg { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(3,7,18,.78), rgba(3,7,18,.96)), url('/src/assets/trade-bg.png'); background-size: cover; background-position: center; transform: scale(1.04); } .aurora { position: absolute; width: 420px; height: 420px; border-radius: 999px; filter: blur(80px); opacity: .45; animation: pulse 7s ease-in-out infinite alternate; } .aurora.one { right: -120px; top: 80px; background: #22d3ee; } .aurora.two { left: -160px; bottom: 20px; background: #8b5cf6; animation-delay: 1.2s; } .gridLines { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 54px 54px; mask-image: linear-gradient(to bottom, rgba(0,0,0,.35), transparent 78%); } .nav { position: relative; z-index: 3; max-width: 1180px; margin: 0 auto; padding: 22px 22px; display: flex; align-items: center; justify-content: space-between; gap: 18px; } .iotaBrand { display: flex; align-items: center; gap: 13px; color: white; text-decoration: none; min-width: 168px; } .iotaBrand strong { display: block; font-size: 25px; letter-spacing: -.03em; background: linear-gradient(90deg,#fff,#67e8f9); -webkit-background-clip: text; color: transparent; } .iotaBrand span { display: block; color: #cbd5e1; text-transform: uppercase; letter-spacing: .15em; font-size: 11px; font-weight: 900; margin-top: 2px; } .topCards { display: flex; gap: 12px; align-items: center; } .topCard { display: flex; align-items: center; gap: 13px; min-width: 245px; padding: 13px; border-radius: 24px; text-decoration: none; color: white; background: linear-gradient(135deg, rgba(255,255,255,.13), rgba(255,255,255,.05)); border: 1px solid rgba(255,255,255,.18); box-shadow: 0 22px 70px rgba(0,0,0,.28); backdrop-filter: blur(18px); transition: transform .2s ease, border-color .2s ease; } .topCard:hover { transform: translateY(-3px); border-color: rgba(103,232,249,.5); } .topCard img { width: 54px; height: 54px; border-radius: 18px; object-fit: cover; background: linear-gradient(135deg, rgba(34,211,238,.22), rgba(139,92,246,.28)); padding: 5px; } .topCard strong { display: block; font-size: 18px; } .topCard span { display: block; color: #d1d5db; font-size: 13px; line-height: 1.35; margin-top: 3px; } .heroInner { position: relative; z-index: 2; max-width: 1180px; margin: 0 auto; padding: 88px 22px 96px; } .eyebrow { display: inline-flex; padding: 12px 17px; border-radius: 999px; color: #a5f3fc; background: rgba(34,211,238,.11); border: 1px solid rgba(34,211,238,.46); box-shadow: inset 0 0 24px rgba(34,211,238,.08), 0 0 36px rgba(34,211,238,.14); text-transform: uppercase; letter-spacing: .18em; font-size: 12px; font-weight: 950; } h1 { margin: 24px 0 0; max-width: 980px; line-height: .84; } .own { display: block; color: #dffbff; text-transform: uppercase; letter-spacing: .22em; font-size: clamp(19px, 5vw, 38px); margin-bottom: 10px; } .domain, .centerTitle span, .walletWrap h2 span, .cta h2 span { display: inline-block; font-size: clamp(70px, 17vw, 150px); font-weight: 950; letter-spacing: -.09em; background: linear-gradient(90deg,#fff,#67e8f9,#a78bfa,#fff); background-size: 260% auto; -webkit-background-clip: text; color: transparent; filter: drop-shadow(0 0 26px rgba(34,211,238,.28)); animation: shimmer 4.5s linear infinite; } .heroText { max-width: 790px; margin: 28px 0 0; color: #e5e7eb; font-size: clamp(20px, 3.2vw, 31px); line-height: 1.38; font-weight: 650; } .heroActions { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 13px; } .primaryBtn, .ghostBtn { min-height: 58px; display: inline-flex; align-items: center; justify-content: center; padding: 16px 22px; border-radius: 18px; text-decoration: none; font-weight: 950; transition: transform .2s ease, box-shadow .2s ease; } .primaryBtn { background: linear-gradient(135deg,#22d3ee,#67e8f9); color: #020617; box-shadow: 0 18px 50px rgba(34,211,238,.25); } .ghostBtn { color: white; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.18); } .primaryBtn:hover, .ghostBtn:hover { transform: translateY(-2px); } .spotlightCard { margin-top: 32px; max-width: 650px; display: flex; justify-content: space-between; gap: 18px; align-items: center; padding: 24px; border-radius: 30px; background: linear-gradient(135deg, rgba(255,255,255,.15), rgba(255,255,255,.06)); border: 1px solid rgba(255,255,255,.18); backdrop-filter: blur(18px); box-shadow: 0 24px 80px rgba(0,0,0,.36); } .miniLabel { display: block; color: #a5f3fc; text-transform: uppercase; letter-spacing: .16em; font-size: 11px; font-weight: 950; } .spotlightCard strong { display: block; font-size: clamp(38px, 11vw, 64px); letter-spacing: -.07em; margin-top: 4px; } .spotlightCard p { margin: 3px 0 0; color: #d1d5db; font-weight: 800; } .status { padding: 11px 14px; border-radius: 999px; background: rgba(16,185,129,.14); border: 1px solid rgba(52,211,153,.38); color: #bbf7d0; font-weight: 950; white-space: nowrap; } .section { max-width: 1180px; margin: 0 auto; padding: 78px 22px; } .split { display: grid; grid-template-columns: minmax(0,1.1fr) minmax(280px,.75fr); gap: 26px; align-items: center; } .kicker { color: #67e8f9; text-transform: uppercase; letter-spacing: .18em; font-size: 12px; font-weight: 950; } .center { text-align: center; } h2 { margin: 12px 0 0; font-size: clamp(36px, 7vw, 62px); line-height: 1; letter-spacing: -.06em; } .bodyText { color: #cbd5e1; font-size: 18px; line-height: 1.75; max-width: 720px; } .statsCard, .walletCard { border-radius: 32px; padding: 28px; background: rgba(255,255,255,.92); color: #020617; box-shadow: 0 28px 80px rgba(0,0,0,.28); } .statsCard div { display: flex; justify-content: space-between; gap: 14px; padding: 16px 0; border-bottom: 1px solid #e2e8f0; } .statsCard div:last-child { border-bottom: 0; } .statsCard span, .walletCard span { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: .15em; font-weight: 950; } .statsCard strong { text-align: right; } .centerTitle { text-align: center; max-width: 900px; margin: 12px auto 38px; } .centerTitle span, .walletWrap h2 span, .cta h2 span { font-size: inherit; letter-spacing: inherit; } .useGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(255px, 1fr)); gap: 16px; } .useCard { position: relative; overflow: hidden; padding: 25px; border-radius: 30px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.11); transition: transform .2s ease, border-color .2s ease; } .useCard:before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at top right, rgba(34,211,238,.18), transparent 38%); } .useCard > * { position: relative; z-index: 1; } .useCard:hover { transform: translateY(-4px); border-color: rgba(103,232,249,.35); } .useCard small { color: #67e8f9; font-weight: 950; letter-spacing: .16em; } .useCard h3 { font-size: 22px; margin: 14px 0 10px; } .useCard p { margin: 0; color: #cbd5e1; line-height: 1.65; } .walletCard strong { display: block; font-size: clamp(40px, 10vw, 64px); line-height: .95; letter-spacing: -.07em; margin: 8px 0 26px; background: linear-gradient(90deg,#020617,#0891b2,#7c3aed); -webkit-background-clip: text; color: transparent; } .walletCard code { display: block; background: #e2e8f0; color: #334155; padding: 16px; border-radius: 16px; margin-top: 8px; } .walletCard button { width: 100%; border: 0; border-radius: 18px; padding: 17px; margin-top: 13px; color: white; font-weight: 950; font-size: 16px; background: linear-gradient(135deg,#020617,#172554); } .cta { text-align: center; padding: 86px 22px 108px; background: radial-gradient(circle at top, rgba(34,211,238,.18), transparent 34%), linear-gradient(135deg, rgba(34,211,238,.10), rgba(124,58,237,.16)); } .cta h2 { margin: 0; } .cta p { max-width: 720px; margin: 18px auto 0; color: #dbeafe; font-size: 19px; line-height: 1.65; } .centerActions { justify-content: center; } @keyframes shimmer { to { background-position: 260% center; } } @keyframes pulse { from { transform: scale(.9); } to { transform: scale(1.08); } } @media (max-width: 760px) { .nav { align-items: flex-start; } .topCards { flex-direction: column; align-items: stretch; width: min(58vw, 390px); } .topCard { min-width: 0; width: 100%; border-radius: 22px; } .topCard img { width: 48px; height: 48px; } .topCard strong { font-size: 16px; } .topCard span { font-size: 12px; } .heroInner { padding-top: 80px; } .split { grid-template-columns: 1fr; } .spotlightCard { align-items: flex-start; flex-direction: column; } .primaryBtn, .ghostBtn { width: 100%; } } @media (max-width: 430px) { .nav { padding: 18px 16px; gap: 8px; } .iotaBrand { min-width: 112px; align-items: flex-start; } .iotaBrand svg { width: 40px; height: 40px; } .iotaBrand strong { font-size: 22px; } .iotaBrand span { font-size: 10px; line-height: 1.45; } .topCards { width: 58vw; gap: 10px; } .topCard { padding: 10px; gap: 10px; } .topCard img { width: 42px; height: 42px; border-radius: 15px; } .heroInner, .section { padding-left: 16px; padding-right: 16px; } .heroInner { padding-top: 76px; } .eyebrow { font-size: 10px; letter-spacing: .15em; } .heroText { font-size: 20px; } } `;
