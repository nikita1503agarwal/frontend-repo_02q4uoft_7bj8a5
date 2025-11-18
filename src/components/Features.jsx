import { Star, MessageSquareQuote, ThumbsUp, BarChart3, ShieldCheck, Sparkles } from 'lucide-react';

function Feature({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-slate-900/60 p-3 text-cyan-300 ring-1 ring-cyan-500/10">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300/90">{children}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="vorteile" className="relative w-full bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200">Warum RateMyDrive?</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Spaß, Anerkennung und gute Vibes</h2>
          <p className="mt-3 text-slate-300/90">Scannen. Feedback. Grinsen. Unser System ist auf positive, kreative Bewertungen ausgelegt — für jede Fahrt.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={MessageSquareQuote} title="Sofort-Feedback">
            Einfach QR-Code scannen und direkt anonym bewerten — super schnell und ohne App-Zwang.
          </Feature>
          <Feature icon={Sparkles} title="Kreative Bewertungen">
            Von „smooth wie Butter" bis „parkt wie ein Profi" – hier ist Humor Programm.
          </Feature>
          <Feature icon={ThumbsUp} title="Positive Community">
            Schlechte Laune bleibt draußen. Wir feiern gute Fahrmomente und nette Gesten.
          </Feature>
          <Feature icon={BarChart3} title="Eigene Statistiken">
            Behalte deine Fahrer-Highlights im Blick – übersichtlich und motivierend.
          </Feature>
          <Feature icon={ShieldCheck} title="Privatsphäre by Design">
            Bewertungen sind anonym und sicher – du behältst die Kontrolle über dein Profil.
          </Feature>
          <Feature icon={Star} title="Für jedes Fahrzeug">
            Egal ob Auto, Motorrad oder Camper – RateMyDrive passt zu deinem Lifestyle.
          </Feature>
        </div>
      </div>
    </section>
  );
}

export default Features;
