import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { SinglePost } from './pages/SinglePostPage/SinglePost'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VerificationPage } from './pages/VerificationPage/VerificationPage'
import { BlogPostProvider } from './Components/Contexts/PostContexts'
import {UserProvider} from './Components/Contexts/userDetailsContext'
import { ThemeContextProvider } from './Components/Contexts/ThemeContext'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    // errorElement: <NotFound />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },


  {
    path: '/singlepost/:postId',
    element: <SinglePost />,
  },
  {
    path: '/verification/:token',
    element: <VerificationPage />,
  }
]);



function App() {

  return (
    <>
    <ToastContainer />
    <BlogPostProvider>
    <UserProvider>
    <ThemeContextProvider>
    <RouterProvider router={routes} />
    </ThemeContextProvider>
    </UserProvider>
    </BlogPostProvider>
    </>
  )
}

export default App
