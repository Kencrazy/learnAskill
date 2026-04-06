export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  imageUrl?: string;
  createdAt: Date;
  author: string;
}

export interface EtsyProduct {
  name: string;
  imageUrl: string;
  link: string;
}

export interface SocialLinks {
  youtube?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  socialLinks: SocialLinks;
}

export interface BlogPostType {
  id: string;
  title: string;
  parts: string[];           // array of text sections
  images: string[];          // array of image URLs (can contain "")
  author?: string;
  createdAt: Date | string;
  imageUrl?: string;         // optional main/featured image
  readTime?: number;
  category?: string;
}