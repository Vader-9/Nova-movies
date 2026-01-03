import { Link } from "react-router-dom"
import { assets } from '../assets/assets'
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
            <Link to='/' className="max-md:flex-1">
                <img src={assets.logo} alt="" className="w-36 h-auto" />
            </Link>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xl md:hidden">

                    {/* Close icon */}
                    <X
                        className="absolute top-6 right-6 w-7 h-7 text-white cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu */}
                    <div className="h-full flex flex-col items-center justify-center gap-8 text-white text-xl font-medium">
                        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/movies" onClick={() => setIsOpen(false)}>Movies</Link>
                        <Link to="/">Theaters</Link>
                        <Link to="/">Releases</Link>
                        <Link to="/favourites">Favourites</Link>
                    </div>
                </div>
            )}


            <div className="flex items-center gap-8">
                <Search className="max-md:hidden w-6 h-6 cursor-pointer" />
                <button className="px-4 py-1 sm:px-7 sm:py-2 bg:primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">Login</button>
            </div>

            <Menu className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>
    )
}

export default Nav