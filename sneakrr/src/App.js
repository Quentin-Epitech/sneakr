import React from "react";
import "./App.css";

const App = () => {
  const sneakers = [
    { id: 1, name: "Air Max 97", price: "150€", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Yeezy Boost 350", price: "220€", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Jordan 1 Retro", price: "180€", image: "https://via.placeholder.com/150" },
  ]; // A changer,mettre dans une db 


  return (
    <div className="app">
      <header className="header">
        <h1>Sneakr</h1>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
            <path d="M 24.046875 2.0136719 C ..." /> 
          </svg>
        </div>
      
      </header>
      <main className="main">
        <h2>Nos Sneakers</h2>e
        <div className="sneaker-grid">
          {sneakers.map((sneaker) => (
            <div key={sneaker.id} className="sneaker-card">
              <img src={sneaker.image} alt={sneaker.name} />
              <h3>{sneaker.name}</h3>
              <p>{sneaker.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
