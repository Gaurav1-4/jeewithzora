import React from "react";

export default function Contact(){
  return (
    <section className="py-20">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-4">Apply / Contact</h2>
        <p className="text-slate-600 mb-6">Fill the application to book a free orientation call. We review every application personally.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Apply Now</h3>
            <p className="mt-2 text-slate-600">Open application form (Google Form)</p>
            <a className="mt-4 btn btn-primary inline-block" href="https://forms.gle/your-google-form" target="_blank" rel="noreferrer">Open Form</a>
          </div>

          <div className="card">
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2 text-slate-600">For quick queries, message us on WhatsApp or Telegram.</p>
            <div className="mt-4 space-x-3">
              <a className="btn btn-ghost" href="https://wa.me/yourwhatsapp">WhatsApp</a>
              <a className="btn btn-ghost" href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}