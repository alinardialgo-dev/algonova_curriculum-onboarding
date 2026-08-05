import React, { useState } from 'react';
import { Course } from '../types';
import { X, Compass, Sparkles, Check, ArrowRight, ArrowLeft, Lightbulb, User, Smile } from 'lucide-react';

interface CourseFinderWizardProps {
  courses: Course[];
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const CourseFinderWizard: React.FC<CourseFinderWizardProps> = ({
  courses,
  onClose,
  onSelectCourse
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [interest, setSelectedInterest] = useState<string | null>(null);

  const handleAgeSelect = (age: number) => {
    setSelectedAge(age);
    setStep(2);
  };

  const handleInterestSelect = (interestKey: string) => {
    setSelectedInterest(interestKey);
    setStep(3);
  };

  // Logic to find recommended courses
  const getRecommendations = () => {
    if (!selectedAge || !interest) return [];

    return courses.filter((c) => {
      // Age check
      const ageMatch = selectedAge >= c.minAge && selectedAge <= c.maxAge + 1;
      
      // Interest match
      let interestMatch = false;
      if (interest === 'games') {
        interestMatch = c.category === 'coding' || c.tools.includes('Scratch') || c.tools.includes('Roblox Studio');
      } else if (interest === 'design') {
        interestMatch = c.category === 'design_ai' || c.slug === 'graphic-design' || c.slug === 'digital-literacy';
      } else if (interest === 'math') {
        interestMatch = c.category === 'math' || c.slug.includes('math');
      } else if (interest === 'ai_tech') {
        interestMatch = c.slug === 'artificial-intelligence' || c.slug === 'python-pro' || c.slug === 'python-start' || c.slug === 'digital-literacy';
      }

      return ageMatch && interestMatch;
    });
  };

  const recommendedCourses = getRecommendations();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
            <Compass className="w-4 h-4" />
            <span>Wizard Panduan Belajar</span>
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight">
            Rekomendasi Kursus Tepat Untuk Anak Anda
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Jawab 2 pertanyaan singkat untuk menemukan program belajar yang paling pas.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mt-4">
            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-amber-400' : 'bg-slate-700'}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-amber-400' : 'bg-slate-700'}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-amber-400' : 'bg-slate-700'}`} />
          </div>
        </div>

        {/* Wizard Body */}
        <div className="p-6">
          
          {/* STEP 1: PILIH USIA */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <User className="w-5 h-5 text-amber-500" />
                <span>Langkah 1: Berapa usia anak Anda saat ini?</span>
              </h4>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { age: 6, label: '5 - 7 Tahun', desc: 'TK B - 1 SD' },
                  { age: 9, label: '8 - 10 Tahun', desc: '2 - 4 SD' },
                  { age: 12, label: '11 - 14 Tahun', desc: '5 SD - SMP' },
                  { age: 16, label: '15 - 17 Tahun', desc: 'SMA / Pemula Lanjutan' }
                ].map((item) => (
                  <button
                    key={item.age}
                    onClick={() => handleAgeSelect(item.age)}
                    className="p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-left transition flex flex-col justify-between space-y-1 group cursor-pointer"
                  >
                    <span className="font-extrabold text-base text-slate-900 group-hover:text-amber-700">
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: PILIH MINAT */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Smile className="w-5 h-5 text-amber-500" />
                  <span>Langkah 2: Apa kecenderungan atau minat anak?</span>
                </h4>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Kembali
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'games', title: 'Game & Animasi Interaktif', desc: 'Suka main game & pengen bikin game ciptaan sendiri' },
                  { id: 'design', title: 'Desain, Seni & Kreativitas', desc: 'Suka menggambar, ilustrasi, warna, & komik' },
                  { id: 'math', title: 'Logika, Teka-Teki & Angka', desc: 'Suka memecahkan teka-teki logika & tantangan matematika' },
                  { id: 'ai_tech', title: 'Koding Teks & AI Cerdas', desc: 'Penasaran dengan koding beneran, Python, & teknologi AI' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleInterestSelect(item.id)}
                    className="p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-left transition space-y-1 group cursor-pointer"
                  >
                    <span className="font-extrabold text-sm text-slate-900 group-hover:text-amber-700 block">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-500 leading-relaxed block">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: HASIL REKOMENDASI */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
                  <span>Rekomendasi Terbaik Untuk Anak Anda</span>
                </h4>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Ulangi
                </button>
              </div>

              {recommendedCourses.length === 0 ? (
                <div className="p-6 text-center bg-slate-50 rounded-2xl border text-slate-600 text-sm">
                  Semua program kami cocok diajarkan dari tingkat dasar. Anda dapat melihat katalog lengkap kami.
                </div>
              ) : (
                <div className="space-y-3">
                  {recommendedCourses.slice(0, 3).map((course) => (
                    <div
                      key={course.id}
                      className="bg-amber-50/50 border-2 border-amber-200 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                            {course.categoryName}
                          </span>
                          <span className="text-xs font-bold text-slate-600">
                            {course.ageRange}
                          </span>
                        </div>
                        <h5 className="font-extrabold text-slate-900 text-base">
                          {course.title}
                        </h5>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {course.shortDescription}
                        </p>
                      </div>

                      <div className="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectCourse(course);
                          }}
                          className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-xs font-extrabold text-slate-800 shadow-2xs transition flex-1 sm:flex-none text-center"
                        >
                          Lihat Silabus Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
