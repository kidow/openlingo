export type NoteFrontmatter = {
  title: string;
  description: string;
  lang: string;
  updatedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
};

export type TocItem = {
  id: string;
  label: string;
  level: number;
};
