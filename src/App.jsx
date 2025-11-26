import Home from './Components/Home'
import { Route, Routes,Navigate } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}

export default App