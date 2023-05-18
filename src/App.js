import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Navigation  from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
