import {Hero} from './components/sections/Hero';
import {About} from './components/sections/About';
import {Portfolio} from './components/sections/Portfolio';
import {Pricing} from './components/sections/Pricing';
import {Footer} from './components/layout/Footer';
import {Marquee} from "./components/sections/Marquee.tsx";
import {Navbar} from "./components/layout/Navbar.tsx";
import {ReferralBanner} from "./components/layout/ReferralBanner.tsx";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
      <div className="bg-[#050505] min-h-screen">
          <Analytics />
          <Navbar />
          <ReferralBanner />
        <Hero />
        <About />
        <Portfolio />
        <Marquee/>
        <Pricing />
        <Footer />
      </div>
  );
}

export default App;