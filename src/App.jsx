import Hero from './components/Hero';
import Features from './components/Features';
import Offer from './components/Offer';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-cyan-500/30 shadow-md"></div>
            <span className="text-lg font-bold tracking-tight">RateMyDrive</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-200/90 sm:flex">
            <a href="#vorteile" className="hover:text-white">Warum?</a>
            <a href="#angebot" className="hover:text-white">Angebot</a>
            <a href="#cta" className="hover:text-white">Jetzt starten</a>
          </nav>
          <a href="#angebot" className="hidden rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-cyan-500/30 hover:brightness-110 sm:inline-flex">Starter‑Set</a>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        <Features />
        <Offer />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          <div className="mb-2 font-semibold text-slate-200">RateMyDrive</div>
          <p>Die lustigste Art, Autofahrer zu bewerten. Bleib freundlich, fahr sicher und verbreite gute Laune.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
