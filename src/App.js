import React, { useState } from 'react';
import FetchData from './FetchData';
import Button from './Components/Button';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) setPage(page - 1); // Certifique-se de não ir para uma página menor que 1
  };

  return (
    <div className="App">
      <FetchData page={page} /> {/* Passando 'page' como propriedade */}
      <div className="pagination">
        <Button onClick={goToPreviousPage} disabled={page === 1}>Anterior</Button>
        <span>Página {page}</span>
        <Button onClick={goToNextPage}>Próxima</Button>
      </div>
    </div>
  );
};

export default App;