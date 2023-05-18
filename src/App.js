import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Navigation  from './components/Navigation';
import HomePage from './components/HomePage';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const handleClick = (path,e) =>{
    e.preventDefault();
    navigate(path);
  }
  return (
    <div className="App">
      <Navigation />
      <a onClick={() => handleClick('/')}>  home </a>
      <a onClick={() => handleClick('/error')} >error </a>
    </div>
  );
}

export default App;
