import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login'
import Test from '@/pages/Test'
import KakaoRedirect from '@/pages/login/KakaoRedirect'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="test" element={<Test />} />
        <Route path="/" element={<Login />} />
        <Route path="/auth" element={<KakaoRedirect />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
