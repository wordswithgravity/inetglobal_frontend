export interface BlogPostContentSection {
  heading: string;
  paragraphs: string[];
  keyTakeaways?: string[];
  quote?: string;
  sectionImage?: {
    url: string;
    caption?: string;
    alt?: string;
  };
  contentPoints?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  graphData?: {
    title: string;
    type: "bar" | "line" | "pie" | "stats";
    data: {
      label: string;
      value: number;
      color?: string;
    }[];
  };
  links?: {
    text: string;
    url: string;
    isExternal?: boolean;
  }[];
}

export interface BlogPostDetail {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  authorBio: string;
  imageUrl: string;
  featured?: boolean;
  sections: BlogPostContentSection[];
  tags: string[];
  relatedSlugs: string[];
}

// Live database only: No fake blogs
export const blogPostsData: BlogPostDetail[] = [];

export const getBlogPostBySlug = (slug: string): BlogPostDetail | undefined => {
  return blogPostsData.find((p) => p.slug === slug);
};
