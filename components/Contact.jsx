import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Feel free to connect with me through LinkedIn, GitHub, or Email.
        </p>

        <div className="flex justify-center gap-6">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/madhavi-meka-826a22291"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Madhavimeka27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            <Github size={20} />
            GitHub
          </a>

          {/* Email */}
          <a
            href="mailto:madhavimeka27@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Mail size={20} />
            Email
          </a>

        </div>
      </div>
    </section>
  );
};
