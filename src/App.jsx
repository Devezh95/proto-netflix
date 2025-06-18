import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import MovieCard from "./MovieCard";
import { MOVIES } from "./movies.data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const movies = MOVIES.filter((movie) =>
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img src="/netflix.png" alt="Netflix" className="h-8 w-auto" />
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search..."
          className="border px-2 py-1 border-white/15 rounded outline-0"
        />
      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.name}
              image={movie.image}
              rating={movie.rating}
            />
          ))
        ) : (
          <p>Movies not fount</p>
        )}
      </main>
    </div>
  );
}

export default App;
