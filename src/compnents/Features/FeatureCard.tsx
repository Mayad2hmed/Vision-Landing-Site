import { motion } from "motion/react";

type FeatureCardProps = {
  title: string;
  description: string;
  color: string;
  delay?: number;
};

function FeatureCard({ title, description, color, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:-translate-y-2 transition-all duration-300"
    >
      <h3 className={`text-xl font-bold ${color}`}>{title}</h3>

      <p className="mt-3 text-gray-400">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;