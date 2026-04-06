import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BlogPostType } from '../types';
import { Loader2 } from 'lucide-react';

export default function BlogContent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      setLoading(true);

      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setPost({
            id: docSnap.id,
            title: data.title,
            parts: data.parts || [],
            images: data.images || [],
            author: data.author || 'Gemini AI',
            createdAt: data.createdAt?.toDate?.() || new Date(),
            imageUrl: data.imageUrl,
            readTime: data.readTime,
          });
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="animate-spin text-blue-600" size={60} />
      </div>
    );
  }

  if (!post) {
    return <div className="text-center py-20 text-xl">Post not found</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Back Button */}
      <div className="sticky top-0 bg-white border-b z-20">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to all posts
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 max-w-4xl">
        {/* Main Featured Image (optional) */}
        {post.imageUrl && (
          <div className="aspect-video w-full overflow-hidden rounded-2xl mb-10 shadow-xl">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-slate-600 mb-12 pb-8 border-b">
          <div className="flex items-center gap-2">
            <User size={20} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            <span>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          {post.readTime && (
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{post.readTime} min read</span>
            </div>
          )}
        </div>

        {/* === MAIN CONTENT: Parts + Images interleaved === */}
        <div className="space-y-12">
          {post.parts.map((part, index) => {
            const imageUrl = post.images[index];

            return (
              <div key={index} className="space-y-8">
                {/* Show image BEFORE this text part (if exists) */}
                {imageUrl && imageUrl.trim() !== '' && (
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={imageUrl}
                      alt={`Illustration ${index + 1}`}
                      className="w-full h-auto object-contain"   // Full width, natural height
                    />
                  </div>
                )}

                {/* Text Part */}
                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                  <div className="whitespace-pre-line">
                    {part}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Optional: Show any extra images at the end if images array is longer */}
          {post.images.length > post.parts.length &&
            post.images.slice(post.parts.length).map((imgUrl, idx) =>
              imgUrl && imgUrl.trim() !== '' ? (
                <div key={`extra-${idx}`} className="w-full rounded-2xl overflow-hidden shadow-lg mt-12">
                  <img
                    src={imgUrl}
                    alt="Extra illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : null
            )}
        </div>
      </div>
    </div>
  );
}