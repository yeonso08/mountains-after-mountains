import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login'
import Test from '@/pages/Test'
import Home from '@/pages/home'
import Mountain from '@/pages/mountain'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="mountain/:mountainId" element={<Mountain />} />
        <Route path="test" element={<Test />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
