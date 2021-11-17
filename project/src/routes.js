import {
  Routes,
  Route
} from 'react-router-dom'

import Buttons from './pages/Buttons'
import ImagesGallery from './pages/ImagesGalley'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Buttons />} />
      <Route path="/gallery" element={<ImagesGallery />} />
    </Routes>
  )
}