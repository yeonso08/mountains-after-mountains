import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '@/pages/login'
import Test from '@/pages/Test'
import Home from '@/pages/home'
import Mountain from '@/pages/mountain'
import RegisterSchedule from '@/pages/schedule/register'
import KakaoRedirect from '@/pages/login/KakaoRedirect'
import ModifySchedule from '@/pages/schedule/modify'
import ListSchedule from '@/pages/schedule/list'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="mountain/:mountainId" element={<Mountain />} />
        <Route path="test" element={<Test />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/schedule" element={<ListSchedule />} />
        <Route path="/schedule/register" element={<RegisterSchedule />} />
        <Route path="/schedule/modify" element={<ModifySchedule />} />
        <Route path="/auth" element={<KakaoRedirect />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
