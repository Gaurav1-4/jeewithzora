import React from "react";
import Hero from "../sections/Hero";
import PlansGrid from "../sections/PlansGrid";
import Mentors from "../sections/Mentors";

export default function Home() {
  return (
    <div>
      {/* Intro Section */}
      <Hero />

      {/* Exclusive Batch Section */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-6">
          <PlansGrid />
        </div>
      </section>

      {/* Why Zora Works Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            Why ZORA Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card" data-aos="fade-up" data-aos-delay="80">
              <h3 className="font-semibold text-lg">Tailored Strategy</h3>
              <p className="mt-2 text-sm text-slate-600">
                Weekly plans targeted to your weak areas.
              </p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="160">
              <h3 className="font-semibold text-lg">Actionable Analysis</h3>
              <p className="mt-2 text-sm text-slate-600">
                Mock by mock improvement plan.
              </p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="240">
              <h3 className="font-semibold text-lg">Real Mentors</h3>
              <p className="mt-2 text-sm text-slate-600">
                Guidance from students who recently cleared JEE with top
                percentiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <Mentors />
    </div>
  );
}