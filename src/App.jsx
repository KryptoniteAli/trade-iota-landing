import React from "react";

// App component that renders the landing page for trade.iota.
//
// This component integrates the improved design from
// trade_iota_landing_improved.jsx and fixes the image imports so
// that logos display correctly in Vite/React projects. Make sure
// the following asset files exist in your project's `src/assets`
// directory: `iota-logo.png`, `iotanames.jpg`, `tradeport.svg`,
// `world-map.png`. If they are located elsewhere, adjust the
// import paths accordingly.
//
// The component highlights the sale of the trade.iota domain,
// provides call‑to‑action buttons linking to IOTA Names and
// TradePort, and explains use cases for a memorable IOTA name in
// global trade. It also demonstrates how a domain can act as
// a wallet address.

// Importing logo images as modules ensures Vite rewrites
// the URLs at build time so they load correctly in production.
import iotaLogoImg from "./assets/iota-logo.png";
import iotaNamesLogoImg from "./assets/iotanames.jpg";
import tradeportLogoImg from "./assets/tradeport.svg";
// import worldMapImg from "./assets/world-map.png";

export default function App() {
  const useCases = [
    {
      title: "Instant Identity",
      description:
        "Create a trusted identity for exporters, importers and logistics partners. A short, memorable name reduces errors and builds credibility.",
    },
    {
      title: "Wallet Address",
      description:
        "Send payments directly to trade.iota instead of a lengthy address. Perfect for invoice settlement, escrow, and token transfers.",
    },
    {
      title: "Document Hub",
      description:
        "Provide a single onchain destination to verify invoices, bills of lading, certificates and other trade documents.",
    },
    {
      title: "Tokenized Assets",
      description:
        "Link to tokenized real‑world assets, NFTs and digital product passports with an easy‑to‑remember domain.",
    },
    {
      title: "Trust Layer",
      description:
        "Reduce friction when customs authorities, banks and counterparties need to verify the same trade flow.",
    },
    {
      title: "Premium Branding",
      description:
        "Position your platform at the centre of global trade with a category‑defining IOTA name.",
    },
  ];

  return (
    <div className="page">
      <style>{styles}</style>
      <header className="hero">
        <div className="heroBg">
          <img className="heroMap" src={worldMapImg} alt="Decorative world map" />
        </div>
        <nav className="nav">
          <a href="https://www.iota.org" target="_blank" rel="noreferrer" className="brand">
            <img src={iotaLogoImg} alt="IOTA logo" className="brandImg" />
            <span>IOTA</span>
          </a>
          <div className="navLinks">
            <a href="https://iotanames.com" target="_blank" rel="noreferrer" className="navLink">
              <img src={iotaNamesLogoImg} alt="IOTA Names logo" className="navLogo" />
              <span>IOTA Names</span>
            </a>
            <a href="https://www.tradeport.xyz" target="_blank" rel="noreferrer" className="navLink">
              <img src={tradeportLogoImg} alt="TradePort logo" className="navLogo" />
              <span>TradePort</span>
            </a>
          </div>
        </nav>
        <div className="heroContent">
          <p className="tagline">Premium IOTA Name For Sale</p>
          <h1>
            Own <span className="highlight">trade.iota</span>
          </h1>
          <p className="subheading">
            A memorable, human‑readable name for global trade, supply chain
            verification and wallet addressing.
          </p>
          <div className="ctaWrapper">
            <a
              className="primaryButton"
              href="https://iotanames.com"
              target="_blank"
              rel="noreferrer"
            >
              Get trade.iota
            </a>
            <a
              className="secondaryButton"
              href="https://www.tradeport.xyz"
              target="_blank"
              rel="noreferrer"
            >
              Explore TradePort
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="useCases">
          <h2>
            Trade‑ready applications for <span className="highlight">trade.iota</span>
          </h2>
          <div className="cards">
            {useCases.map((item, idx) => (
              <article className="card" key={item.title}>
                <div className="icon">0{idx + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="walletSection">
          <div className="walletIntro">
            <h2>
              Use as a <span className="highlight">wallet address</span>
            </h2>
            <p>
              Stop copying long addresses. Receive payments by directing
              counterparties to <strong>trade.iota</strong>. Ideal for invoice
              settlement, escrow and token transfers.
            </p>
          </div>
          <div className="walletCard">
            <div className="walletHeader">
              <span>Send to</span>
              <strong>trade.iota</strong>
            </div>
            <div className="walletBody">
              <span>Resolves to wallet</span>
              <code>0x8f2a...91b2</code>
            </div>
            <button className="walletButton">Send Payment</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          <span className="highlight">trade.iota</span> is for sale. Contact us via
          IOTA Names to acquire this premium domain.
        </p>
      </footer>
    </div>
  );
}

// CSS styles as a template literal. This keeps the CSS scoped to the component
// without requiring external files. For larger projects you may prefer to
// extract these styles into a separate CSS/SCSS module.
const styles = `
  .page {
    font-family: Inter, system-ui, sans-serif;
    color: #f8fafc;
    background-color: #030712;
    line-height: 1.6;
    margin: 0;
  }
  /* HERO */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1rem 4rem;
    overflow: hidden;
  }
  .heroBg {
    position: absolute;
    inset: 0;
    z-index: -2;
    background: linear-gradient(180deg, rgba(3,7,18,0.9) 0%, rgba(3,7,18,1) 80%);
  }
  .heroMap {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scale(1.2);
    width: 100%;
    height: auto;
    opacity: 0.08;
    filter: contrast(1.2);
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
    color: #67e8f9;
  }
  .brandImg {
    width: 32px;
    height: 32px;
  }
  .brand span {
    font-size: 1.1rem;
    color: #a5f3fc;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .navLinks {
    display: flex;
    gap: 1rem;
  }
  .navLink {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 600;
    padding: 0.6rem 1rem;
    border-radius: 999px;
    transition: background 0.2s;
  }
  .navLink:hover {
    background: rgba(255,255,255,0.1);
  }
  .navLogo {
    width: 24px;
    height: 24px;
  }
  .heroContent {
    max-width: 700px;
    margin: auto;
    text-align: center;
    padding-top: 6rem;
  }
  .tagline {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    background: rgba(34,211,238,0.18);
    border: 1px solid rgba(34,211,238,0.5);
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    font-weight: 800;
    color: #67e8f9;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.1;
    font-weight: 900;
    margin: 0.5rem 0;
  }
  .highlight {
    background: linear-gradient(90deg, #67e8f9, #a78bfa, #67e8f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: highlightShift 8s linear infinite;
  }
  @keyframes highlightShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .subheading {
    font-size: 1.2rem;
    color: #cbd5e1;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  .ctaWrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .primaryButton, .secondaryButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 1.4rem;
    border-radius: 999px;
    font-weight: 800;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .primaryButton {
    background: linear-gradient(135deg, #22d3ee, #67e8f9);
    color: #020617;
    box-shadow: 0 4px 30px rgba(34,211,238,0.3);
  }
  .primaryButton:hover {
    transform: translateY(-2px);
  }
  .secondaryButton {
    background: rgba(255,255,255,0.1);
    color: #f1f5f9;
    border: 1px solid rgba(255,255,255,0.2);
  }
  .secondaryButton:hover {
    background: rgba(255,255,255,0.2);
  }
  /* Use Cases */
  .useCases {
    padding: 4rem 1rem;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }
  .useCases h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 2rem;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  .card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 1.5rem;
    padding: 2rem 1.5rem;
    text-align: left;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, border-color 0.2s;
  }
  .card:hover {
    transform: translateY(-4px);
    border-color: rgba(103,232,249,0.4);
  }
  .icon {
    position: absolute;
    top: -1.2rem;
    right: -1.2rem;
    font-size: 4rem;
    font-weight: 900;
    color: rgba(103,232,249,0.08);
  }
  .card h3 {
    margin: 0 0 0.6rem;
    font-size: 1.4rem;
    font-weight: 800;
  }
  .card p {
    margin: 0;
    color: #d1d5db;
    font-size: 1rem;
    line-height: 1.55;
  }
  /* Wallet section */
  .walletSection {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    padding: 4rem 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  .walletIntro {
    flex: 1 1 340px;
  }
  .walletIntro h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 800;
  }
  .walletIntro p {
    color: #cbd5e1;
    font-size: 1rem;
    line-height: 1.55;
    max-width: 500px;
  }
  .walletCard {
    flex: 1 1 340px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 1.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;
  }
  .walletHeader span {
    text-transform: uppercase;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    color: #a5f3fc;
  }
  .walletHeader strong {
    font-size: 2.4rem;
    background: linear-gradient(90deg, #0891b2, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    line-height: 1;
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
  }
  .walletBody span {
    text-transform: uppercase;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    color: #a5f3fc;
  }
  .walletBody code {
    display: block;
    background: rgba(255,255,255,0.1);
    color: #e2e8f0;
    padding: 0.6rem;
    border-radius: 0.8rem;
    font-family: 'Courier New', monospace;
    margin-top: 0.4rem;
  }
  .walletButton {
    margin-top: 1.4rem;
    padding: 0.9rem;
    border: none;
    border-radius: 999px;
    font-weight: 800;
    font-size: 1rem;
    color: #020617;
    background: linear-gradient(135deg, #22d3ee, #67e8f9);
    cursor: pointer;
    transition: transform 0.2s;
  }
  .walletButton:hover {
    transform: translateY(-2px);
  }
  /* Footer */
  .footer {
    text-align: center;
    padding: 2rem 1rem 3rem;
    background: rgba(255,255,255,0.05);
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .footer p {
    margin: 0;
    color: #94a3b8;
    font-size: 0.9rem;
  }
  @media (max-width: 640px) {
    .navLinks {
      gap: 0.5rem;
    }
    .heroContent {
      padding-top: 4rem;
    }
    .useCases {
      padding-top: 3rem;
    }
    .walletSection {
      padding-top: 3rem;
    }
  }
`;
