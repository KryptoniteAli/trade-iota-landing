import React from "react";

import iotaLogo from "./assets/iota-logo.png";
import tradeBg from "./assets/trade-bg.png";

export default function App() {
  const useCases = [
    "Premium IOTA Name for global trade identity",
    "Readable wallet address for payments and assets",
    "Gateway for invoices, certificates, and trade documents",
    "Brandable entry point for RWA and NFT trade assets",
    "Unlimited subnames minting for teams, shipments, invoices, and partners",
  ];

  return (
    <main className="page">
      <style>{styles}</style>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(2,6,23,0.92),
              rgba(15,23,42,0.88)
            ),
            url(${tradeBg})
          `,
        }}
      >
        {/* NAV */}
        <nav className="nav">
          <a
            href="https://iota.org"
            target="_blank"
            rel="noreferrer"
            className="brand"
          >
            <img src={iotaLogo} alt="IOTA" />

            <div>
              <strong>IOTA</strong>
              <span>Official Network</span>
            </div>
          </a>
        </nav>

        {/* HERO CONTENT */}
        <div className="heroContent">
          <p className="badge">PREMIUM IOTA NAME FOR SALE</p>

          <h1>
            Own <span>trade.iota</span>
          </h1>

          <p className="lead">
            A premium human-readable IOTA Name designed for
            global trade, tokenized assets, wallet addressing,
            supply-chain verification, and digital commerce.
          </p>

          <div className="actions">
            <a
              href="https://iotanames.com"
              target="_blank"
              rel="noreferrer"
              className="primary"
            >
              View on IOTA Names
            </a>

            <a
              href="https://tradeport.xyz"
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              Explore TradePort
            </a>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <p className="sectionLabel">Why trade.iota matters</p>

        <h2>A premium digital identity for global trade.</h2>

        <p className="sectionText">
          trade.iota can function as a wallet address,
          enterprise identity, document hub, payment gateway,
          and tokenized trade infrastructure layer.
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

      {/* SUBNAMES */}
      <section className="subnames">
        <div>
          <p className="sectionLabel">Unlimited Subnames</p>

          <h2>Create unlimited branded subnames.</h2>

          <p className="sectionText">
            Build a complete trade ecosystem under trade.iota.
            Create custom names for invoices, payments,
            exporters, logistics providers, customs,
            trade finance, and supply-chain operations.
          </p>
        </div>

        <div className="subnameCard">
          <span>Examples</span>

          <strong>pay.trade.iota</strong>
          <strong>shipping.trade.iota</strong>
          <strong>invoice.trade.iota</strong>
          <strong>africa.trade.iota</strong>
          <strong>customs.trade.iota</strong>
        </div>
      </section>

      {/* WALLET */}
      <section className="wallet">
        <div>
          <p className="sectionLabel">Wallet Address</p>

          <h2>Send payments directly to trade.iota</h2>

          <p className="sectionText">
            Replace complex wallet addresses with a readable,
            trusted digital identity for payments,
            tokenized assets, invoices, and trade settlement.
          </p>
        </div>

        <div className="walletCard">
          <small>Recipient</small>

          <strong>trade.iota</strong>

          <small>Wallet Address</small>

          <code>0x8f2a...91b2</code>

          <button>Send / Transfer</button>
        </div>
      </section>
    </main>
  );
}

const styles = `
  *{
    box-sizing:border-box;
  }

  body{
    margin:0;
    background:#020617;
  }

  .page{
    min-height:100vh;
    background:#020617;
    color:white;
    font-family:Inter, sans-serif;
  }

  .hero{
    min-height:100vh;
    background-size:cover;
    background-position:center;
    padding:24px;
    position:relative;
  }

  .hero::before{
    content:"";
    position:absolute;
    inset:0;
    background:
      radial-gradient(circle at top right, rgba(34,211,238,0.18), transparent 30%),
      radial-gradient(circle at bottom left, rgba(124,58,237,0.2), transparent 34%);
  }

  .nav{
    position:relative;
    z-index:2;
    max-width:1180px;
    margin:0 auto;
    display:flex;
    align-items:center;
  }

  .brand{
    display:flex;
    gap:14px;
    align-items:center;
    color:white;
    text-decoration:none;
  }

  .brand img{
    width:56px;
    height:56px;
    border-radius:18px;
    background:rgba(255,255,255,0.08);
    padding:8px;
  }

  .brand strong{
    display:block;
    font-size:30px;
  }

  .brand span{
    font-size:11px;
    color:#cbd5e1;
    text-transform:uppercase;
    letter-spacing:.18em;
  }

  .heroContent{
    position:relative;
    z-index:2;
    max-width:1180px;
    margin:0 auto;
    padding:120px 0 80px;
  }

  .badge{
    display:inline-block;
    padding:12px 18px;
    border-radius:999px;
    border:1px solid rgba(34,211,238,.4);
    background:rgba(34,211,238,.12);
    color:#a5f3fc;
    font-size:12px;
    font-weight:800;
    letter-spacing:.2em;
  }

  h1{
    margin:24px 0 0;
    font-size:clamp(64px,15vw,150px);
    line-height:.9;
    letter-spacing:-.08em;
  }

  h1 span{
    display:block;
    background:linear-gradient(90deg,#fff,#67e8f9,#a78bfa);
    -webkit-background-clip:text;
    color:transparent;
    filter:drop-shadow(0 0 20px rgba(34,211,238,.3));
  }

  .lead{
    max-width:760px;
    margin-top:30px;
    color:#e2e8f0;
    font-size:clamp(20px,3vw,30px);
    line-height:1.5;
  }

  .actions{
    display:flex;
    flex-wrap:wrap;
    gap:16px;
    margin-top:36px;
  }

  .primary,
  .secondary{
    min-height:58px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:16px 24px;
    border-radius:18px;
    text-decoration:none;
    font-weight:800;
  }

  .primary{
    background:linear-gradient(135deg,#22d3ee,#67e8f9);
    color:#020617;
    box-shadow:0 18px 60px rgba(34,211,238,.28);
  }

  .secondary{
    color:white;
    border:1px solid rgba(255,255,255,.18);
    background:rgba(255,255,255,.06);
  }

  .section,
  .subnames,
  .wallet{
    max-width:1180px;
    margin:0 auto;
    padding:90px 22px;
  }

  .sectionLabel{
    color:#67e8f9;
    text-transform:uppercase;
    letter-spacing:.18em;
    font-size:12px;
    font-weight:900;
  }

  h2{
    margin-top:12px;
    font-size:clamp(36px,7vw,64px);
    line-height:1;
    letter-spacing:-.06em;
    max-width:850px;
  }

  .sectionText{
    max-width:720px;
    color:#cbd5e1;
    font-size:18px;
    line-height:1.8;
  }

  .grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
    gap:18px;
    margin-top:36px;
  }

  .card{
    padding:26px;
    border-radius:28px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.08);
    backdrop-filter:blur(12px);
  }

  .card span{
    color:#67e8f9;
    font-size:12px;
    font-weight:900;
    letter-spacing:.18em;
  }

  .card p{
    margin-top:14px;
    color:#e5e7eb;
    font-size:18px;
    line-height:1.6;
  }

  .subnames,
  .wallet{
    display:grid;
    grid-template-columns:1fr 400px;
    gap:28px;
    align-items:center;
  }

  .subnameCard,
  .walletCard{
    padding:28px;
    border-radius:32px;
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.1);
    backdrop-filter:blur(20px);
    box-shadow:0 30px 80px rgba(0,0,0,.3);
  }

  .subnameCard span,
  .walletCard small{
    display:block;
    color:#67e8f9;
    text-transform:uppercase;
    letter-spacing:.18em;
    font-size:12px;
    font-weight:900;
    margin-bottom:14px;
  }

  .subnameCard strong{
    display:block;
    margin-top:12px;
    padding:16px;
    border-radius:18px;
    background:rgba(255,255,255,.08);
    color:#e0f2fe;
    font-size:18px;
  }

  .walletCard{
    background:white;
    color:#020617;
  }

  .walletCard strong{
    display:block;
    margin:6px 0 24px;
    font-size:48px;
    letter-spacing:-.06em;
    background:linear-gradient(90deg,#020617,#0891b2,#7c3aed);
    -webkit-background-clip:text;
    color:transparent;
  }

  .walletCard code{
    display:block;
    margin-top:8px;
    padding:16px;
    border-radius:16px;
    background:#e2e8f0;
    color:#334155;
  }

  .walletCard button{
    width:100%;
    margin-top:18px;
    border:0;
    border-radius:18px;
    padding:16px;
    background:linear-gradient(135deg,#020617,#172554);
    color:white;
    font-size:16px;
    font-weight:800;
  }

  @media(max-width:760px){

    .subnames,
    .wallet{
      grid-template-columns:1fr;
    }

    .actions a{
      width:100%;
    }

    .heroContent{
      padding-top:80px;
    }
  }
`;
