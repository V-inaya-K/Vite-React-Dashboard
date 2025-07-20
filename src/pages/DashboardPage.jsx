import React, { useEffect, useState } from 'react';
import { fetchPokemonList } from '../services/pokemonService';
import { logout } from '../services/authService';
import PokemonCard from '../components/PokemonCard';

const DashboardPage = ({ onLogout }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList().then(setPokemonList);
  }, []);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
  <div className="dashboard-background">
    <div className="container">
      <div className="dashboard-header">
        <h2>Pokémon List</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className="grid">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} index={index + 1} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default DashboardPage;
