import React from "react";
import iotaLogo from "./assets/iota-logo.png";
import tradeBg from "./assets/trade-bg.png";

export default function App() {
  const useCases = [
    "Digital Trade Platform",
    "Trade Finance Portal",
    "Supply Chain Verification",
    "RWA Tokenization",
    "Web3 Marketplace",
    "Unlimited Subnames",
  ];

  return (
    <main className="page">
      <style>{styles}</style>

      <section
        className="hero"
        id="overview"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(2,6,23,.96), rgba(2,6,23,.74)),
            url(${tradeBg})
          `,
        }}
      >
        <nav className="nav">
          <a href="https://iota.org" target="_blank" rel="noreferrer" className="logo">
            <img src={iotaLogo} alt="IOTA" />
            <span>trade.<b>iota</b></span>
          </a>

          <div className="navLinks">
            <a href="#overview">Overview</a>
            <a href="#uses">Use Cases</a>
            <a href="#wallet">Wallet</a>
            <a href="#compliance">Compliance</a>
            <a href="https://www.tradeport.xyz/iota/collection/0x6d2c743607ef275bd6934fe5c2a7e5179cca6fbd2049cfa79de2310b74f3cf83%3A%3Aname_registration%3A%3ANameRegistration?bottomTab=trades&tab=items&tokenId=0x0e444e3a3f543fb7ce87b0ae0c913186e132962997852254026521e0795399af&modalSlug=0x6d2c743607ef275bd6934fe5c2a7e5179cca6fbd2049cfa79de2310b74f3cf83%3A%3Aname_registration%3A%3ANameRegistration&nav=1" target="_blank" rel="noreferrer" className="navBtn">
              Make an Offer
            </a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="badge">Premium Web3 Domain</p>

            <h1 className="interactiveTitle">
              <span className="tradeWord">trade.</span>
              <span className="iotaWord">iota</span>
            </h1>

            <h2>Built for the Future of Global Trade</h2>

            <p className="lead">
              A short, powerful and brandable IOTA Name for next-generation digital trade,
              tokenization, supply-chain infrastructure, wallet addressing, and Web3 commerce.
            </p>

            <div className="actions">
              <a href="https://www.tradeport.xyz/iota/collection/0x6d2c743607ef275bd6934fe5c2a7e5179cca6fbd2049cfa79de2310b74f3cf83%3A%3Aname_registration%3A%3ANameRegistration?bottomTab=trades&tab=items&tokenId=0x0e444e3a3f543fb7ce87b0ae0c913186e132962997852254026521e0795399af&modalSlug=0x6d2c743607ef275bd6934fe5c2a7e5179cca6fbd2049cfa79de2310b74f3cf83%3A%3Aname_registration%3A%3ANameRegistration&nav=1" target="_blank" rel="noreferrer" className="primary">
                Buy it on TradePort →
              </a>

              <a href="https://iotanames.com" target="_blank" rel="noreferrer" className="secondary">
                Mint your own IOTA Name
              </a>
            </div>
          </div>

          <aside className="premiumCard">
            <p>Premium Domain</p>
            <h3>trade.iota</h3>

            <ul>
              <li>Short, memorable, and easy to brand</li>
              <li>Readable wallet destination</li>
              <li>Unlimited branded subnames</li>
              <li>Built for trade, RWA, and enterprise DLT</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" id="uses">
        <p className="sectionTag">Why trade.iota?</p>
        <h2>The perfect name for serious digital trade.</h2>

        <div className="useGrid">
          {useCases.map((item) => (
            <div className="useCard" key={item}>
              <div className="icon">◇</div>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="walletRouting" id="wallet">
        <div>
          <p className="sectionTag">Human-Readable Wallet</p>
          <h2>Send directly to <span>trade.iota</span></h2>
          <p>
            Replace long wallet addresses with a trusted, simple IOTA Name.
            trade.iota can become a payment identity for invoices, settlement,
            tokenized assets, and global trade operations.
          </p>
        </div>

        <div className="walletDemo">
          <div className="walletBox old">
            <small>Long wallet address</small>
            <code>0x8f29ab13c7d91ac4f99b29fd3a12ef77bb81aa9</code>
          </div>

          <div className="arrow">→</div>

          <div className="walletBox new">
            <small>Human-readable address</small>
            <strong>trade.iota</strong>
          </div>
        </div>
      </section>

      <section className="subnames">
        <p className="sectionTag">Mintable Subnames</p>
        <h2>Build an ecosystem under trade.iota.</h2>

        <div className="subGrid">
          {[
            "pay.trade.iota",
            "docs.trade.iota",
            "rwa.trade.iota",
            "logistics.trade.iota",
            "market.trade.iota",
            "customs.trade.iota",
          ].map((name) => (
            <div className="subCard" key={name}>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="compliance" id="compliance">
        <div className="complianceGlow" />

        <div>
          <p className="sectionTag">Compliance Notice</p>
          <p>
            This page advertises the possible sale of a domain name only.
            It is not an investment solicitation, securities offering, token sale,
            exchange service, broker/dealer service, lending product, or promise of profit.
          </p>

          <p>
            No equity, shares, dividends, yield, tokens, or financial returns are being offered.
          </p>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Interested in acquiring <span>trade.iota?</span></h2>
          <p>Serious inquiries are welcome. Send your offer and preferred transfer process.</p>
        </div>

        <a href="https://tradeport.xyz" target="_blank" rel="noreferrer" className="primary">
          Contact Seller →
        </a>
      </section>

      <footer className="footer">
        <strong>trade.<span>iota</span></strong>
        <p>
          © 2026 trade.iota. Domain sale only. Not affiliated with or endorsed by IOTA unless expressly stated.
        </p>
      </footer>
    </main>
  );
}

const styles = `
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#020617}

.page{
  min-height:100vh;
  background:#020617;
  color:white;
  font-family:Inter,system-ui,sans-serif;
}

.hero{
  min-height:100vh;
  background-size:cover;
  background-position:center;
  padding:28px;
  border-bottom:1px solid rgba(255,255,255,.12);
  position:relative;
  overflow:hidden;
}

.hero::after{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 20% 20%,rgba(34,211,238,.18),transparent 32%),
    radial-gradient(circle at 80% 80%,rgba(124,58,237,.16),transparent 36%);
  pointer-events:none;
}

.nav{
  position:relative;
  z-index:2;
  max-width:1180px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
}

.logo{
  display:flex;
  align-items:center;
  gap:12px;
  color:white;
  text-decoration:none;
  font-size:30px;
  font-weight:900;
}

.logo img{
  width:48px;
  height:48px;
  border-radius:16px;
  transition:.35s ease;
}

.logo:hover img{
  transform:rotate(8deg) scale(1.08);
  box-shadow:0 0 30px rgba(34,211,238,.45);
}

.logo b,
.iotaWord,
.footer span,
.cta span,
.walletRouting h2 span{
  color:#22d3ee;
}

.navLinks{
  display:flex;
  align-items:center;
  gap:28px;
}

.navLinks a{
  color:white;
  text-decoration:none;
  text-transform:uppercase;
  font-size:12px;
  font-weight:900;
  letter-spacing:.08em;
  transition:.25s ease;
}

.navLinks a:hover{
  color:#22d3ee;
}

.navBtn,
.primary{
  background:linear-gradient(135deg,#14b8a6,#22d3ee);
  color:#020617!important;
  padding:16px 24px;
  border-radius:14px;
  font-weight:900;
  text-decoration:none;
  box-shadow:0 18px 50px rgba(34,211,238,.25);
  transition:.3s ease;
}

.navBtn:hover,
.primary:hover{
  transform:translateY(-4px);
  box-shadow:0 26px 70px rgba(34,211,238,.38);
}

.heroGrid{
  position:relative;
  z-index:2;
  max-width:1180px;
  margin:0 auto;
  padding:120px 0 80px;
  display:grid;
  grid-template-columns:1fr 350px;
  gap:70px;
  align-items:center;
}

.badge{
  display:inline-block;
  padding:10px 16px;
  border:1px solid rgba(34,211,238,.55);
  border-radius:999px;
  color:#a5f3fc;
  text-transform:uppercase;
  letter-spacing:.16em;
  font-size:12px;
  font-weight:900;
  background:rgba(34,211,238,.08);
}

.interactiveTitle{
  cursor:pointer;
  margin:24px 0 12px;
  font-size:clamp(70px,14vw,145px);
  line-height:.85;
  letter-spacing:-.09em;
  transition:transform .35s ease,filter .35s ease;
}

.interactiveTitle:hover{
  transform:translateY(-6px) scale(1.025);
  filter:drop-shadow(0 0 28px rgba(34,211,238,.4));
}

.tradeWord,
.iotaWord{
  display:inline-block;
  transition:.4s ease;
}

.tradeWord{
  color:#fff;
}

.iotaWord{
  animation:iotaGlow 3s ease-in-out infinite;
}

.interactiveTitle:hover .tradeWord{
  transform:translateX(-6px);
}

.interactiveTitle:hover .iotaWord{
  transform:translateX(6px) scale(1.04);
}

@keyframes iotaGlow{
  0%,100%{text-shadow:0 0 12px rgba(34,211,238,.35)}
  50%{text-shadow:0 0 32px rgba(34,211,238,.9)}
}

.hero h2{
  font-size:clamp(30px,5vw,48px);
  margin:0;
}

.lead{
  max-width:680px;
  color:#e2e8f0;
  font-size:20px;
  line-height:1.8;
  margin-top:42px;
}

.actions{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  margin-top:40px;
}

.secondary{
  color:white;
  text-decoration:none;
  border:1px solid rgba(255,255,255,.25);
  padding:16px 24px;
  border-radius:14px;
  font-weight:900;
  background:rgba(255,255,255,.06);
  transition:.3s ease;
}

.secondary:hover{
  border-color:#22d3ee;
  transform:translateY(-4px);
}

.premiumCard,
.useCard,
.walletRouting,
.subCard,
.compliance,
.cta{
  backdrop-filter:blur(18px);
}

.premiumCard{
  padding:36px;
  border-radius:26px;
  background:rgba(2,6,23,.75);
  border:1px solid rgba(125,211,252,.28);
  box-shadow:0 30px 90px rgba(0,0,0,.45);
  transition:.35s ease;
}

.premiumCard:hover{
  transform:translateY(-8px);
  border-color:rgba(34,211,238,.6);
}

.premiumCard p,
.sectionTag{
  color:#22d3ee;
  text-transform:uppercase;
  letter-spacing:.16em;
  font-size:12px;
  font-weight:900;
}

.premiumCard h3{
  font-size:42px;
  margin:12px 0 28px;
}

.premiumCard li{
  margin:18px 0;
  color:#dbeafe;
  line-height:1.5;
}

.section,
.subnames{
  max-width:1180px;
  margin:0 auto;
  padding:80px 28px;
}

.section h2,
.subnames h2{
  font-size:clamp(32px,5vw,52px);
  max-width:720px;
  line-height:1.08;
}

.useGrid,
.subGrid{
  margin-top:34px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:16px;
}

.useCard,
.subCard{
  min-height:150px;
  padding:24px;
  border-radius:18px;
  border:1px solid rgba(125,211,252,.24);
  background:rgba(255,255,255,.04);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  transition:.3s ease;
}

.useCard:hover,
.subCard:hover{
  transform:translateY(-8px);
  border-color:#22d3ee;
  box-shadow:0 0 30px rgba(34,211,238,.18);
}

.icon{
  font-size:38px;
  color:#22d3ee;
  margin-bottom:14px;
}

.subCard{
  min-height:auto;
  align-items:flex-start;
}

.subCard strong{
  color:#a5f3fc;
}

.walletRouting{
  max-width:1180px;
  margin:50px auto;
  padding:46px;
  border-radius:28px;
  border:1px solid rgba(34,211,238,.2);
  background:rgba(255,255,255,.04);
  display:grid;
  grid-template-columns:1fr 420px;
  gap:40px;
  align-items:center;
}

.walletRouting h2{
  font-size:clamp(36px,6vw,62px);
  line-height:1;
  margin:14px 0 18px;
}

.walletRouting p{
  color:#cbd5e1;
  line-height:1.8;
  font-size:18px;
}

.walletDemo{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
}

.walletBox{
  width:100%;
  padding:24px;
  border-radius:22px;
  background:#020617;
  border:1px solid rgba(34,211,238,.18);
}

.walletBox small{
  display:block;
  margin-bottom:10px;
  color:#67e8f9;
  text-transform:uppercase;
  letter-spacing:.14em;
  font-size:11px;
  font-weight:900;
}

.walletBox code{
  display:block;
  color:#94a3b8;
  line-height:1.7;
  word-break:break-all;
}

.walletBox strong{
  font-size:42px;
  color:#22d3ee;
}

.arrow{
  font-size:42px;
  color:#22d3ee;
}

.compliance,
.cta{
  max-width:1180px;
  margin:32px auto;
  padding:34px;
  border-radius:24px;
  border:1px solid rgba(125,211,252,.24);
  background:rgba(255,255,255,.04);
}

.compliance{
  display:grid;
  grid-template-columns:260px 1fr;
  gap:34px;
  align-items:center;
}

.complianceGlow{
  height:220px;
  border-radius:20px;
  background:
    radial-gradient(circle,rgba(34,211,238,.28),transparent 60%),
    linear-gradient(135deg,rgba(34,211,238,.12),rgba(124,58,237,.14));
}

.compliance p{
  color:#cbd5e1;
  font-size:18px;
  line-height:1.75;
}

.cta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:24px;
}

.cta h2{
  margin:0;
  font-size:36px;
}

.cta p{
  color:#cbd5e1;
}

.footer{
  max-width:1180px;
  margin:0 auto;
  padding:44px 28px;
  border-top:1px solid rgba(255,255,255,.1);
  display:flex;
  justify-content:space-between;
  gap:24px;
  color:#94a3b8;
}

.footer strong{
  color:white;
  font-size:28px;
}

@media(max-width:800px){
  .hero{
    padding:22px;
    background-position:center top;
  }

  .navLinks{
    display:none;
  }

  .heroGrid,
  .walletRouting,
  .compliance{
    grid-template-columns:1fr;
  }

  .heroGrid{
    padding-top:88px;
    gap:36px;
  }

  .premiumCard{
    display:none;
  }

  .actions a{
    width:100%;
    justify-content:center;
    text-align:center;
  }

  .walletRouting{
    padding:30px;
  }

  .complianceGlow{
    display:none;
  }

  .cta,
  .footer{
    flex-direction:column;
    align-items:flex-start;
  }
}
`;
