import React from 'react';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "HeyEv!",
    period: "Aug 2024 – Present",
    details: [
      "Developing a platform for real-time monitoring of electric vehicle battery properties, including status updates, performance metrics, and system diagnostics.",
      "Building and integrating modules to support customer onboarding and related workflow management.",
      "Contributing to both frontend and backend systems to ensure seamless data flow and user experience across the platform.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Ravvio Labs",
    period: "29th November 2024 – 29th January 2025",
    details: [
      "Designed and implemented backend integrations for hotel-related APIs, enabling streamlined access to listings, availability, and booking functionalities.",
      "Built reusable modules to simplify interaction with external services and enhance system scalability.",
      "Collaborated on backend architecture using modern frameworks to ensure performance and maintainability.",
    ],
  },
];


const WorkExperience = () => {
  return (
    <section className="min-h-screen bg-white w-full px-6 py-16 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl flex flex-col items-start">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">Work Experience</h1>
        <div className="w-80 h-1 bg-[#7843E9] rounded-full"></div>
      </div>

      {/* Experience Cards */}
      <div className="mt-10 flex flex-col gap-8 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-xl font-bold text-gray-900">{exp.role}</h2>
              <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
            </div>
            <h3 className="text-lg font-semibold text-indigo-700 mt-1">{exp.company}</h3>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
