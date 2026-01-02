import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './Componepts/Nav'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetails from './Pages/MovieDetails'
import Seatlayout from './Pages/Seatlayout'
import Mybookings from './Pages/Mybookings'
import Favourites from './Pages/Favourites'
import { Toaster } from 'react-hot-toast'
import Footer from './Componepts/Footer'
import { useState } from 'react'
import { dummyShowsData } from './assets/assets'

function App() {

  const isAdminRoute = useLocation().pathname.startsWith("./admin")


  const [films, setFilms] = useState(dummyShowsData);

  return (
    <div className='bg-black'>
     <Toaster/>
         {!isAdminRoute && <Nav/> }
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies films={films} />}/>
            <Route path='/movies/:id' element={<MovieDetails films={films} />}/>
            <Route path='/movies/:id/:date' element={<Seatlayout/>}/>
            <Route path='/mybookings' element={<Mybookings/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
         </Routes>
         {!isAdminRoute && <Footer/> }
      
    </div>
  )
}

export default App
