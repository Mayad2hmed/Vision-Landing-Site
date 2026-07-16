import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section id="features" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Fast Performance"
            description="Optimized experience with Vite and React."
            color="text-cyan-400"
            delay={0}
          />

          <FeatureCard
            title="Modern Design"
            description="Clean futuristic interface with gradients and glass effects."
            color="text-purple-400"
            delay={0.2}
          />

          <FeatureCard
            title="Smooth Animation"
            description="Interactive motion effects for a professional user experience."
            color="text-cyan-400"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;