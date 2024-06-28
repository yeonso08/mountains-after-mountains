import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login'
import Test from '@/pages/Test'
import RegisterSchedule from '@/pages/schedule/register'
import KakaoRedirect from '@/pages/login/KakaoRedirect'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="test" element={<Test />} />
        <Route path="/" element={<Login />} />
        <Route path="/schedule/register" element={<RegisterSchedule />} />
        <Route path="/auth" element={<KakaoRedirect />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
