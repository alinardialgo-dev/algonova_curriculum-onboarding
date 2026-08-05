export type CourseCategory = 'coding' | 'design_ai' | 'math';

export interface Lesson {
  id: string;
  lessonNumber: number;
  title: string;
  url?: string | null;
  materi?: string;
  tujuan?: string | string[];
  tools?: string;
  alurCerita?: string;
  hasilBelajar?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface StudentProject {
  id: string;
  lesson?: string | number;
  title: string;
  author: string;
  age?: number;
  link: string;
  type: 'youtube' | 'roblox' | 'drive' | 'web';
  description: string;
  thumbnail?: string;
  category?: string;
}

export interface Course {
  id: string;
  slug: string;
  number: number;
  title: string;
  category: CourseCategory;
  categoryName: string;
  badgeColor: string; // Tailwind color class for border/badge
  bgLight: string;
  textColor: string;
  ageRange: string;
  minAge: number;
  maxAge: number;
  duration: string;
  classSize: string;
  difficulty: 'Pemula' | 'Pemula - Menengah' | 'Menengah' | 'Menengah - Sulit' | 'Sulit';
  language: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  modules: CourseModule[];
  projects: StudentProject[];
  finalProject: {
    title: string;
    subtitle?: string;
    description: string;
  };
  outcomes: string[];
  primaryFunctions: string[];
}

export interface FilterState {
  search: string;
  category: CourseCategory | 'all';
  ageGroup: 'all' | '5-7' | '8-10' | '11-14' | '15-17';
  difficulty: 'all' | 'Pemula' | 'Menengah' | 'Sulit';
}
