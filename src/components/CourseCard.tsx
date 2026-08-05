import React from 'react';
import { Course } from '../types';
import { BookOpen, Scale, ArrowRight, Sparkles, Clock, Users, CheckCircle2, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
  onToggleCompare: (courseId: string) => void;
  isCompared: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onSelectCourse,
  onToggleCompare,
  isCompared
}) => {
  const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div
      className={`group bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative ${course.badgeColor.split(' ')[0]}`}
    >
      {/* Top Banner Accent */}
      <div className={`h-2.5 w-full ${
        course.category === 'coding' ? 'bg-amber-400' :
        course.category === 'design_ai' ? 'bg-pink-400' : 'bg-indigo-500'
      }`} />

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Header Badges */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
              #{course.number} {course.categoryName}
            </span>

            <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
              course.difficulty === 'Pemula' ? 'bg-emerald-100 text-emerald-800' :
              course.difficulty === 'Menengah' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
            }`}>
              {course.difficulty}
            </span>
          </div>

          <h3
            onClick={() => onSelectCourse(course)}
            className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer tracking-tight"
          >
            {course.title}
          </h3>

          <div className="inline-block mt-1 mb-3 px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
            {course.ageRange}
          </div>

          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-500 py-2 border-y border-slate-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{course.modules.length} Modul ({totalLessons} Materi)</span>
          </div>
        </div>

        {/* Tools Badges */}
        <div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Tools Utama:</p>
          <div className="flex flex-wrap gap-1.5">
            {course.tools.slice(0, 4).map((tool, idx) => (
              <span key={idx} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                {tool}
              </span>
            ))}
            {course.tools.length > 4 && (
              <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-400">
                +{course.tools.length - 4}
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Card Actions Footer */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onToggleCompare(course.id)}
          title={isCompared ? "Batal Bandingkan" : "Tambah ke Pembanding"}
          className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
            isCompared
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span className="hidden sm:inline">{isCompared ? 'Dibandingkan' : 'Bandingkan'}</span>
        </button>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <button
            onClick={() => onSelectCourse(course)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-800 bg-amber-400 hover:bg-amber-500 transition shadow-xs flex items-center gap-1.5"
          >
            <span>Lihat Silabus & Detail</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
