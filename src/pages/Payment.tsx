import { motion } from "motion/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaCcVisa } from "react-icons/fa";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (paymentMethod === "cash") {
      Swal.fire({
        icon: "success",
        title: "Cash Payment Selected",
        text: "Our team will contact you to complete your subscription.",
        confirmButtonColor: "#06b6d4",
        background: "#111827",
        color: "#fff",
      });

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();

      window.location.href = url;
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: error.message,
        confirmButtonColor: "#ef4444",
        background: "#111827",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
      >
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Payment
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Complete your subscription securely.
        </p>

        <div className="mt-8">
          <label className="text-lg font-semibold">
            Payment Method
          </label>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              onClick={() => setPaymentMethod("visa")}
              className={`rounded-xl py-3 border transition flex items-center justify-center gap-3 ${
                paymentMethod === "visa"
                  ? "border-cyan-400 bg-cyan-500/20"
                  : "border-white/10"
              }`}
            >
              <FaCcVisa size={42} color="#2563eb" />
              <span className="text-lg font-semibold">Visa</span>
            </button>

            <button
              onClick={() => setPaymentMethod("cash")}
              className={`rounded-xl py-3 border transition ${
                paymentMethod === "cash"
                  ? "border-cyan-400 bg-cyan-500/20"
                  : "border-white/10"
              }`}
            >
              Cash
            </button>
          </div>
        </div>

        {paymentMethod === "cash" && (
          <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-center">
            <p className="text-yellow-300">
              You selected Cash Payment.
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              Our team will contact you shortly.
            </p>
          </div>
        )}

        {paymentMethod !== "cash" && (
          <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
            <p className="text-center text-gray-300">
              You will be redirected to Stripe's secure checkout page
              to complete your payment.
            </p>
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="mt-10 w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 text-lg font-bold hover:scale-105 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "Confirm Payment"}
        </button>
      </motion.div>
    </section>
  );
}

export default Payment;