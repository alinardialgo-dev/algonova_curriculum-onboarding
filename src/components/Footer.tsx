import React from 'react';
import { Course } from '../types';
import { Heart, Trophy } from 'lucide-react';

interface FooterProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export const Footer: React.FC<FooterProps> = ({ courses, onSelectCourse }) => {
  const findAndSelect = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      onSelectCourse(course);
    }
  };

  const codingList = [
    { label: '#1 Coding Knight (Usia 5-6 tahun)', id: 'coding-knight' },
    { label: '#2 Digital Literacy (Usia 7 tahun)', id: 'digital-literacy' },
    { label: '#3 Visual Programing (Usia 8-11 tahun)', id: 'visual-programming' },
    { label: '#4 Game Design (Roblox) (Usia 10-14 tahun)', id: 'game-design-roblox' },
    { label: '#5 AI (Usia 12-15 tahun)', id: 'artificial-intelligence' },
    { label: '#6 Python Start (Usia 12-15 tahun)', id: 'python-start' },
    { label: '#7 Python Pro (Usia 16-17 tahun)', id: 'python-pro' },
    { label: '#8 Front End (Usia 16-17 tahun)', id: 'python-pro' },
  ];

  const desainList = [
    { label: '#1 Coding Knight (Usia 5-6 tahun)', id: 'coding-knight' },
    { label: '#2 Digital Literacy (Usia 7 tahun)', id: 'digital-literacy' },
    { label: '#3 Design Junior (Usia 8-11 tahun)', id: 'graphic-design' },
    { label: '#4 Design Senior (Usia 12-15 tahun)', id: 'graphic-design' },
    { label: '#5 AI (Usia 12-15 tahun)', id: 'artificial-intelligence' },
  ];

  const matematikaList = [
    { label: '#1 Math Explore (Usia 6-8 tahun)', id: 'math-explorer' },
    { label: '#2 Math Master (Usia 9-13 tahun)', id: 'math-master' },
    { label: '#3 Math Tutoring (Usia 5-16 tahun)', id: 'math-tutoring' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Quick List 1: Coding */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-amber-400">
              Coding
            </h4>
            <ul className="space-y-2 font-medium text-slate-400">
              {codingList.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => findAndSelect(item.id)}
                    className="hover:text-amber-400 transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick List 2: Desain */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-amber-400">
              Desain
            </h4>
            <ul className="space-y-2 font-medium text-slate-400">
              {desainList.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => findAndSelect(item.id)}
                    className="hover:text-amber-400 transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick List 3: Matematika */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-amber-400">
              Matematika
            </h4>
            <ul className="space-y-2 font-medium text-slate-400">
              {matematikaList.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => findAndSelect(item.id)}
                    className="hover:text-amber-400 transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p>© {new Date().getFullYear()} Algonova. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Didesain oleh tim Onboarding untuk pelatihan para kandidat</span>
            <Trophy className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>juara</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
