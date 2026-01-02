import { Link } from "react-router-dom"
import {assets} from '../assets/assets'
import { Menu,Search,X } from "lucide-react";
import { useState } from "react";

function Nav(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
            <Link to='/' className="max-md:flex-1">
               <img src={assets.logo} alt=""  className="w-36 h-auto"/>
            </Link>

            <div className="flex gap-4">
         
                <X className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" onClick={()=> setIsOpen(!isOpen)}/>

                 <Link to="/" onClick={()=> {scrollTo(0,0), setIsOpen(!isOpen)}}>Home</Link>
                 <Link to="/movies" onClick={()=> {scrollTo(0,0), setIsOpen(!isOpen)}}>Movies</Link>
                 <Link to="/"onClick={()=> {scrollTo(0,0), setIsOpen(!isOpen)}}>Theaters</Link>
                 <Link to="/"onClick={()=> {scrollTo(0,0), setIsOpen(!isOpen)}}>Releases</Link>
                 <Link to="favourites"onClick={()=> {scrollTo(0,0), setIsOpen(!isOpen)}}>Favourites</Link>
                 
            </div>

            <div className="flex items-center gap-8">
                <Search className="max-md:hidden w-6 h-6 cursor-pointer"/>
                <button className="px-4 py-1 sm:px-7 sm:py-2 bg:primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">Login</button>
            </div>

            <Menu className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer" onClick={()=> setIsOpen(!isOpen)}/>
        </div>
    )
}

export default Nav