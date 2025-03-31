
import React from "react";

export default function KanzleiHomepage() {
  return (
    <div className="font-sans text-gray-800">
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-rose-900">Englbrecht & Kollegen</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#kanzlei" className="hover:text-rose-700">Die Kanzlei</a>
            <a href="#rechtsgebiete" className="hover:text-rose-700">Rechtsgebiete</a>
            <a href="#team" className="hover:text-rose-700">Team</a>
            <a href="#kontakt" className="hover:text-rose-700">Kontakt</a>
          </nav>
        </div>
      </header>
      <main className="text-center py-20">
        <h2 className="text-4xl font-serif text-rose-900">Vertrauen Sie auf über 55 Jahre juristische Expertise.</h2>
        <p className="mt-4 text-lg text-gray-700">Acht spezialisierte Juristen. Eine Kanzlei. Ihr Recht.</p>
        <a href="#kontakt" className="mt-6 inline-block bg-rose-800 hover:bg-rose-700 text-white px-6 py-3 rounded-full">Jetzt Kontakt aufnehmen</a>
      </main>
    </div>
  );
}
