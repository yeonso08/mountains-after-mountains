import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login'
import Test from '@/pages/Test'
import RegisterSchedule from '@/pages/schedule/register'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="test" element={<Test />} />
        <Route path="/" element={<Login />} />
        <Route path="/schedule/register" element={<RegisterSchedule />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
