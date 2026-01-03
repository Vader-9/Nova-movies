//import { assets } from '../assets/assets';
//import { dummyShowsData } from '../assets/assets';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Movies({films, }){
const navigate = useNavigate();
    

    return(
        <div>
            <div>
                <div className='p-8 md:p-30 flex flex-col justify-center text-center'>
                    <div className='flex justify-between mb-6'><p>Now Showing</p>
                        <p className='flex justify-between'>View All<ArrowRight /></p></div>
                    <div className='flex justify-center text-center '>
                        <div className='grid grid-cols-1  gap-5 md:grid-cols-4 md:rows-2'>
                            {films.map((film) => (
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
                    <div className='w-full flex justify-center text-center mt-10'>
                        <button className=" bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer w-[10%] px-4 py-2">show more</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movies