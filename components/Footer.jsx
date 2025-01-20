export default function Footer() {
  return (
    <footer className="bg-gray-800/50 backdrop-filter backdrop-blur-lg border-t border-gray-700/20 text-gray-200 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} by Léomyre. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          Developed with passion.
        </p>
      </div>
    </footer>
  );
}
