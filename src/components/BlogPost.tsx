import { Calendar, User } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types';
import { useNavigate } from 'react-router-dom';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {post.imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer"
            onClick={handleReadMore}>
          {post.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{post.author || 'Gemini AI'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed line-clamp-3 mb-6">
          {post.content?.slice(0, 220) + '...'}
        </p>

        <button 
          onClick={handleReadMore}
          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1"
        >
          Read Full Article →
        </button>
      </div>
    </article>
  );
}