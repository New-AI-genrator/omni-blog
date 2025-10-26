import Link from 'next/link';

interface PostCardProps {
  title: string;
  slug: string;
  excerpt?: string;
}

export function PostCard({ title, slug, excerpt }: PostCardProps) {
  return (
    <Link 
      href={`/blog/${slug}`}
      className="block group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        {excerpt && (
          <p className="text-gray-600 dark:text-gray-300">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
