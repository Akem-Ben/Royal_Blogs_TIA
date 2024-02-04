import './App.css'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './pages/blog'
import { Hero } from './components/Hero/Hero'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<BlogPage />} />
    </Routes>
    </>
  )
}

export default App
