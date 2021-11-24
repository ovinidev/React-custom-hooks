import {
  Routes,
  Route
} from 'react-router-dom'

import Buttons from './pages/Buttons'
import ImagesGallery from './pages/ImagesGalley'
import Storage from './pages/Storage'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/buttons" element={<Buttons />} />
      <Route path="/gallery" element={<ImagesGallery />} />
      <Route path="/storage" element={<Storage />} />
    </Routes>
  )
}