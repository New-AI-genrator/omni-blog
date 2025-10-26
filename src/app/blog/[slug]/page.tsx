export default function PostPage({ params }: { params: { slug: string } }) {
  // Will fetch post content from Sanity CMS
  const post = {
    title: `Post: ${params.slug}`,
    content: '<p>Premium content will go here</p>',
    publishedAt: new Date().toISOString()
  };

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <div 
        className="prose dark:prose-invert max-w-none" 
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
