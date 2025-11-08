import { Smartphone, CreditCard, Globe, ShieldCheck, Send, ChartBar } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Smartphone,
      title: "Banking cordless",
      desc: "Gestisci tutto da mobile: onboarding KYC, bonifici, carte virtuali e fisiche senza filiali.",
    },
    {
      icon: CreditCard,
      title: "Carte intelligenti",
      desc: "Controlli in tempo reale, budget condivisi e carte usa-e-getta per acquisti sicuri.",
    },
    {
      icon: Globe,
      title: "Multi-valuta & IBAN",
      desc: "Conti in CHF, EUR, USD e IBAN locali per ricevere e inviare pagamenti ovunque.",
    },
    {
      icon: ShieldCheck,
      title: "Protezione svizzera",
      desc: "Standard di sicurezza elevati, dati cifrati e conformità europea e svizzera.",
    },
    {
      icon: Send,
      title: "Rimesse inclusive",
      desc: "Tariffe trasparenti per connettere innovatori e comunità come Kakuma con pagamenti veloci.",
    },
    {
      icon: ChartBar,
      title: "Insights finanziari",
      desc: "Analisi smart della spesa e strumenti per PMI, creator e startup globali.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Potenza semplice, ovunque tu sia</h2>
          <p className="mt-4 text-slate-600">Strumenti moderni per costruire, inviare, ricevere e crescere – senza confini.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
