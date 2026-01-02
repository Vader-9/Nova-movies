import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { dummyShowsData } from "../assets/assets";
import { assets } from "../assets/assets";

function Home() {
  return (
    <div className="flex flex-col text-white">

      {/* HERO SECTION */}
      <div
        className="bg-cover bg-center min-h-screen px-6 py-10 md:px-16 md:py-20"
        style={{ backgroundImage: `url(${assets.background})` }}
      >
        <div className="max-w-3xl mt-24">
          <img
            src={assets.marvelLogo}
            alt="Marvel Logo"
            className="h-12 mb-4"
          />

          <h1 className="text-4xl md:text-6xl font-bold">
            Guardians of the Galaxy
          </h1>

          <div className="flex gap-4 mt-4 text-sm md:text-base">
            <p>Action | Adventure | Sci-Fi</p>
            <p>2018</p>
            <p>2hrs</p>
          </div>

          <p className="mt-4 max-w-xl">
            In a post-apocalyptic world where cities ride on wheels and consume
            each other to survive, two people meet in London and try to stop a
            conspiracy.
          </p>

          <button className="mt-6 px-6 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium">
            Explore movies
          </button>
        </div>
      </div>

      {/* NOW SHOWING */}
      <div className="px-6 py-12 md:px-16">
        <div className="flex justify-between mb-6">
          <p className="text-lg font-semibold">Now Showing</p>
          <p className="flex items-center gap-1 cursor-pointer">
            View All
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.isArray(dummyShowsData) &&
            dummyShowsData
              .filter((film) => film && film.id)
              .map((film) => (
                <Link
                  key={film.id}
                  to={`/movies/${film.id}`}
                  className="bg-blue-1000 rounded-3xl p-4 hover:scale-105 transition shadow-xl shadow-black/40"
                >
                  <img
                    src={film.poster_path || "/fallback.jpg"}
                    alt={film.title || "Movie poster"}
                    className="w-full aspect-square object-cover rounded-xl"
                  />

                  <h2 className="mt-2 font-semibold">
                    {film.title ?? "Untitled Movie"}
                  </h2>

                  <div className="flex justify-between text-sm mt-1">
                    <p>
                      {film.release_date
                        ? new Date(film.release_date).getFullYear()
                        : "—"}
                    </p>

                    <p>
                      {film.runtime
                        ? `${Math.floor(film.runtime / 60)}h ${film.runtime % 60}m`
                        : "—"}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <button className="px-4 py-1 bg-primary hover:bg-primary-dull rounded-full text-sm">
                      Buy Ticket
                    </button>

                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500" />
                      <p>{film.vote_average ?? "N/A"}</p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-primary hover:bg-primary-dull rounded-full">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
