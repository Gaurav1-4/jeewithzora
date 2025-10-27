import React from "react";

const mentors = [
  {name:"Aman", percent:"99.2", college:"IIT Delhi", img:"https://images.unsplash.com/photo-1545996124-1f3b6b4a0a9d?w=600&q=60"},
  {name:"Kajal", percent:"98.7", college:"IIT Bombay", img:"https://images.unsplash.com/photo-1545996124-1f3b6b4a0a9d?w=600&q=60"},
  {name:"Devesh", percent:"97.8", college:"IIT Madras", img:"https://images.unsplash.com/photo-1545996124-1f3b6b4a0a9d?w=600&q=60"},
];

export default function Mentors(){
  return (
    <section className="py-14 bg-white">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Meet the Mentors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((m, idx) => (
            <div className="card text-center" data-aos="fade-up" data-aos-delay={idx*120} key={m.name}>
              <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full object-cover mx-auto shadow-sm" />
              <div className="mt-4 font-semibold">{m.name}</div>
              <div className="text-sm text-slate-500">{m.percent}% • {m.college}</div>
              <p className="mt-3 text-sm text-slate-600">Exam strategy, time-management & mock reviews.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}