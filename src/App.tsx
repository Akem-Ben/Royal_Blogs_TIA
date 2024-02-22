import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { SinglePost } from './pages/SinglePostPage/SinglePost'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VerificationPage } from './pages/VerificationPage/VerificationPage'


function App() {

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<h1>Not Found</h1>} />
      <Route path='/singlepost/:postId' element={<SinglePost />} />
      <Route path="/verification/:token" element={<VerificationPage />} />
    </Routes>
    </>
  )
}

export default App
