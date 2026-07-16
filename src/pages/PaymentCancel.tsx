import { MdCancel } from "react-icons/md";
function PaymentCancel() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-5xl text-red-400">
        Payment Cancelled <MdCancel />
      </h1>
    </div>
  );
}

export default PaymentCancel;