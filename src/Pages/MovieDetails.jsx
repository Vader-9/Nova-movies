import { useParams } from "react-router-dom";
import { CirclePlay, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

function MovieDetails({ films }) {

  const { id } = useParams();
  console.log(id);

  const filmDetails = films.find(
    (item) => item.id === Number(id)
  );

  const similarFilms = films.filter(
    (item) => filmDetails.genres[0].name  === item.genres[0].name && filmDetails.id !== item.id
  )

  console.log(similarFilms);

  return (
    <div className="p-5 flex flex-col items-center text-white mt-20 mb-10 md:p-16">
      <div className="w-full   flex flex-col justify-center items-center md:w-[70%] md:flex-row gap-6 md:mt-30">
        <img src={filmDetails?.poster_path} alt="" className="w-80 rounded-2xl m-2" />
        <div>
          <h1 className="m-2 text-primary text-lg">{filmDetails?.original_language}</h1>
          <p className="m-2 text-4xl font-bold">{filmDetails?.title}</p>
          <p className="m-2 flex gap-1"><Star className="text-yellow-400" />
            {filmDetails?.vote_average.toFixed(1)} User Rating</p>
          <p className="m-2 text-sm text-gray-400">{filmDetails?.overview}</p>
          <div className="flex gap-2 m-2">
            <p>{filmDetails?.runtime
              ? `${Math.floor(filmDetails.runtime / 60)}h ${filmDetails.runtime % 60}m`
              : "—"}</p>
            <p>{filmDetails?.genres?.map((genre) => genre.name).join(", ")}</p>
            <p>{filmDetails?.release_date}</p>
          </div>
          <div className="flex gap-3 mt-4  items-center m-2 ">
            <div className="flex flex-wrap items-center gap-3">
              {/* Book Tickets */}
              <button className="flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-2 bg-gray-600 hover:bg-gray-700 transition rounded-sm font-medium cursor-pointer">
                <CirclePlay className="w-5 h-5" />
                <span>Book Tickets</span>
              </button>

              {/* Buy Tickets */}
              <button className="flex items-center px-6 py-3 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-sm font-medium cursor-pointer">
                Buy Tickets
              </button>

              {/* Favorite */}
              <div className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 transition p-3 rounded-full cursor-pointer">
                <Heart className="w-5 h-5" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full text-center mt-10  md:px-16">
        <h1>Your Favorite Cast</h1>
        <div className="w-full mt-4 overflow-x-auto">
          <div className="flex gap-4 px-2">
            {filmDetails?.casts?.map((cast) => (
              <div
                key={cast.id}
                className="flex-shrink-0 flex flex-col items-center p-2 rounded-lg"
              >
                <img
                  src={cast.profile_path}
                  alt={cast.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="mt-1 text-sm text-center whitespace-nowrap">
                  {cast.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div></div>

      <div>

        <div>
          <div className='p-8 md:p-30 flex flex-col justify-center text-center'>
            <h1 className="text-left">Movies you may like</h1>
            <div className='flex justify-center text-center '>
              <div className='grid grid-cols-1  gap-5 md:grid-cols-4 md:rows-2'>
                {similarFilms.map((film) => (
                  <Link key={film.id}
                    to={`/movies/${film.id}`} className='p-2  w-70 h-100 hover:scale-105 transition-transform rounded-lg bg-blue-1000 text-white shadow-xl shadow-black/40 rounded-4xl p-4'>
                    <img src={film.poster_path} alt={film.title} className="w-full aspect-[3/3] object-cover rounded-lg" />
                    <h1>{film.title}</h1>
                    <div className='w-full flex justify-between text-center  '>
                      <p className='text-1xl font-bold'>{new Date(film.release_date).getFullYear()}</p>
                      <p>{film.genres?.slice(0, 2).map(g => g.name).join(", ")} | {film.duration}</p>
                      <p>{Math.floor(film.runtime / 60)}h {film.runtime % 60}m</p>
                    </div>
                    <div className='w-full flex justify-between p-1 text-center mt-5'>
                      <button className="py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer w-[40%]">Buy Ticket</button>
                      <div className='flex justify-between text-center gap-1 mt-2'>
                        <Star className="text-yellow-500 text-lg" />
                        <p>{film.vote_average}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieDetails