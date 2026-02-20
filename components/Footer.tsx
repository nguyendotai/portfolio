export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Tai. All rights reserved.</p>
      <div className="mt-3 flex justify-center gap-6">
        <a href="https://github.com/yourusername" className="hover:text-blue-400 transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        <a href="https://twitter.com/yourusername" className="hover:text-blue-400 transition-colors">Twitter/X</a>
      </div>
    </footer>
  );
}