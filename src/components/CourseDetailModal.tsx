import React, { useState } from 'react';
import { Course, StudentProject } from '../types';
import { SyllabusAccordion } from './SyllabusAccordion';
import { X, Sparkles, Clock, Users, BookOpen, CheckCircle2, Award, ExternalLink, Play, Scale, Wrench, Share2, Printer, Check } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onToggleCompare: (courseId: string) => void;
  isCompared: boolean;
  onSelectProject: (project: StudentProject) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onToggleCompare,
  isCompared,
  onSelectProject
}) => {
  if (!course) return null;

  const [activeTab, setActiveTab] = useState<'silabus' | 'projects' | 'final' | 'outcomes'>('silabus');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className={`p-6 sm:p-8 text-white relative ${
          course.category === 'coding' ? 'bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500' :
          course.category === 'design_ai' ? 'bg-gradient-to-r from-purple-700 via-pink-600 to-rose-500' :
          'bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500'
        }`}>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 max-w-2xl">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                Program #{course.number} • {course.categoryName}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 text-slate-900">
                {course.ageRange}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/20">
                Tingkat {course.difficulty}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {course.title}
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              {course.shortDescription}
            </p>

            {/* Quick Meta Stats */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-white/80">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-white/90" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-white/90" />
                <span>Ukuran Kelas: {course.classSize}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-white/90" />
                <span>Bahasa Pengantar: {course.language}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('silabus')}
            className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition whitespace-nowrap ${
              activeTab === 'silabus'
                ? 'border-amber-500 text-amber-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Silabus & Modul ({course.modules.length})
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-amber-500 text-amber-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Contoh Proyek Siswa ({course.projects.length})
          </button>

          <button
            onClick={() => setActiveTab('final')}
            className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition whitespace-nowrap ${
              activeTab === 'final'
                ? 'border-amber-500 text-amber-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Proyek Akhir
          </button>

          <button
            onClick={() => setActiveTab('outcomes')}
            className={`py-3.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition whitespace-nowrap ${
              activeTab === 'outcomes'
                ? 'border-amber-500 text-amber-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Fungsi & Hasil Belajar
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: SILABUS */}
          {activeTab === 'silabus' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-2">Tentang Program {course.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{course.fullDescription}</p>
              </div>

              {/* Tools Badges */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-amber-500" /> Platform & Tools Yang Dikuasai:
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-2xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accordion */}
              <SyllabusAccordion modules={course.modules} courseTitle={course.title} />
            </div>
          )}

          {/* TAB 2: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <h4 className="font-extrabold text-slate-900 text-base">Hasil Karya Proyek Siswa Kursus ini</h4>
              <p className="text-xs text-slate-500">
                Klik proyek untuk melihat video demonstrasi, link Roblox, atau pratinjau dokumen karya asli buatan murid.
              </p>

              {course.projects.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed text-slate-500 text-sm">
                  Proyek siswa untuk kursus ini ditampilkan saat sesi presentasi kelas dan wisuda modul.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => onSelectProject(project)}
                      className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition cursor-pointer flex flex-col justify-between group space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          {project.lesson && (
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                              Lesson {project.lesson}
                            </span>
                          )}
                          <span className="text-[11px] font-semibold text-slate-400 uppercase">
                            {project.type}
                          </span>
                        </div>

                        <h5 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-600 transition">
                          {project.title}
                        </h5>
                        <p className="text-xs text-slate-500 font-medium mb-2">
                          Oleh: {project.author} {project.age ? `(${project.age} thn)` : ''}
                        </p>
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-600">
                        <span>Lihat Karya & Video</span>
                        <Play className="w-3.5 h-3.5 fill-amber-500" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FINAL PROJECT */}
          {activeTab === 'final' && (
            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200/80 space-y-4 text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-amber-900">{course.finalProject.title}</h4>
                  {course.finalProject.subtitle && (
                    <p className="text-xs font-bold text-amber-700">{course.finalProject.subtitle}</p>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-amber-100">
                {course.finalProject.description}
              </p>
            </div>
          )}

          {/* TAB 4: OUTCOMES */}
          {activeTab === 'outcomes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200/80 space-y-3">
                <h4 className="font-extrabold text-emerald-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Apa yang Siswa Dapatkan?
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {course.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-200/80 space-y-3">
                <h4 className="font-extrabold text-blue-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" /> Fungsi Utama Kursus
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {course.primaryFunctions.map((func, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{func}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(course.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{isCompared ? 'Dalam Pembandingan' : 'Bandingkan'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1"
              title="Bagikan Tautan"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-800 bg-slate-200 hover:bg-slate-300 transition"
            >
              Tutup
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
