import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`fixed w-full z-50 transition-all ${solid ? "bg-white/90 backdrop-blur-md shadow" : "bg-transparent"}`}>
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-600 to-cyan-500 flex items-center justify-center text-white font-bold">Z</div>
          <div className="text-lg font-semibold">ZORA</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-sky-600">Home</Link>
          <Link to="/about" className="hover:text-sky-600">About</Link>
          <Link to="/plans" className="hover:text-sky-600">Plans</Link>
          <Link to="/contact" className="hover:text-sky-600">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(o => !o)} className="p-2 rounded-md border border-slate-200 bg-white">
            {open ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 border-t border-slate-100">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/" className="py-2">Home</Link>
            <Link to="/about" className="py-2">About</Link>
            <Link to="/plans" className="py-2">Plans</Link>
            <Link to="/contact" className="py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}