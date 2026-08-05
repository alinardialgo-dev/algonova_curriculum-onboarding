import React, { useState, useMemo } from 'react';
import { COURSES_DATA, CATEGORIES, AGE_GROUPS } from './data/coursesData';
import { Course, FilterState, StudentProject, CourseCategory } from './types';
import { Navbar } from './components/Navbar';
import { CourseCard } from './components/CourseCard';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CourseFinderWizard } from './components/CourseFinderWizard';
import { CourseCompareModal } from './components/CourseCompareModal';
import { ProjectShowcaseModal } from './components/ProjectShowcaseModal';
import { Footer } from './components/Footer';
import { BookOpen, Filter, Layers } from 'lucide-react';

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'all',
    ageGroup: 'all',
    difficulty: 'all'
  });

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);
  const [showFinder, setShowFinder] = useState<boolean>(false);
  const [showCompare, setShowCompare] = useState<boolean>(false);
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>('catalog');

  const handleFilterChange = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const handleToggleCompare = (courseId: string) => {
    setComparedIds((prev) => {
      if (prev.includes(courseId)) {
        return prev.filter((id) => id !== courseId);
      }
      if (prev.length >= 3) {
        alert('Maksimal 3 kursus untuk dibandingkan bersamaan.');
        return prev;
      }
      return [...prev, courseId];
    });
  };

  // Filtered Courses calculation
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      // Category Filter
      if (filters.category !== 'all' && course.category !== filters.category) {
        return false;
      }

      // Age Group Filter
      if (filters.ageGroup !== 'all') {
        const [min, max] = filters.ageGroup.split('-').map(Number);
        if (course.maxAge < min || course.minAge > max) {
          return false;
        }
      }

      // Difficulty Filter
      if (filters.difficulty !== 'all' && course.difficulty !== filters.difficulty) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col justify-between selection:bg-amber-200 selection:text-amber-900">
      
      {/* Header Navbar */}
      <Navbar
        onOpenFinder={() => setShowFinder(true)}
        onOpenCompare={() => setShowCompare(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        compareCount={comparedIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Course Catalog Section */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Section Header & Filters */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-500" />
                  <span>Katalog Program Kursus ({filteredCourses.length})</span>
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Informasi silabus & kurikulum lengkap program kursus anak usia 5-17 tahun.
                </p>
              </div>

              {(filters.category !== 'all' || filters.ageGroup !== 'all') && (
                <button
                  onClick={() => setFilters({ search: '', category: 'all', ageGroup: 'all', difficulty: 'all' })}
                  className="text-xs font-bold text-amber-600 hover:text-amber-800 underline underline-offset-2 self-start sm:self-auto"
                >
                  Reset Filter
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-amber-500" /> Kategori:
              </span>
              {CATEGORIES.map((cat) => {
                const active = filters.category === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleFilterChange({ category: cat.id as CourseCategory | 'all' })}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      active
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Age Group Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500 mr-1">Target Usia:</span>
              {AGE_GROUPS.map((age) => {
                const active = filters.ageGroup === age.id;
                return (
                  <button
                    key={age.id}
                    onClick={() => handleFilterChange({ ageGroup: age.id as any })}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      active
                        ? 'border-amber-500 bg-amber-50 text-amber-800 font-bold shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {age.label}
                  </button>
                );
              })}
            </div>

          </div>

          {filteredCourses.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
              <Filter className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="font-extrabold text-slate-800 text-base">
                Tidak ada program yang sesuai dengan kriteria filter Anda.
              </p>
              <button
                onClick={() => setFilters({ search: '', category: 'all', ageGroup: 'all', difficulty: 'all' })}
                className="px-4 py-2 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition shadow-2xs"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelectCourse={(c) => setSelectedCourse(c)}
                  onToggleCompare={handleToggleCompare}
                  isCompared={comparedIds.includes(course.id)}
                />
              ))}
            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <Footer
        courses={COURSES_DATA}
        onSelectCourse={(c) => setSelectedCourse(c)}
      />

      {/* MODALS */}

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onToggleCompare={handleToggleCompare}
          isCompared={comparedIds.includes(selectedCourse.id)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}

      {/* Course Finder Wizard */}
      {showFinder && (
        <CourseFinderWizard
          courses={COURSES_DATA}
          onClose={() => setShowFinder(false)}
          onSelectCourse={(c) => setSelectedCourse(c)}
        />
      )}

      {/* Course Comparison Modal */}
      {showCompare && (
        <CourseCompareModal
          courses={COURSES_DATA}
          comparedIds={comparedIds}
          onRemoveCompare={(id) => setComparedIds(comparedIds.filter((item) => item !== id))}
          onClearCompare={() => setComparedIds([])}
          onClose={() => setShowCompare(false)}
          onSelectCourse={(c) => setSelectedCourse(c)}
        />
      )}

      {/* Student Project Demo Modal */}
      {selectedProject && (
        <ProjectShowcaseModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
