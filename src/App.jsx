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

      {/* Hero section */}
      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(2,6,23,.96), rgba(2,6,23,.72)),
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
            <a href="#compliance">Compliance</a>
            <a href="https://tradeport.xyz" target="_blank" rel="noreferrer" className="navBtn">
              Make an Offer
            </a>
          </div>
        </nav>

        {/* Hero grid: headline + premium card */}
        <div className="heroGrid" id="overview">
          <div>
            <p className="badge">Premium Web3 Domain</p>
            <h1>trade.<span>iota</span></h1>
            <h2>Built for the Future of Global Trade</h2>
            <p className="lead">
              A short, powerful and brandable IOTA Name for next‑generation digital trade,
              tokenization, supply‑chain infrastructure, wallet addressing, and Web3 commerce platforms.
            </p>
            <div className="actions">
              <a
                href="https://tradeport.xyz"
                target="_blank"
                rel="noreferrer"
                className="primary"
              >
                Buy it on TradePort →
              </a>
              <a
                href="https://iotanames.com"
                target="_blank"
                rel="noreferrer"
                className="secondary"
              >
                Mint your own IOTA Name
              </a>
            </div>
          </div>

          {/* Premium card */}
          <aside className="premiumCard">
            <p>Premium Domain</p>
            <h3>trade.iota</h3>
            <ul>
              <li>Short, memorable, and easy to brand</li>
              <li>Human‑readable wallet destination2</li>
              <li>Unlimited branded subnames3</li>
              <li>Built for trade, RWA, and enterprise DLT</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Use‑cases section */}
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

      {/* Compliance notice */}
      <section className="compliance" id="compliance">
        <div className="complianceImage" />
        <div>
          <p className="sectionTag">Compliance Notice</p>
          <p>
            This page advertises the possible sale of a domain name only.
            It is not an investment solicitation, securities offering, token sale, exchange service,
            broker/dealer service, crowdfunding offer, lending product, or promise of profit.
          </p>
          <p>
            No equity, shares, dividends, yield, tokens, or financial returns are being offered.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta">
        <div>
          <h2>
            Interested in acquiring <span>trade.iota?</span>
          </h2>
          <p>
            Serious inquiries are welcome. Send your offer and preferred transfer process.
          </p>
        </div>
        <a href="https://tradeport.xyz" target="_blank" rel="noreferrer" className="primary">
          Contact Seller →
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <strong>
          trade.<span>iota</span>
        </strong>
        <p>
          © 2026 trade.iota. Domain sale only. Not affiliated with or endorsed by IOTA unless expressly stated.
        </p>
      </footer>
    </main>
  );
}

const styles = `
*{box-sizing:border-box}
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
}
.nav{
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
}
.navBtn,
.primary{
  background:linear-gradient(135deg,#14b8a6,#22d3ee);
  color:#020617!important;
  padding:16px 24px;
  border-radius:12px;
  font-weight:900;
  text-decoration:none;
  box-shadow:0 18px 50px rgba(34,211,238,.25);
}
.heroGrid{
  max-width:1180px;
  margin:0 auto;
  padding:120px 0 70px;
  display:grid;
  grid-template-columns:1fr 340px;
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
  letter-spacing:.14em;
  font-size:12px;
  font-weight:900;
  background:rgba(34,211,238,.08);
}
h1{
  margin:24px 0 8px;
  font-size:clamp(70px,14vw,145px);
  line-height:.85;
  letter-spacing:-.09em;
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
  border-radius:12px;
  font-weight:900;
  background:rgba(255,255,255,.06);
}
.premiumCard{
  padding:36px;
  border-radius:24px;
  background:rgba(2,6,23,.75);
  border:1px solid rgba(125,211,252,.28);
  backdrop-filter:blur(18px);
  box-shadow:0 30px 90px rgba(0,0,0,.45);
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
.section{
  max-width:1180px;
  margin:0 auto;
  padding:70px 28px;
}
.section h2{
  font-size:clamp(32px,5vw,48px);
  max-width:620px;
  line-height:1.08;
}
.useGrid{
  margin-top:34px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:16px;
}
.useCard{
  min-height:150px;
  padding:22px;
  border-radius:16px;
  border:1px solid rgba(125,211,252,.24);
  background:rgba(255,255,255,.035);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
}
.icon{
  font-size:38px;
  color:#22d3ee;
  margin-bottom:14px;
}
.compliance,
.cta{
  max-width:1180px;
  margin:32px auto;
  padding:34px;
  border-radius:22px;
  border:1px solid rgba(125,211,252,.24);
  background:rgba(255,255,255,.04);
}
.compliance{
  display:grid;
  grid-template-columns:380px 1fr;
  gap:36px;
  align-items:center;
}
.complianceImage{
  height:230px;
  border-radius:18px;
  background:linear-gradient(135deg,rgba(34,211,238,.16),rgba(124,58,237,.16));
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
  .hero{padding:22px;background-position:center top}
  .nav{align-items:flex-start}
  .navLinks{display:none}
  .heroGrid{grid-template-columns:1fr;padding-top:90px;gap:36px}
  .premiumCard{display:none}
  .actions a{width:100%;text-align:center;justify-content:center}
  .compliance{grid-template-columns:1fr}
  .complianceImage{display:none}
  .cta{flex-direction:column;align-items:flex-start}
  .footer{flex-direction:column}
}
`;
