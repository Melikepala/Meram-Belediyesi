import React from 'react';
import './style.css';
const Park3 = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//Koza%C4%9Fa%C3%A7,+Koza%C4%9Fa%C3%A7+Park%C4%B1,+42090+Meram%2FKonya/@37.8060044,32.4281219,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d0819e42d9a387:0x508a6170edfba352!2m2!1d32.4281219!2d37.8060044?entry=ttu')
  };

 
    const smallImages = [
      'public/images/Park3/image.2.jpg',
      'public/images/Park3/image.3.jpg',
      'public/images/Park3/image.4.jpg',
      'public/images/Park3/image.5.jpg',
      'public/images/Park3/image.6.jpg',
      'public/images/Park3/image.7.jpg',
      
    ];
  return (
    
    <div>
      <br /><br />
      <div className="info-box">
      <h2>Kozaağaç Parkı</h2>
      <div className="info-section">
      <h4>Toplu Ulaşım</h4>
      <ul>
        <li>Otobüs - 75 Numaralı Gödene Beybes</li>
        <li>Otobüs - 84 Numaralı Gödene Toki 1.Etap</li>
        <li>Otobüs - 12 Numaralı Kozaağaç</li>
        <li>Otobüs - 13 Numaralı Çayırbağı Hatıp</li>
      </ul></div>
      <div className="info-section">
      <p><b>Adres:</b>Kozağaç, 42090 Meram/Konya</p>
      <p><b>Telefon:</b>0332 444 55 42</p>
      <button  className="btn btn-success"><a className="custom-link"  href="#" onClick={openGoogleMaps}>Yol tarifi</a></button>
    </div></div>  
  <br /><br /><br />

      {/* Küçük Resim Kutusu */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {smallImages.map((image, index) => (
          <div key={index} className="col">
            <img
              src={image}
              className="img-thumbnail"
              alt={`Küçük Resim ${index + 1}`}
            />
          </div>
        ))}
      </div>
      
    
  
    </div>
  );
};

export default Park3;
