import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../firebase/firebase";

const plans = [
  {
    name: "Starter",
    price: "$19",
    features: ["Basic analytics", "5 projects", "Email support"],
  },
  {
    name: "Pro",
    price: "$49",
    features: ["Advanced analytics", "Unlimited projects", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Custom dashboard", "Team access", "24/7 support"],
  },
];

function Pricing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!auth.currentUser) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login first to continue.",
        confirmButtonText: "Login",
        confirmButtonColor: "#06b6d4",
        background: "#111827",
        color: "#fff",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth");
        }
      });

      return;
    }

    // المستخدم عامل Login
    navigate("/payment");
  };

  return (
    <section id="pricing" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-cyan-400 text-6xl font-semibold p-4">
            Pricing
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold p-4 text-white">
            Choose Your Perfect Plan
          </h2>

          <p className="mt-4 text-gray-400">
            Start small and scale as your product grows.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border p-8 bg-white/5 ${
                plan.popular
                  ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                  : "border-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1 text-sm font-semibold">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-400"> /mo</span>
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                onClick={handleGetStarted}
                className="mt-8 w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;