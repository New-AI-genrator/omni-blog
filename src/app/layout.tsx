import './globals.css';

export const metadata = {
  title: 'World Premium Blog',
  description: 'The ultimate premium blogging experience',
};

export default function RootLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">World Premium Blog</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
