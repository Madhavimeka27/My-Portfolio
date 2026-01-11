import React from 'react';
import { ArrowDown, Download, Mail, Linkedin, Github } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-8">

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Madhavi Meka</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
           Full Stack Developer focused on building scalable, high-performance, and user-centric web applications.
          </p>

          {/* Download CV */}
          <div className="flex justify-center pt-4">
            <a 
              href="/assets/resume.pdf"
              download="Madhavi_Meka_Resume"
              className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-gray-900 dark:text-white font-semibold transition-all flex items-center gap-2 group"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>

          {/* 🔗 Social Links */}
          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/madhavi-meka-826a22291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition"
            >
              <Linkedin size={26} />
            </a>

            <a
              href="https://github.com/Madhavimeka27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition"
            >
              <Github size={26} />
            </a>

            <a
              href="mailto:madhavimeka27@gmail.com"
              className="text-gray-500 hover:text-primary transition"
            >
              <Mail size={26} />
            </a>
          </div>

          {/* Arrow */}
          <div className="pt-6 flex justify-center animate-bounce">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowDown size={30} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
