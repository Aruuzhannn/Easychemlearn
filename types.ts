export type Role = 'student' | 'teacher' | 'admin';
export type Language = 'RU' | 'KZ' | 'EN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  progress?: Record<string, number>; // courseId -> progress %
}

export interface Group {
  id: string;
  name: string;
  studentIds: string[];
}

export interface Problem {
  id: string;
  question: Record<Language, string>;
  correctAnswer: string; // For simplicity in MVP, checking string match or number
  hint: Record<Language, string>;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'text' | 'choice';
  options?: string[]; // For multiple choice
}

export interface Attachment {
  id: string;
  name: string;
  type: 'pdf' | 'image' | 'doc' | 'video' | 'archive' | 'other';
  size: string; // e.g. "2.4 MB"
  url: string;
}

export interface Assignment {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  type: 'lab' | 'practical';
}

export interface Lesson {
  id: string;
  title: Record<Language, string>;
  theory: Record<Language, string>; // Markdown or HTML string
  formula?: Record<Language, string>;
  algorithm?: Record<Language, string>;
  example: Record<Language, string>;
  problems: Problem[];
  attachments?: Attachment[];
  assignments?: Assignment[];
}

export interface Course {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  lessons: Lesson[];
}

export interface TranslationDictionary {
  [key: string]: {
    RU: string;
    KZ: string;
    EN: string;
  };
}