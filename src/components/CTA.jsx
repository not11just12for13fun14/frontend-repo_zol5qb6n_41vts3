import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="apri" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 p-1">
          <div className="rounded-3xl bg-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Apri il tuo conto in pochi minuti</h3>
              <p className="mt-3 text-slate-600 max-w-xl">Niente filiali, zero carta. Verifica rapida, IBAN multi‑valuta e carte virtuali pronte subito.</p>
            </div>
            <a href="#contatti" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-white hover:bg-slate-800">
              Inizia ora
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
