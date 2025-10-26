export default function Home() {
  // Mock featured posts - will replace with CMS data
  const featuredPosts = [
    { title: 'Exclusive Content Strategy', slug: 'content-strategy', excerpt: 'Learn premium content creation techniques' },
    { title: 'Audience Engagement', slug: 'audience-engagement', excerpt: 'World-class methods to grow your readership' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            World's Most Premium Blog Platform
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the elite community of content creators and readers
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/blog"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Content
            </a>
            <a
              href="/membership"
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Join Premium
            </a>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Featured Premium Content</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
