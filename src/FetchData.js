// FetchData.js
import React, { useState, useEffect } from 'react';

const FetchData = ({ page }) => { // Adicionando 'page' como parâmetro
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`); // Usando o número da página na URL da API
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]); // Dependência adicionada: 'page'

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="character-cards">
      <h2>Rick and Morty Characters</h2>
      <div className="card-container">
        {data && data.results.map(character => (
          <div className="card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>ID: {character.id}</p>
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;

