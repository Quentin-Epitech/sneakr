import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './assets/Designer.png';

const Home = () => {
  const [sneakers, setSneakers] = useState([]);
  const [filteredSneakers, setFilteredSneakers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(response => {
        setSneakers(response.data);
        setFilteredSneakers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);


  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    
    const filtered = sneakers.filter(sneaker => 
      sneaker.nom.toLowerCase().includes(value)
    );
    
    setFilteredSneakers(filtered);
  };
  

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgba(241, 241, 231, 1)' }}>
      <div className="flex items-center justify-center pt-6 mb-4">
        <img 
          src={logo} 
          alt="Sneakr Logo" 
          className="w-40 h-40"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mr-4">
            Top des paires de Sneakers les plus chers!
          </h1>
          <input 
            type="text" 
            placeholder="Rechercher une paire..." 
            value={searchTerm}
            onChange={handleSearch}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSneakers.length > 0 ? (
            filteredSneakers.map((sneaker) => (
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
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              Aucune sneaker trouvée ! 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;