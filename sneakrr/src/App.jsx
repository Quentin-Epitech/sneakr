import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './assets/Designer.png';

const App = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(response => {
        setSneakers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgba(241, 241, 231, 1)' }}>
     
      <header>
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="Sneakr Logo" 
            className="w-40 h-40"
          />
        </div>
      </header>

      
      <div className="p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Top des paires de Sneakers les plus chers!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sneakers.map((sneaker) => (
            <div key={sneaker.id} className="bg-white rounded-lg shadow-md p-4">
              <img 
                src={sneaker.image} 
                alt={sneaker.nom} 
                className="w-full h-100 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700">{sneaker.nom}</h2>
              <p className="text-gray-600">{sneaker.description}</p>
              <p className="text-gray-800 font-bold mt-2">{sneaker.prix} €</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
