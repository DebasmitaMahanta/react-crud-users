import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto py-4">
     
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          About User Manager
        </h1>
        <p className="text-gray-600 mt-2 leading-relaxed">
          User Manager is a simple CRUD application built with React and
          TypeScript. The goal of this project is to demonstrate clean
          architecture, reusable components, and extensible form design.
        </p>
      </header>

      
      <div className="space-y-6">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Create, view, update, and delete users</li>
            <li>Form validation with reusable input components</li>
            <li>Schema-driven approach for easy field extensibility</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Technology Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>React with TypeScript</li>
            <li>Tailwind CSS for styling</li>
            <li>JSON Server for mock API integration</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;
