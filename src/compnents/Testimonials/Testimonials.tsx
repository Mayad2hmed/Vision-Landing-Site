


import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    text: "FutureAI helped us build a beautiful landing page faster than ever.",
  },
  {
    name: "Michael Lee",
    role: "Startup Founder",
    text: "The animations, layout, and performance feel clean and professional.",
  },
  {
    name: "Emma Smith",
    role: "Frontend Developer",
    text: "A modern UI experience with reusable components and smooth motion.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-cyan-400 text-6xl font-semibold">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Loved by Creative Teams
          </h2>

          <p className="mt-4 text-gray-400">
            See what people say about building with FutureAI.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 mx-8 lg:mx-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              <p className="text-gray-300 leading-7 italic">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-cyan-400">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;

