import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/layout/Navbar';
import { ReferralBanner } from './components/layout/ReferralBanner';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { Capabilities } from './components/sections/Capabilities';
import { Marquee } from './components/sections/Marquee';
import { Pricing } from './components/sections/Pricing';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0a0a0a] text-white">
      <Analytics />
      <CustomCursor />
      <Navbar />
      <ReferralBanner />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Capabilities />
        <Marquee />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
