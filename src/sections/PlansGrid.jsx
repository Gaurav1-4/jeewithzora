import React from "react";

const PRODUCTS = [
  {id:1, title:"Basic", price:"₹499/mo", bullets:["Weekly plan","Group doubt sessions","Telegram support"]},
  {id:2, title:"Pro", price:"₹1499/mo", bullets:["1:1 monthly call","Test analysis","Personal plan"]},
  {id:3, title:"Elite", price:"₹2999/mo", bullets:["Weekly 1:1","Mock analysis","Daily follow-up"]},
];

export default function PlansGrid(){
  return (
    <section className="py-16 bg-blue-50">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-6">Plans that work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="card hover:shadow-xl" data-aos="fade-up">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="mt-2 text-slate-600">{p.price}</div>
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-1 text-slate-600">
                {p.bullets.map(b => <li key={b}>• {b}</li>)}
              </ul>
              <div className="mt-6">
                <a className="btn btn-primary" href="https://rzp.io/i/your-link" target="_blank" rel="noreferrer">Enroll</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}