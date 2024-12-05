import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Ma Première App React
        </h1>
        <p className="text-gray-700 text-center">
          Bienvenue dans mon application utilisant Tailwind CSS !
        </p>
        <button className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
          Commencer
        </button>
      </div>
    </div>
  );
}

export default App;