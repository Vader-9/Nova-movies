import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-40 w-full  flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 ">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={assets.logo} alt="Logo" className="w-36 h-auto" />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-white font-medium md:flex gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/">Theaters</Link>
          <Link to="/">Releases</Link>
          <Link to="/favourites">Favourites</Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          <Search className="hidden md:block w-6 h-6 text-white cursor-pointer" />

          <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium text-white">
            Login
          </button>

          {/* Mobile menu icon */}
          <Menu
            className="md:hidden w-8 h-8 text-white cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl md:hidden">
          
          {/* Close icon */}
          <X
            className="absolute top-6 right-6 w-7 h-7 text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu links */}
          <div className="h-full flex flex-col items-center justify-center gap-8 text-white text-xl font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/movies" onClick={() => setIsOpen(false)}>Movies</Link>
            <Link to="/">Theaters</Link>
            <Link to="/">Releases</Link>
            <Link to="/favourites" onClick={() => setIsOpen(false)}>Favourites</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
