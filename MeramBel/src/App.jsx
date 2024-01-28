import { useState } from 'react'
import Navbar from './Navbar';
import SiteRoutes from './SiteRoutes';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <div className='col-sm-12' >
          <SiteRoutes />
        </div>


      </div>

    </>
  );
}

export default App;

