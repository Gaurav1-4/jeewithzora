import React from "react";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="pt-28 pb-12">
      <div className="container-max text-center">
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 hero-title"
        >
          ZORA — a smarter way to crack JEE
        </motion.h1>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          One-on-one mentorship by a team of 97–99 percentile mentors. Study plans, mocks, and 1:1 strategy that actually moves your score.
        </p>

        <div className="mt-8 flex justify-center gap-4" data-aos="fade-up" data-aos-delay="350">
          <a className="btn btn-primary" href="/plans">View Plans</a>
          <a className="btn btn-ghost" href="/contact">Apply Free Call</a>
        </div>
      </div>
    </section>
  );
}