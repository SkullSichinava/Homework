import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <header className="bg-teal-700 text-white py-4 text-center">
        <h1 className="text-4xl font-bold">Scorpion - TV Show</h1>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-8">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#cast" className="hover:underline">Cast</a></li>
            <li><a href="#episodes" className="hover:underline">Episodes</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="p-8">
        <h2 className="text-3xl font-semibold mb-4">About the Show</h2>
        <p>
          <strong>Scorpion</strong> is an American action drama television series that aired on CBS. 
          It follows the brilliant but eccentric Walter O'Brien and his team of misfits as they solve 
          complex cyber-crimes and high-stakes cases.
        </p>
      </section>

      <section id="cast" className="p-8 bg-gray-200">
        <h2 className="text-3xl font-semibold mb-4">Main Cast</h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="text-center">
            <h3 className="font-semibold">Elyes Gabel</h3>
            <p>Walter O'Brien</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Ari Stidham</h3>
            <p>Sylvester Dodd</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Katherine McPhee</h3>
            <p>Paige Dineen</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Eddie Kaye Thomas</h3>
            <p>Tobias M. Curtis</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Jadyn Wong</h3>
            <p>Happy Quinn</p>
          </div>
        </div>
      </section>

      <section id="episodes" className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Episodes</h2>
        <p>Explore all episodes of the show and get a deeper dive into the cases and challenges the team faces.</p>
      </section>

      <footer className="bg-teal-700 text-white py-4 text-center">
        <p>&copy; 2024 Scorpion TV Show Fan Page</p>
      </footer>
    </div>
  );
}

export default App;
