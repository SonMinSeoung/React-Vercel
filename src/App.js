import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Navigation  from './components/Navigation';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
