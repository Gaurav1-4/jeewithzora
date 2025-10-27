import React from "react";
import Hero from "../sections/Hero";
import Mentors from "../sections/Mentors";
import PlansGrid from "../sections/PlansGrid";

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="py-12">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Why ZORA works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card" data-aos="fade-up" data-aos-delay="80">
              <h3 className="font-semibold">Tailored Strategy</h3>
              <p className="mt-2 text-sm text-slate-600">Weekly plans targeted to your weak areas.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="160">
              <h3 className="font-semibold">Actionable Analysis</h3>
              <p className="mt-2 text-sm text-slate-600">Mock by mock improvement plan.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="240">
              <h3 className="font-semibold">Real Mentors</h3>
              <p className="mt-2 text-sm text-slate-600">Guidance from students who recently cleared JEE with top percentiles.</p>
            </div>
          </div>
        </div>
      </section>

      <Mentors />
      <PlansGrid />
    </div>
  );
}