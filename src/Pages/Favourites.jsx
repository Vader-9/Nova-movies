import React from 'react'
import { Star, X } from 'lucide-react'

function Favourites({ favourites, setFavorites }) {

    console.log(favourites)

    const removeFromFavourites = (id) => {
    
            setFavorites((prev) => prev.filter((film) => film.id !== id));
        
    }

    return (
        <div>
            <div>
                <div className='p-8 md:p-30 flex flex-col justify-center text-center'>

                    <div className='flex justify-center text-center '>
                        <div className='grid grid-cols-1  gap-5 md:grid-cols-4 md:rows-2'>
                            {favourites.map((film) => (
                                <div
                                    key={film.id}
                                    className="p-4 hover:scale-105 transition-transform rounded-2xl bg-blue-1000 text-white shadow-xl shadow-black/40"
                                >
                                    {/* IMAGE WRAPPER */}
                                    <div className="relative">
                                        <img
                                            src={film.poster_path}
                                            alt={film.title}
                                            className="w-full aspect-square object-cover rounded-xl"
                                        />

                                        {/* X ICON (TOP RIGHT) */}
                                        <X
                                            className="absolute top-2 right-2 w-6 h-6 text-white bg-black/50 backdrop-blur-md rounded-full p-1 cursor-pointer hover:bg-black/70 transition"
                                            onClick={() => removeFromFavourites(film.id)}
                                        />
                                    </div>

                                    <h1 className="mt-2 font-semibold">{film.title}</h1>

                                    <div className="w-full flex justify-between text-sm mt-1">
                                        <p className="font-bold">
                                            {new Date(film.release_date).getFullYear()}
                                        </p>
                                        <p>
                                            {Math.floor(film.runtime / 60)}h {film.runtime % 60}m
                                        </p>
                                    </div>

                                    <div className="w-full flex justify-between items-center mt-4">
                                        <button className="py-2 px-4 bg-primary hover:bg-primary-dull transition rounded-full font-medium">
                                            Buy Ticket
                                        </button>

                                        <div className="flex items-center gap-1">
                                            <Star className="text-yellow-500 w-5 h-5 " />
                                            <p>{film.vote_average}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Favourites