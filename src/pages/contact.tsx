import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_rozr1va",
        "template_79skql9",
        form.current,
        "5dDVE8Pnmq6klFfqn"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#06b6d4",
        });

        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: error.text || "Failed to send message.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <section className="min-h-screen bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="mt-8 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
          Contact Us
        </h1>

        <p className="mt-6 text-gray-400 text-center leading-7 sm:leading-8">
          We'd love to hear from you.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 space-y-6"
        >
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-semibold hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;