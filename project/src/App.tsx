import { Header } from "./components/Header";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from './routes'

function App() {

  return (
    <Router>
      <Header>
        <Link to="/">Buttons</Link>
        <Link to="gallery">Gallery</Link>
      </Header>

      <Routes />
    </Router>
  );
}

export default App;
