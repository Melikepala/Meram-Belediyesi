import React from 'react';
import './style.css';
const Park6 = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//Karaaslan+Aybah%C3%A7e,+Fidanl%C4%B1k+Cd.+No:15,+42010+Meram%2FKonya/@37.8089548,32.434313,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d08342cc2ee36f:0xd00b977d11db7cfc!2m2!1d32.516714!2d37.8089835?hl=tr&entry=ttu');
  };

 
    const smallImages = [
      'public/images/Park6/image.2.jpg',
      'public/images/Park6/image.3.jpg',
      'public/images/Park6/image.4.jpg',
      'public/images/Park6/image.5.jpg',
      'public/images/Park6/image.6.jpg',
      'public/images/Park6/image.7.jpg',
      
    ];
  return (
    
    <div>
      <br /><br />
      <div className="info-box">
      <h2>Karaaslan Parkı</h2>
      <div className="info-section">
      <h4>Toplu Ulaşım</h4>
      <ul>
        <li>Otobüs-27 Numaralı Alakova</li>
        <li>Otobüs-18 Numaralı Adana Çevre Yolu,</li>
        <li>Otobüs -26 Numaralı Çatalhüyük,</li>
        <li>Otobüs - 91 Numaralı Kaşınhanı,</li>
      </ul></div>
      <div className="info-section">
      <p><b>Adres:</b>Karaaslan Aybahçe,<br /> Fidanlık Cd. No:15, 42010 Meram/Konya</p>
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

export default Park6;
