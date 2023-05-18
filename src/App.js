import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, useNavigate, Link } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Navigation from './components/\bNavigation';


function App() {
  return (
    <AuthProvider>
      <Navigation/>
        <Outlet />
    </AuthProvider>
  );
}

export default App;
