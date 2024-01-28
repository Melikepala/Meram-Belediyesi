import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();

  const handleNavigateToParks = () => {
    // Diğer işlemleri burada yapabilirsiniz
    navigate('/parks');
  };

  return (

    <nav className="navbar navbar-expand-lg bg-green-white">
      <div className="container-fluid">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/images/image.1.png" alt="Meram Belediyesi Logo" height="50" className="me-2" />

          <span className="d-none d-lg-inline-block">Meram Belediyesi</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"> <NavLink className="nav-link" to="/home">Anasayfa</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/about">Hakkımızda</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/contact">İletişim</NavLink></li>
            <li className="nav-item dropdown">
              <button className="nav-link btn" onClick={handleNavigateToParks}>Parklar</button>


            </li></ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
