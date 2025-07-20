export const fetchPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Failed to fetch Pokémon:', error);
    return [];
  }
};
