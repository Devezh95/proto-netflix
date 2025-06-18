import { FavoriteButton } from "./FavoriteButton";

export default function MovieCard({ image, rating }) {
  return (
    <div
      className="relative w-[200px] rounded-2xl overflow-hidden 
    bg-neutral-900 shadow-lg"
    >
      <img
        src={image}
        alt="Movie Poster"
        className="w-full h-auto object-cover"
      />
      <div className='absolute top-2 left-2 z-10'>
        
      <FavoriteButton  />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full
    bg-gradient-to-t from-black/80 to-transporent p-2 text-sm
    text-white font-semibold"
      >
        IMBd: {rating}
      </div>
     
    </div>
    
  );
}
