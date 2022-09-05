import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddFlat from './components/AddFlat';
import HeaderComponent from "./components/Header";
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import TransactionPage from './pages/TransactionPage';



function App() {
  return (
    <>

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='SignUp' element={<SignUpPage/>}/>
          <Route path='dashboard' element={<DashboardPage/>}/>
          <Route path='transactions/:flatId' element={<TransactionPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
