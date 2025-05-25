import React from 'react';

export const Content: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 font-sans">
      <header className="bg-white/60 backdrop-blur-md p-6 sm:p-8 shadow-lg text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Prabhu Madipalli
        </h1>
        <p className="text-base sm:text-lg mt-2 text-gray-600">
          Software Engineer | Full Stack Developer
        </p>
        <p className="text-sm text-gray-500">
          📧 prabhumns@alumni.iitm.ac.in | 📧 prabhumns123@gmail.com | 📞
          +91-9791168059
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/prabhumns"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prabhu-madipalli/"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto mt-10 bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-t-4 border-blue-600">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 border-b pb-2">
          Professional Summary
        </h2>
        <p className="mt-4 text-gray-700 text-sm sm:text-base">
          Software Engineer with ~5 years of experience in building scalable
          full stack applications, specializing in cloud-native and serverless
          architectures using AWS. Skilled in Java, React, Spark, and DevOps
          pipelines.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-700">Amazon – SDE II</h3>
          <p className="text-sm text-gray-500">Apr 2024 – Present</p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>
              Built real-time ingestion pipeline with Lambda + SNS; reduced SLA
              from 48hr → 1 min.
            </li>
            <li>
              Led Micro-Frontend migration using Cloudfront for domain
              isolation.
            </li>
            <li>
              Built rule engine service enabling dynamic business restrictions.
            </li>
            <li>
              Daily Glue jobs to auto-correct de-normalize DynamoDB data using
              Spark.
            </li>
            <li>
              Mentored two engineers, initiated internal knowledge-sharing
              series.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-700">Amazon – SDE</h3>
          <p className="text-sm text-gray-500">Oct 2022 – Mar 2024</p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>
              Built approval workflow UI in React + TypeScript with step-wise
              wizard experience.
            </li>
            <li>Designed backend APIs in Java with Fargate + API Gateway.</li>
            <li>
              Used Step Functions + Lambda + SNS for orchestrated long-running
              processes.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-700">
            Societe Generale – Software Engineer
          </h3>
          <p className="text-sm text-gray-500">Aug 2020 – Sep 2022</p>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Built Spring Boot microservices, deployed via Kubernetes.</li>
            <li>Integrated new vendor platform with internal systems.</li>
            <li>
              Implemented Jenkins CI/CD pipeline with Sonar for quality checks.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-700">Internships</h3>
          <ul className="mt-3 list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>
              <strong>Citicorp:</strong> Migrated builds from ANT to Maven,
              integrated with TeamCity.
            </li>
            <li>
              <strong>Lean Agri (now BharatAgri):</strong> Built ML models for
              satellite crop detection.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-10 bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-t-4 border-indigo-600">
        <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 border-b pb-2">
          Education
        </h2>
        <p className="mt-4 text-gray-700 text-sm sm:text-base">
          <strong>Indian Institute of Technology Madras</strong> – B.Tech,
          2016–2020 – CGPA: 8.05/10
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-10 mb-16 bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-t-4 border-teal-600">
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-700 border-b pb-2">
          Skills
        </h2>
        <ul className="mt-4 list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
          <li>
            <strong>Expert:</strong> Java, React, Spark (Scala), Docker, Spring,
            Dagger, Guice, MongoDB
          </li>
          <li>
            <strong>Cloud:</strong> AWS (Lambda, Fargate, Glue, DynamoDB, S3,
            Cloudfront, API Gateway, IAM)
          </li>
          <li>
            <strong>Intermediate:</strong> Kubernetes, Node.js, Python, SQL,
            Jenkins
          </li>
        </ul>
      </section>
    </main>
  );
};
