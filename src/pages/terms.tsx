import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Terms() {
  return (
    <section className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <Link
          to="/"
          className="text-cyan-400 hover:text-purple-400 transition"
        >
          <FaArrowLeft />Back Home
        </Link>

        <h1 className="mt-8 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
          Terms of Service
        </h1>

        <div className="mt-10 space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 text-center"> 
              Acceptance of Terms
            </h2>

            <p className="mt-4 text-gray-400 leading-8 text-center">
              By accessing Vision AI, you agree to comply with these
              terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 text-center">
              User Responsibilities
            </h2>

            <p className="mt-4 text-gray-400 leading-8 text-center">
              Users must not misuse the platform or violate any
              applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 text-center">
              Changes
            </h2>

            <p className="mt-4 text-gray-400 leading-8 text-center">
              Vision AI may update these terms at any time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Terms;