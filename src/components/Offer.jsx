function Offer() {
  return (
    <section id="angebot" className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_20%,rgba(34,211,238,0.15),transparent_60%)]"></div>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 shadow-2xl backdrop-blur">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-white">Exklusives Angebot</h3>
              <p className="mt-3 text-slate-300/90">Hol dir dein Starter-Set und werde Teil der freundlichsten Fahr-Community.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-900 text-xs font-bold">✔</span> Premium QR-Code-Sticker (wetterfest & stylisch)</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-900 text-xs font-bold">✔</span> Lifetime Zugang zur RateMyDrive-App</li>
              </ul>
            </div>
            <div className="md:text-right">
              <div className="inline-block rounded-2xl border border-cyan-400/30 bg-slate-800/60 px-8 py-6 text-left align-middle">
                <div className="text-sm uppercase tracking-wider text-cyan-300/90">Nur für kurze Zeit</div>
                <div className="mt-1 text-5xl font-extrabold text-white">9,99 €</div>
                <div className="mt-1 text-sm text-slate-300/80">einmal zahlen – für immer Spaß haben</div>
                <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:brightness-110">Starter‑Set bestellen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
