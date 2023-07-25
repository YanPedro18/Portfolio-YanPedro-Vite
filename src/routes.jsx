import { BrowserRouter } from "react-router-dom";
// import Home from './Pages/Home';
// import PageNotFound from './Pages/PageNotFound';
// import Sobre from './Pages/Sobre';
// import Projetos from './Pages/Projetos';
import AnimatedRoutes from "./components/AnimatedRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default AppRoutes;
