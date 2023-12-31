import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import { Login } from './pages/login/Login';
import {Register} from './pages/register/Register';
import {Logout} from './pages/logout/Logout';


function App() {
  const user = useSelector((state)=>state.user_details.user)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element= { user ? <Home /> : <Navigate to="/login" replace/>} />
          <Route path="/login" element= {user ? <Navigate to="/" replace /> :  <Login />} />
          <Route path="/logout" element= {user ? <Logout /> : <Navigate to="/" replace />} />
          <Route path="/register" element= {user ?<Navigate to="/" replace /> :  <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
