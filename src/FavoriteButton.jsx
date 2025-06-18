import { useEffect } from "react";
import { useState } from "react";

export function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
console.log('Изменилось состояние')
  }, [isFavorite])

  return (
    <button onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}
