import { memo, useEffect } from "react";
import { useState } from "react";

function FavoriteButton() {
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
export default memo(FavoriteButton)