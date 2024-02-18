import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </>
  )
}

export default App
