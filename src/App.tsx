import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { Pricing } from './components/sections/Pricing';
import { Footer } from './components/layout/Footer';

function App() {
  return (
      <div className="bg-[#050505] min-h-screen">
        <Hero />
        <About />
        <Portfolio />
        <div className="overflow-hidden py-20 border-y border-white/5">
          <h2 className="text-[20vw] font-black leading-none tracking-tighter text-zinc-900 select-none whitespace-nowrap">
            SCALABILITY • AUTOMATION • PERFORMANCE
          </h2>
        </div>
        <Pricing />
        <Footer />
      </div>
  );
}

export default App;