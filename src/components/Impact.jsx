import { HeartHandshake, Users, Building2 } from 'lucide-react';

export default function Impact() {
  const stats = [
    { icon: Users, label: "Utenti serviti", value: "120k+" },
    { icon: HeartHandshake, label: "Rimesse facilitate", value: "CHF 85M" },
    { icon: Building2, label: "Comunità partner", value: "55+" },
  ];

  return (
    <section id="impact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Finanza che include</h2>
            <p className="mt-4 text-slate-600">
              Portiamo servizi finanziari di qualità svizzera a innovatori, PMI e comunità in movimento. Insieme a partner
              locali, favoriamo l'accesso a capitale, pagamenti digitali e risparmio sicuro anche in contesti come Kakuma.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <Icon size={20} />
                  </div>
                  <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
                  <p className="text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-slate-900">Accesso equo, senza compromessi</h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc list-inside">
              <li>Identità digitale e KYC semplificati</li>
              <li>Conti sicuri, carte e pagamenti peer‑to‑peer</li>
              <li>Tariffe trasparenti per rimesse e cambi</li>
              <li>Educazione finanziaria e supporto multilingue</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
