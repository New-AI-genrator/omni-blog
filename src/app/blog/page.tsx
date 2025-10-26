import { PostCard } from '@/components/PostCard';

export default function BlogPage() {
  // Mock data - will replace with Sanity CMS
  const posts = [
    { title: 'Premium Blog Post 1', slug: 'premium-1', excerpt: 'Discover our exclusive premium content' },
    { title: 'Premium Blog Post 2', slug: 'premium-2', excerpt: 'Another example of world-class writing' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Premium Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
