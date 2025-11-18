function CTA() {
  return (
    <section id="cta" className="relative bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-3xl font-bold text-white">Jetzt losfahren & bewertet werden!</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">
          Werde Teil der Community, die Autofahren wieder freundlicher, witziger und persönlicher macht. Hol dir jetzt deinen QR‑Sticker und starte deine RateMyDrive‑Journey!
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:brightness-110">
            Jetzt bestellen
          </a>
          <a href="#vorteile" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Vorteile ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
