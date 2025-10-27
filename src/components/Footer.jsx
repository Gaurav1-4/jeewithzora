import React from "react";

export default function Footer(){
  return (
    <footer className="mt-12 bg-slate-900 text-white">
      <div className="container-max py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-xl font-semibold">ZORA</div>
          <div className="text-sm text-slate-300">Personalized JEE mentorship • 97–99 percentile mentors</div>
        </div>
        <div className="text-sm text-slate-300">
          © {new Date().getFullYear()} ZORA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}