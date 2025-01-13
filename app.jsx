import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaCode, FaGamepad, FaMusic, FaBook, FaMoon, FaSun } from "react-icons/fa";

const CVUygulama = () => {
  const [darkMode, setDarkMode] = useState(false);

  const kisiselBilgiler = {
    ad: "Koray",
    soyad: "Gileboru",
    eposta: "Koray.gileboru200@gmail.com",
    telefon: "+905345132264",
  };

  const egitim = [
    {
      universite: "Ahmet Yapar Temel Lisesi",
      bolum: "Anadolu Lisesi",
      mezuniyetYili: "2020"
    },
    {
      universite: "Kapadokya Üni",
      bolum: "Bilgisiyar Programcılıgı",
      mezuniyetYili: "2025"
    }
  ];

  const isDeneyimi = [
    {
      sirket: "BB Bilişim.",
      pozisyon: "Stajyer",
      sure: "2020",
      aciklama: "MSSQL İle Sorgu Yapıları ve tablolar hakkında işlemler"
    },
  ];

  const yetenekler = [
    "React", "Node.js", "Python", "JavaScript", "TypeScript", "Docker", "AWS", "Git"
  ];

  const hobiler = [
    { ad: "Programlama", ikon: <FaCode /> },
    { ad: "Oyun Oynama", ikon: <FaGamepad /> },
    { ad: "Müzik", ikon: <FaMusic /> },
    { ad: "Kitap Okuma", ikon: <FaBook /> }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label="Karanlık modu aç/kapat"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
        </button>

        {/* Kişisel Bilgiler */}
        <div className="flex flex-col md:flex-row items-center mb-8 gap-6">
          <div>
            <h1 className="text-4xl font-bold">{`${kisiselBilgiler.ad} ${kisiselBilgiler.soyad}`}</h1>
            <p className="text-lg mt-2">{kisiselBilgiler.eposta}</p>
            <p className="text-lg">{kisiselBilgiler.telefon}</p>
          </div>
        </div>

        {/* Eğitim */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Eğitim</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {egitim.map((edu, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
                <h3 className="font-bold text-xl">{edu.universite}</h3>
                <p className="text-blue-500">{edu.bolum}</p>
                <p className="text-sm">{edu.mezuniyetYili}</p>
              </div>
            ))}
          </div>
        </section>

        {/* İş Deneyimi */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">İş Deneyimi</h2>
          <div className="space-y-4">
            {isDeneyimi.map((exp, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
                <h3 className="font-bold text-xl">{exp.sirket}</h3>
                <p className="text-blue-500">{exp.pozisyon}</p>
                <p className="text-sm">{exp.sure}</p>
                <p className="mt-2">{exp.aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Yetenekler */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Yetenekler</h2>
          <div className="flex flex-wrap gap-2">
            {yetenekler.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Hobiler */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Hobiler & İlgi Alanları</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobiler.map((hobby, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg flex items-center gap-2`}>
                {hobby.ikon}
                <span>{hobby.ad}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sosyal Medya */}
        <section className="flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
            <FaInstagram />
          </a>
        </section>
      </div>
    </div>
  );
};

export default CVUygulama;
