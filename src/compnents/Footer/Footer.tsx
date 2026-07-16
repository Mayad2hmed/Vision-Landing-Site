import { Link } from "react-router-dom";
function Footer() {
  return (
<footer id="contact" className="bg-black text-white border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl font-bold text-cyan-400">Vision Ai</h2>

        <p className="text-gray-400 text-sm">
          © 2026 Vision Ai. All rights reserved.
        </p>

       <div className="flex gap-6 text-gray-400">
  <Link
    to="/privacy"
    className="hover:text-cyan-400 transition-colors"
  >
    Privacy
  </Link>

  <Link
    to="/terms"
    className="hover:text-cyan-400 transition-colors"
  >
    Terms
  </Link>

  <Link
    to="/contact"
    className="hover:text-cyan-400 transition-colors"
  >
    Contact
  </Link>
</div>
      </div>
    </footer>
  );
}

export default Footer;