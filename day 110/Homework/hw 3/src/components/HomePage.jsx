import React from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg text-gray-600">Welcome to my personal website</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700 mt-2">
          Hello! I'm Vache Kakalashvili. Im 14 Years old and i love maths and science. Im also fond of writing codes and learning about programming.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside mt-2">
          <li>HTML knowledge: mediocre</li>
          <li>CSS knowledge: mediocre</li>
          <li>JSS knowledge: starting out</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-gray-700 mt-2">
          Here are some of the projects I've worked on.
        </p>
      </section>
    </div>
  );
}
