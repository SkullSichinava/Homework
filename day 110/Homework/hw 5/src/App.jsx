import React from 'react';

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-center text-4xl font-bold">Goal Oriented Academy (GOA)</h1>
        <p className="text-center mt-2">Learning Coding with Passion</p>
      </header>

      <main className="px-4 py-12">
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">About GOA</h2>
          <p>
            Goal Oriented Academy (GOA) is a leading institution where over 1500 students learn
            coding. With more than 40 groups, GOA provides an environment where students can
            develop their coding skills. I am part of Group 5, where we focus on Python, CSS, HTML,
            and JavaScript.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Group 5</h2>
          <p>
            In Group 5, we have been learning basic Python, CSS, HTML, and JavaScript. It has been
            an amazing experience, with our skills growing each day under the guidance of our teacher,
            Davit Grdzelishvili.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Teacher: Davit Grdzelishvili</h2>
          <p>
            Our teacher, Davit Grdzelishvili, is truly an exceptional instructor. He has a deep
            understanding of coding and teaches with passion and patience. Thanks to him, we are
            learning at our own pace and making great progress in mastering coding.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
          <p>If you want to join GOA or learn more, feel free to reach out to us!</p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Goal Oriented Academy (GOA). All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
