export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      {/* --- Top Section: Visual Guide + Links + Contact --- */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Left Column */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500">Radiant Lab</h4>
          <h3 className="text-lg font-semibold text-gray-900">
            Sciunit Visual Guide
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            A contributor-friendly, visual way to learn and teach Sciunit:
            why it matters, how it works, and how to run it.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#sciunit" className="hover:text-black">
                Why Sciunit
              </a>
            </li>
            <li>
              <a href="#how" className="hover:text-black">
                How it Works
              </a>
            </li>
            <li>
              <a href="#quickstart" className="hover:text-black">
                Try the Quickstart
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Contact</h4>
          <p className="text-sm">
            <a
              href="mailto:prof@example.edu"
              className="hover:text-black underline-offset-2"
            >
              prof@example.edu
            </a>{" "}
            •{" "}
            <a
              href="https://radiantlab.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black underline-offset-2"
            >
              radiantlab.edu
            </a>
          </p>
        </div>
      </div>

      {/* --- Divider Line --- */}
      <div className="border-t border-gray-200"></div>

      {/* --- Bottom Section: Copyright + Label --- */}
      <div className="text-center text-sm text-gray-700 py-4">
        <p>© 2025 Radiant Lab — All rights reserved.</p>
        <p className="mt-1 font-medium">Sciunit & FLINC Prototype Website</p>
      </div>
    </footer>
  );
}
