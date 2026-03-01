import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ChildView from './pages/ChildView/ChildView'

export default function App() {
  return (
    <BrowserRouter basename="/schwimmabzeichen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kind/:childId" element={<ChildView />} />
      </Routes>
    </BrowserRouter>
  )
}
