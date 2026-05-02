import React from "react";
import iotaLogo from "./assets/iota-logo.png";
import iotaNamesLogo from "./assets/iotanames.jpg";
import tradeportLogo from "./assets/tradeport.svg";
import tradeBg from "./assets/trade-bg.png";

export default function App() {
  const useCases = [
    "Premium IOTA Name for global trade identity",
    "Readable wallet address for payments and assets",
    "Gateway for invoices, certificates, and trade documents",
    "Brandable entry point for RWA and NFT trade assets",
  ];

  return (
    <main className="page">
      <style>{styles}</style>

      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(2, 6, 23, 0.92), rgba(8, 47, 73, 0.78)),
            url(${tradeBg})
          `,
        }}
      >
        <nav className="nav">
          <a href="https://www.iota.org" target="_blank" rel="noreferrer" className="brand">
            <img src={iotaLogo} alt="IOTA" />
            <div>
              <strong>IOTA</strong>
              <span>Official Network</span>
            </div>
          </a>

          <div className="partners">
            <a href="https://iotanames.com" target="_blank" rel="noreferrer" className="partner">
              <img src={iotaNamesLogo} alt="IOTA Names" />
              <div>
                <strong>IOTA Names</strong>
                <span>Get your unique iotanames here</span>
              </div>
            </a>

            <a href="https://www.tradeport.xyz" target="_blank" rel="noreferrer" className="partner">
              <img src={tradeportLogo} alt="TradePort" />
              <div>
                <strong>TradePort</strong>
                <span>Trade here</span>
              </div>
            </a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="badge">Premium IOTA Name For Sale</p>

          <h1>
            Own <span>trade.iota</span>
          </h1>

          <p className="lead">
            A premium human-readable IOTA Name for global trade, tokenized assets,
            supply-chain verification, and wallet-address routing.
          </p>

          <div className="actions">
            <a href="https://iotanames.com" target="_blank" rel="noreferrer" className="primary">
              View on IOTA Names
            </a>

            <a href="https://www.tradeport.xyz" target="_blank" rel="noreferrer" className="secondary">
              Explore TradePort
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="sectionLabel">Why trade.iota matters</p>
        <h2>A short name for a global trade network.</h2>

        <p className="sectionText">
          trade.iota can serve as a simple onchain identity for trade platforms,
          exporters, logistics providers, marketplaces, and RWA builders.
        </p>

        <div className="grid">
          {useCases.map((item, index) => (
            <div className="card" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wallet">
        <div>
          <p className="sectionLabel">Domain as wallet address</p>
          <h2>Send to trade.iota instead of a long wallet address.</h2>
          <p className="sectionText">
            A readable name can reduce mistakes when sending payments, NFTs,
            trade documents, or tokenized real-world assets.
          </p>
        </div>

        <div className="walletCard">
          <small>Recipient</small>
          <strong>trade.iota</strong>
          <small>Resolves to</small>
          <code>0x8f2a...91b2</code>
          <button>Send / Transfer</button>
        </div>
      </section>
    </main>
  );
}

const styles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .page {
    min-height: 100vh;
    background: #020617;
    color: white;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .hero {
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    padding: 22px;
    position: relative;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at top right, rgba(34, 211, 238, 0.22), transparent 34%),
      radial-gradient(circle at bottom left, rgba(124, 58, 237, 0.24), transparent 36%);
    pointer-events: none;
  }

  .nav {
    position: relative;
    z-index: 2;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
    color: white;
    text-decoration: none;
  }

  .brand img {
    width: 54px;
    height: 54px;
    border-radius: 18px;
    background: rgba(255,255,255,0.08);
    padding: 8px;
  }

  .brand strong {
    display: block;
    font-size: 30px;
    letter-spacing: -0.04em;
  }

  .brand span {
    display: block;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 800;
  }

  .partners {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: min(420px, 58vw);
  }

  .partner {
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
    text-decoration: none;
    padding: 16px;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(18px);
    box-shadow: 0 24px 70px rgba(0,0,0,0.22);
    transition: 0.25s ease;
  }

  .partner:hover {
    transform: translateY(-3px);
    border-color: rgba(103, 232, 249, 0.55);
  }

  .partner img {
    width: 58px;
    height: 58px;
    border-radius: 18px;
    object-fit: cover;
    background: rgba(34,211,238,0.12);
    padding: 6px;
  }

  .partner strong {
    display: block;
    font-size: 22px;
  }

  .partner span {
    color: #d1d5db;
    font-size: 15px;
  }

  .heroContent {
    position: relative;
    z-index: 2;
    max-width: 1180px;
    margin: 0 auto;
    padding: 120px 0 90px;
  }

  .badge {
    display: inline-block;
    padding: 13px 18px;
    border-radius: 999px;
    border: 1px solid rgba(103, 232, 249, 0.45);
    background: rgba(34, 211, 238, 0.12);
    color: #a5f3fc;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 12px;
    font-weight: 900;
  }

  h1 {
    margin: 24px 0 0;
    font-size: clamp(64px, 15vw, 150px);
    line-height: 0.88;
    letter-spacing: -0.09em;
  }

  h1 span {
    display: block;
    background: linear-gradient(90deg, #ffffff, #67e8f9, #a78bfa);
    -webkit-background-clip: text;
    color: transparent;
    filter: drop-shadow(0 0 24px rgba(34,211,238,0.32));
  }

  .lead {
    max-width: 780px;
    margin: 30px 0 0;
    color: #e2e8f0;
    font-size: clamp(20px, 3vw, 30px);
    line-height: 1.45;
    font-weight: 650;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
  }

  .primary,
  .secondary {
    min-height: 58px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    border-radius: 18px;
    text-decoration: none;
    font-weight: 900;
  }

  .primary {
    background: linear-gradient(135deg, #22d3ee, #67e8f9);
    color: #020617;
    box-shadow: 0 18px 50px rgba(34,211,238,0.26);
  }

  .secondary {
    color: white;
    border: 1px solid rgba(255,255,255,0.22);
    background: rgba(255,255,255,0.07);
  }

  .section,
  .wallet {
    max-width: 1180px;
    margin: 0 auto;
    padding: 80px 22px;
  }

  .sectionLabel {
    color: #67e8f9;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 12px;
    font-weight: 900;
  }

  h2 {
    margin: 12px 0 0;
    max-width: 850px;
    font-size: clamp(36px, 7vw, 64px);
    line-height: 1;
    letter-spacing: -0.06em;
  }

  .sectionText {
    max-width: 720px;
    color: #cbd5e1;
    font-size: 18px;
    line-height: 1.75;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 16px;
    margin-top: 34px;
  }

  .card {
    padding: 24px;
    border-radius: 28px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
  }

  .card span {
    color: #67e8f9;
    font-weight: 900;
    letter-spacing: 0.18em;
    font-size: 12px;
  }

  .card p {
    margin: 14px 0 0;
    font-size: 18px;
    color: #e5e7eb;
  }

  .wallet {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 28px;
    align-items: center;
  }

  .walletCard {
    border-radius: 32px;
    background: white;
    color: #020617;
    padding: 28px;
    box-shadow: 0 30px 90px rgba(0,0,0,0.28);
  }

  .walletCard small {
    display: block;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 900;
    font-size: 12px;
  }

  .walletCard strong {
    display: block;
    margin: 6px 0 26px;
    font-size: 48px;
    letter-spacing: -0.07em;
    background: linear-gradient(90deg, #020617, #0891b2, #7c3aed);
    -webkit-background-clip: text;
    color: transparent;
  }

  .walletCard code {
    display: block;
    margin-top: 8px;
    padding: 16px;
    border-radius: 16px;
    background: #e2e8f0;
    color: #334155;
  }

  .walletCard button {
    width: 100%;
    margin-top: 14px;
    border: 0;
    border-radius: 18px;
    padding: 17px;
    color: white;
    font-size: 16px;
    font-weight: 900;
    background: linear-gradient(135deg, #020617, #172554);
  }

  @media (max-width: 760px) {
    .nav {
      align-items: flex-start;
    }

    .partners {
      width: 58vw;
    }

    .partner {
      padding: 11px;
      border-radius: 22px;
    }

    .partner img {
      width: 44px;
      height: 44px;
    }

    .partner strong {
      font-size: 16px;
    }

    .partner span {
      font-size: 12px;
    }

    .brand img {
      width: 44px;
      height: 44px;
    }

    .brand strong {
      font-size: 24px;
    }

    .heroContent {
      padding-top: 100px;
    }

    .actions a {
      width: 100%;
    }

    .wallet {
      grid-template-columns: 1fr;
    }
  }
`;
