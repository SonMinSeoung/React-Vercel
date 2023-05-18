import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Navigation  from './components/Navigation';
import HomePage from './components/HomePage';
import { BrowserRouter, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const handleClick = (path,e) =>{
    e.preventDefault();
    navigate(path);
  }
  return (
    <div>
    <Link to="/">Go to Path</Link>
    <Link to="/error">Error</Link>
  </div>
  );
}

export default App;
