import React from 'react';
import { Course } from '../types';
import { X, Scale, Sparkles, Trash2, ArrowRight } from 'lucide-react';

interface CourseCompareModalProps {
  courses: Course[];
  comparedIds: string[];
  onRemoveCompare: (courseId: string) => void;
  onClearCompare: () => void;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const CourseCompareModal: React.FC<CourseCompareModalProps> = ({
  courses,
  comparedIds,
  onRemoveCompare,
  onClearCompare,
  onClose,
  onSelectCourse
}) => {
  const comparedCourses = courses.filter((c) => comparedIds.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Perbandingan Kursus ({comparedCourses.length})
              </h3>
              <p className="text-xs text-slate-300">
                Bandingkan target usia, tools, durasi, dan hasil pembelajaran secara berdampingan.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {comparedCourses.length > 0 && (
              <button
                onClick={onClearCompare}
                className="text-xs font-bold text-slate-400 hover:text-rose-400 px-3 py-1.5 rounded-lg border border-slate-700 transition"
              >
                Reset
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="p-6 overflow-x-auto flex-1">
          {comparedCourses.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <Scale className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="font-extrabold text-slate-700 text-base">
                Belum Ada Kursus Yang Dipilih Untuk Dibandingkan
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Klik tombol "Bandingkan" pada kartu kursus di katalog untuk membandingkan hingga 3 program kursus sekaligus.
              </p>
            </div>
          ) : (
            <table className="w-full text-xs text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-3 bg-slate-50 font-extrabold text-slate-500 uppercase tracking-wider w-1/4">
                    Kriteria
                  </th>
                  {comparedCourses.map((c) => (
                    <th key={c.id} className="p-3 bg-amber-50/50 font-extrabold text-slate-900 text-sm border-l border-slate-200 relative">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                            #{c.number} {c.categoryName}
                          </div>
                          <span>{c.title}</span>
                        </div>
                        <button
                          onClick={() => onRemoveCompare(c.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded"
                          title="Hapus dari pembanding"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                
                {/* Target Usia */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 bg-slate-50">Target Usia</td>
                  {comparedCourses.map((c) => (
                    <td key={c.id} className="p-3 border-l border-slate-200 font-extrabold text-amber-800">
                      {c.ageRange}
                    </td>
                  ))}
                </tr>

                {/* Tingkat Kesulitan */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 bg-slate-50">Tingkat Kesulitan</td>
                  {comparedCourses.map((c) => (
                    <td key={c.id} className="p-3 border-l border-slate-200 font-semibold text-slate-800">
                      {c.difficulty}
                    </td>
                  ))}
                </tr>

                {/* Durasi */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 bg-slate-50">Durasi Pertemuan</td>
                  {comparedCourses.map((c) => (
                    <td key={c.id} className="p-3 border-l border-slate-200 text-slate-700">
                      {c.duration}
                    </td>
                  ))}
                </tr>

                {/* Ukuran Kelas */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 bg-slate-50">Ukuran Kelas</td>
                  {comparedCourses.map((c) => (
                    <td key={c.id} className="p-3 border-l border-slate-200 text-slate-700">
                      {c.classSize}
                    </td>
                  ))}
                </tr>

                {/* Tools Utama */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 bg-slate-50">Tools Yang Dikuasai</td>
                  {comparedCourses.map((c) => (
                    <td key={c.id} className="p-3 border-l border-slate-200">
                      <div className="flex flex-wrap gap-1">
                        {c.tools.map((t, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Proyek Akhir */}
                <tr>
                  <td className="p-3 font-bold text-slate-700 bg-slate-50">Proyek Akhir</td>
                  {comparedCourses.map((c) => (
                    <td key={c.id} className="p-3 border-l border-slate-200 text-slate-700 leading-relaxed">
                      <strong className="block text-slate-900">{c.finalProject.title}</strong>
                      <span>{c.finalProject.description}</span>
                    </td>
                  ))}
                </tr>

                {/* Action Row */}
                <tr>
                  <td className="p-3 bg-slate-50"></td>
                  {comparedCourses.map((c) => (
                    <td key={c.id} className="p-3 border-l border-slate-200">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectCourse(c);
                        }}
                        className="w-full py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold transition text-center shadow-2xs text-xs"
                      >
                        Lihat Silabus Detail
                      </button>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
};
