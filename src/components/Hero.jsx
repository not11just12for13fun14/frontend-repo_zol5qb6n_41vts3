import { ArrowRight, Shield, Globe, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            La neobank cordless dalla Svizzera che connette innovatori e comunità in movimento
          </h1>
          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Conti globali, pagamenti istantanei e strumenti per l'inclusione finanziaria — costruiti per chi crea il futuro,
            dai ricchi hub d'innovazione ai campi come Kakuma.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#apri" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700">
              Apri conto ora
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">
              Scopri di più
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="flex items-center gap-2"><Shield className="text-emerald-600" size={18}/> Sicurezza svizzera</div>
            <div className="flex items-center gap-2"><Globe className="text-emerald-600" size={18}/> IBAN multi-paese</div>
            <div className="flex items-center gap-2"><Sparkles className="text-emerald-600" size={18}/> Zero filiali, 100% mobile</div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-1">
            <div className="h-full w-full rounded-2xl bg-white p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Saldo totale</p>
                <p className="mt-1 text-4xl font-bold tracking-tight">CHF 24'580.50</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Pagamenti</p>
                  <p className="mt-1 text-xl font-semibold">Istantanei</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Cambio</p>
                  <p className="mt-1 text-xl font-semibold">Multi-valuta</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 w-full">Attiva carta virtuale</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
