import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login'
import Test from '@/pages/Test'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="test" element={<Test />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
