export type PolicyType = 'privacy' | 'cookies' | 'terms';

export interface PolicyContent {
  title: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface TableOfContentsItem {
  number: number;
  title: string;
  id: string;
}