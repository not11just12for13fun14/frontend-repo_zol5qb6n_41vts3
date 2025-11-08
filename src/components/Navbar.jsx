import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg tracking-tight">Cordless NeoBank</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-slate-900">Caratteristiche</a>
            <a href="#impact" className="hover:text-slate-900">Impatto</a>
            <a href="#contatti" className="hover:text-slate-900">Contatti</a>
            <a href="#apri" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Apri conto</a>
          </div>

          <button aria-label="Apri menu" className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-slate-700">
            <a href="#features" className="hover:text-slate-900">Caratteristiche</a>
            <a href="#impact" className="hover:text-slate-900">Impatto</a>
            <a href="#contatti" className="hover:text-slate-900">Contatti</a>
            <a href="#apri" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Apri conto</a>
          </div>
        )}
      </nav>
    </header>
  );
}
