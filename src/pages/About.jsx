import React from "react";

export default function About(){
  return (
    <div className="py-20">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-4">About ZORA</h2>
        <p className="text-slate-600 mb-6">
          ZORA is a student-first mentorship initiative run by a team of 97–99 percentile mentors. We focus on personalised planning, evidence-driven mock analysis and practical doubt resolution.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Our Philosophy</h3>
            <p className="mt-2 text-slate-600">We teach how to think, not what to memorize. Every plan is adapted to the student's current level.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">How we work</h3>
            <p className="mt-2 text-slate-600">Weekly milestones, test analysis, and actionable feedback. Real mentorship from people who recently took the exam.</p>
          </div>
        </div>
      </div>
    </div>
  );
}