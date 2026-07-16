import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl text-green-400 flex items-center gap-3">
        Payment Successful
        <FaCheckCircle className="text-green-500 text-3xl" />
      </h1>

      <p className="text-gray-400 mt-4">
        Redirecting to Home...
      </p>

    
    </div>
  );
}

export default PaymentSuccess;