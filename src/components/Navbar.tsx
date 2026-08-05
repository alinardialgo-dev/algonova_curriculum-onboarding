import React, { useState } from 'react';
import { Compass, BookOpen, Scale, Menu, X } from 'lucide-react';
import { FilterState } from '../types';

interface NavbarProps {
  onOpenFinder: () => void;
  onOpenCompare: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  compareCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFinder,
  onOpenCompare,
  activeSection,
  setActiveSection,
  compareCount
}) => {
  const [mobileMenuOpen, setMobileMenuButton] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('catalog')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black text-xl shadow-md shadow-amber-200">
              A
            </div>
            <div>
              <div className="font-extrabold text-xl text-slate-900 tracking-tight leading-none">
                Algonova
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Coding, Desain & Matematika Anak</p>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setActiveSection('catalog')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 ${
                activeSection === 'catalog'
                  ? 'bg-amber-50 text-amber-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              Katalog
            </button>

            <button
              onClick={onOpenFinder}
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-amber-600 hover:bg-amber-50/80 transition flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-amber-500" />
              Rekomendasi Usia
            </button>

            <button
              onClick={onOpenCompare}
              className="relative px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 transition flex items-center gap-1.5"
            >
              <Scale className="w-4 h-4 text-indigo-500" />
              Bandingkan Kursus
              {compareCount > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs font-bold bg-indigo-600 text-white rounded-full">
                  {compareCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuButton(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 space-y-3">
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setActiveSection('catalog');
                  setMobileMenuButton(false);
                }}
                className="px-3 py-2 text-center rounded-lg text-sm font-semibold bg-slate-100 text-slate-700"
              >
                Katalog Kursus
              </button>
              <button
                onClick={() => {
                  onOpenFinder();
                  setMobileMenuButton(false);
                }}
                className="px-3 py-2 text-center rounded-lg text-sm font-semibold bg-amber-50 text-amber-700"
              >
                Rekomendasi
              </button>
            </div>

            <button
              onClick={() => {
                onOpenCompare();
                setMobileMenuButton(false);
              }}
              className="w-full py-2 text-center rounded-lg text-sm font-semibold bg-indigo-50 text-indigo-700 flex items-center justify-center gap-2"
            >
              <Scale className="w-4 h-4" />
              Bandingkan Kursus ({compareCount})
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
