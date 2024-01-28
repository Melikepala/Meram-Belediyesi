import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Parks from './Pages/Parks'
import Park1 from './Pages/Park1'
import Park2 from './Pages/Park2'
import Park3 from './Pages/Park3'
import Park4 from './Pages/Park4'
import Park5 from './Pages/Park5'
import Park6 from './Pages/Park6'
import Home from './Pages/Home'
function SiteRoutes() {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/parks' element={<Parks />}> </Route>
      {/* Park sayfaları */}
      <Route path='/park1' element={<Park1 />} />
      <Route path='/park2' element={<Park2 />} />
      <Route path='/park3' element={<Park3 />} />
      <Route path='/park4' element={<Park4 />} />
      <Route path='/park5' element={<Park5 />} />
      <Route path='/park6' element={<Park6 />} />
    </Routes>
  )
}

export default SiteRoutes