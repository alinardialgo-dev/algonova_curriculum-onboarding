import React, { useState } from 'react';
import { CourseModule, Lesson } from '../types';
import { ChevronDown, ChevronUp, FileText, ExternalLink, CheckCircle2, Search, Target, Wrench, BookOpen } from 'lucide-react';

interface SyllabusAccordionProps {
  modules: CourseModule[];
  courseTitle: string;
}

export const SyllabusAccordion: React.FC<SyllabusAccordionProps> = ({ modules, courseTitle }) => {
  const [openLessonId, setOpenLessonId] = useState<string | null>(
    modules[0]?.lessons[0]?.id || null
  );
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLesson = (id: string) => {
    setOpenLessonId(openLessonId === id ? null : id);
  };

  const filteredModules = modules.map(m => ({
    ...m,
    lessons: m.lessons.filter(l =>
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.materi && l.materi.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (l.alurCerita && l.alurCerita.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(m => m.lessons.length > 0);

  return (
    <div className="space-y-4">
      
      {/* Syllabus Search Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>Eksplorasi Silabus {courseTitle}</span>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari dalam materi & topik silabus..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      {filteredModules.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-sm">
          Tidak ditemukan materi silabus yang cocok dengan pencarian "{searchQuery}".
        </div>
      ) : (
        filteredModules.map((module) => (
          <div key={module.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            
            {/* Module Header */}
            <div className="bg-slate-100/80 px-5 py-3 border-b border-slate-200 font-extrabold text-sm text-slate-800 flex items-center justify-between">
              <span>{module.title}</span>
              <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                {module.lessons.length} Pertemuan
              </span>
            </div>

            {/* Lessons Accordion List */}
            <div className="divide-y divide-slate-100">
              {module.lessons.map((lesson) => {
                const isOpen = openLessonId === lesson.id;
                return (
                  <div key={lesson.id} className="transition-colors">
                    
                    {/* Lesson Header Button */}
                    <button
                      onClick={() => toggleLesson(lesson.id)}
                      className={`w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-sm transition-colors ${
                        isOpen ? 'bg-amber-50/70 text-amber-900 font-bold' : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0">
                          L{lesson.lessonNumber}
                        </span>
                        <span className="line-clamp-1">{lesson.title}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {lesson.url && (
                          <span className="hidden sm:inline-block text-[11px] font-medium text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                            Dokumen Metodologi
                          </span>
                        )}
                        {isOpen ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </button>

                    {/* Lesson Detail Content */}
                    {isOpen && (
                      <div className="px-5 py-4 bg-amber-50/20 text-xs text-slate-700 space-y-3.5 border-t border-amber-100">
                        
                        {/* Storyline / Alur Cerita if available */}
                        {lesson.alurCerita && (
                          <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-2xs">
                            <p className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                              🚀 Alur Cerita & Sinopsis:
                            </p>
                            <p className="text-slate-600 leading-relaxed">{lesson.alurCerita}</p>
                          </div>
                        )}

                        {/* Materi */}
                        {lesson.materi && (
                          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                            <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-amber-500" /> Ringkasan Materi:
                            </p>
                            <p className="text-slate-600 leading-relaxed">{lesson.materi}</p>
                          </div>
                        )}

                        {/* Hasil Belajar / Tujuan */}
                        {lesson.hasilBelajar && (
                          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                            <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                              <Target className="w-3.5 h-3.5 text-emerald-500" /> Target Pembelajaran:
                            </p>
                            <p className="text-slate-600 leading-relaxed">{lesson.hasilBelajar}</p>
                          </div>
                        )}

                        {/* Array Goals */}
                        {lesson.tujuan && Array.isArray(lesson.tujuan) && (
                          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                            <p className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                              <Target className="w-3.5 h-3.5 text-emerald-500" /> Target Pembelajaran:
                            </p>
                            <ul className="space-y-1 list-disc list-inside text-slate-600">
                              {lesson.tujuan.map((t, idx) => (
                                <li key={idx}>{t}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tools used */}
                        {lesson.tools && (
                          <div className="flex items-center gap-2 text-slate-600 font-medium pt-1">
                            <Wrench className="w-3.5 h-3.5 text-amber-500" />
                            <span>Tools Praktik: <strong className="text-slate-800">{lesson.tools}</strong></span>
                          </div>
                        )}

                        {/* External Link for Official Methodology Doc */}
                        {lesson.url && (
                          <div className="pt-2">
                            <a
                              href={lesson.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition shadow-2xs"
                            >
                              <span>Lihat Detail Panduan Metodologi Google Docs</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        ))
      )}

    </div>
  );
};
