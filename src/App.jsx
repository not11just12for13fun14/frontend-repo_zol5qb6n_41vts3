import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />

        <section id="contatti" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Parla con noi</h2>
                <p className="mt-4 text-slate-600 max-w-prose">
                  Siamo qui per aiutarti ad aprire il tuo conto e connettere la tua comunità alla finanza di domani.
                  Scrivici e ti risponderemo entro 24 ore.
                </p>
                <div className="mt-6 space-y-2 text-slate-700">
                  <p>Email: hello@cordlessbank.ch</p>
                  <p>HQ: Zürich, Switzerland</p>
                </div>
              </div>
              <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <label className="block text-sm font-medium text-slate-700">Nome</label>
                <input type="text" className="mt-1 w-full rounded-md border border-slate-300 focus:ring-emerald-500 focus:border-emerald-500 px-3 py-2" placeholder="Il tuo nome" />
                <label className="block mt-4 text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-slate-300 focus:ring-emerald-500 focus:border-emerald-500 px-3 py-2" placeholder="tu@esempio.com" />
                <label className="block mt-4 text-sm font-medium text-slate-700">Messaggio</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-slate-300 focus:ring-emerald-500 focus:border-emerald-500 px-3 py-2" placeholder="Come possiamo aiutarti?" />
                <button type="button" className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 w-full">Invia</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Cordless NeoBank — Swiss-built, globally inclusive.</p>
          <div className="flex gap-4">
            <a href="#features" className="hover:text-slate-900">Caratteristiche</a>
            <a href="#contatti" className="hover:text-slate-900">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
