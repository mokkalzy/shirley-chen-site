"use client";

import { personalInfo, metrics, experience, capabilities, education } from "@/lib/data";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream-50/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <a href="#hero" className="text-lg sm:text-xl font-bold text-sage-800 hover:text-sage-600 transition-colors">
              SC
            </a>
            <div className="flex gap-4 sm:gap-8 text-sm sm:text-base">
              <a href="#about" className="text-sage-700 hover:text-sage-900 transition-colors">
                About
              </a>
              <a href="#experience" className="text-sage-700 hover:text-sage-900 transition-colors">
                Work
              </a>
              <a href="#contact" className="text-sage-700 hover:text-sage-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-sage-600 text-sm sm:text-base font-medium mb-4 tracking-wide uppercase animate-fade-in">
              {personalInfo.location} • {personalInfo.languages.join(" / ")}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-sage-900 mb-6 leading-tight animate-fade-in-up">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-sage-700 mb-8 text-balance animate-fade-in-up animation-delay-200">
              {personalInfo.tagline}
            </p>
            <p className="text-base sm:text-lg text-sage-600 max-w-2xl mb-8 animate-fade-in-up animation-delay-300">
              Marketing Coordinator at Careviv Health • Former Advertising Consultant at Simei Media
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-sage-700 text-cream-50 font-medium rounded-lg hover:bg-sage-800 transition-all duration-300 hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/Shirley-Chen-Marketing-Resume.pdf"
                download
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-sage-700 text-sage-700 font-medium rounded-lg hover:bg-sage-50 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-12 sm:py-16 bg-sage-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm sm:text-base text-cream-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mb-8 sm:mb-12">About</h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-base sm:text-lg text-sage-700 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              <p className="text-base sm:text-lg text-sage-700 leading-relaxed">
                Currently based in {personalInfo.location}, working as a Marketing Coordinator at Careviv Health, where I develop
                recruitment marketing materials and coordinate physician outreach initiatives.
              </p>
            </div>
            <div className="bg-sage-50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-sage-900 mb-6">Quick Facts</h3>
              <ul className="space-y-4 text-sage-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[100px]">Experience:</span>
                  <span>5+ years in marketing and advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[100px]">Education:</span>
                  <span>MSc Social Research Methods (ANU), BA Advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[100px]">Languages:</span>
                  <span>{personalInfo.languages.join(", ")}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[100px]">Clients:</span>
                  <span>NetEase, TikTok, NIO, Sephora, and more</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mb-8 sm:mb-12">Experience</h2>
          <div className="grid gap-6 sm:gap-8">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className="bg-cream-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-sage-100"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-sage-900 mb-1">{job.role}</h3>
                    <p className="text-base sm:text-lg text-sage-700 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm sm:text-base text-sage-600">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <p className="text-sage-700 mb-6">{job.description}</p>
                <ul className="space-y-3 mb-6">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sage-700">
                      <span className="text-sage-500 mr-3 mt-1">▪</span>
                      <span className="text-sm sm:text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-sage-100 text-sage-700 text-xs sm:text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mb-8 sm:mb-12">Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((category, index) => (
              <div
                key={index}
                className="bg-sage-50 p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-sage-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start text-sage-700">
                      <span className="text-sage-500 mr-3 mt-1">✓</span>
                      <span className="text-sm sm:text-base">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mb-8 sm:mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-cream-50 p-6 sm:p-8 rounded-2xl border border-sage-100"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-sage-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-base sm:text-lg text-sage-700 font-medium mb-1">{edu.field}</p>
                <p className="text-sage-600 mb-4">{edu.school}</p>
                <div className="text-sm text-sage-600 mb-4">
                  <p>{edu.location}</p>
                  <p>{edu.period}</p>
                </div>
                <div className="pt-4 border-t border-sage-200">
                  <p className="text-sm font-semibold text-sage-700">GPA: {edu.gpa}</p>
                  <p className="text-sm text-sage-600 mt-1">{edu.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 sm:mb-8">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-sage-700 mb-8 sm:mb-12">
            Let's discuss how data-driven marketing can drive your business forward.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-6 bg-sage-50 rounded-xl hover:bg-sage-100 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-sage-900 font-semibold mb-2 text-base sm:text-lg">Email</div>
              <div className="text-sage-600 text-sm sm:text-base group-hover:text-sage-800">
                {personalInfo.email}
              </div>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
              className="p-6 bg-sage-50 rounded-xl hover:bg-sage-100 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-sage-900 font-semibold mb-2 text-base sm:text-lg">Phone</div>
              <div className="text-sage-600 text-sm sm:text-base group-hover:text-sage-800">
                {personalInfo.phone}
              </div>
            </a>
          </div>
          <a
            href="/Shirley-Chen-Marketing-Resume.pdf"
            download
            className="inline-block px-8 py-4 bg-sage-700 text-cream-50 font-medium rounded-lg hover:bg-sage-800 transition-all duration-300 hover:shadow-lg text-base sm:text-lg"
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-sage-900 text-cream-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Shirley Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
