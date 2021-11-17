import { Header } from "./components/Header";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import MainRoutes from './routes'


function App() {

  return (
    <Router>
      <Header>
        <Link to="/">Buttons</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="storage">Storage</Link>
      </Header>

      <MainRoutes />

    </Router>
  );
}

export default App;
