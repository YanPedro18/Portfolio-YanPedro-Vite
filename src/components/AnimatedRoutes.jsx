
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import PageNotFound from '../Pages/PageNotFound';
import Sobre from '../Pages/Sobre';
import Projetos from '../Pages/Projetos';



function AnimatedRoutes() {
    const location = useLocation();

  return (
    
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Projetos" element={<Projetos />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>


  )
}

export default AnimatedRoutes

// ;;rfce