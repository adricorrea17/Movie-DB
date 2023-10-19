
import React, { useState } from 'react';
import axios from 'axios';
import { SearchMovies } from '../MoviedbReposity';

export default function Search() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const asycFn = async () => {
        await SearchMovies(query);
    }
    asycFn()
}, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Buscar</button>
    </div>
  );
}
