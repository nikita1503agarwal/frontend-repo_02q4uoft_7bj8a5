import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(56,189,248,0.25),transparent_60%)]"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur">
          Neu: RateMyDrive Starter-Set jetzt verfügbar
        </span>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow sm:text-5xl md:text-6xl">
          RateMyDrive – Die lustigste Art, Autofahrer zu bewerten!
        </h1>
        <p className="mt-4 max-w-2xl text-base text-cyan-100/90 sm:text-lg">
          Mach dein Auto zum Hingucker – mit einem QR-Code, der anderen ermöglicht, dir Komplimente, Bewertungen und witziges Feedback zu geben. Einfach scannen, lächeln, fertig!
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#angebot" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:brightness-110">
            Jetzt Starter‑Set sichern
          </a>
          <a href="#vorteile" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
