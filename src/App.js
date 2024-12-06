
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from './components/page/LoginPage';
import NewRegistracion from './components/page/NewRegistracion';
import VisualizerPage from './components/page/HomePage';

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/" >LoginPage</Link>
          <Link to="/VisualizerPage" >Visualizer page</Link>
          <Link to="NewRegistracion" >New registracion</Link>
        </ul>
      </div>
      <Container>
        <Routes>
            <Route exact path="/" element= {< LoginPage />}/>
            <Route exact path="/VisualizerPage" element= {< VisualizerPage />}/>
            <Route exact path="/NewRegistracion" element= {< NewRegistracion />}/>
        </Routes>
      </Container>
      <footer>Rodapé</footer>
    </Router>
  );
}

export default App;
