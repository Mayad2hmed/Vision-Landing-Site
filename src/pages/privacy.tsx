import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Privacy() {
  return (
    <section className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <Link
          to="/"
          className="text-cyan-400 hover:text-purple-400 transition "
        >
         <FaArrowLeft /> Back Home
        </Link>

        <h1 className="mt-8 text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <p className="mt-8 text-gray-400 leading-8 text-center">
          At Vision AI, we respect your privacy and are committed to
          protecting your personal information.
        </p>

        <div className="mt-10 space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 text-center">
              Information We Collect
            </h2>

            <p className="mt-4 text-gray-400 leading-8">
              We collect information you provide directly to us,
              including your name, email address, and messages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 text-center">
              How We Use Your Data
            </h2>

            <p className="mt-4 text-gray-400 leading-8 text-center">
              Your data is used to improve our AI services,
              communicate with you, and provide a better experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 text-center">
              Security
            </h2>

            <p className="mt-4 text-gray-400 leading-8 text-center">
              We apply modern security standards to keep your
              information safe and protected.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Privacy;