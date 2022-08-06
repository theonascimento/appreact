import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Inicio from "./Inicio";
import Marvel from "./Marvel";
import Pokemon from "./Pokemon";
import StarWars from "./StarWars";
import NotFound from "./NotFound";

const APP = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/starwars" element={<StarWars />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default APP;