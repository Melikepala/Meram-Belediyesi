import React from 'react';
import './style.css';
const Park4 = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//Akyoku%C5%9F,+Yunus+Emre,+D330+No:258,+42090+Meram%2FKonya/@37.8732808,32.3992115,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14d086f4a4ca75db:0x171ff31a97423180!2m2!1d32.4231011!2d37.8810587!3e0?entry=ttu');
  };


  const smallImages = [
    'public/images/Park4/image.2.jpg',
    'public/images/Park4/image.3.jpg',
    'public/images/Park4/image.4.jpg',
    'public/images/Park4/image.5.jpg',
    'public/images/Park4/image.6.jpg',
    'public/images/Park4/image.7.jpg',

  ];
  return (

    <div>
      <br /><br />
      <div className="info-box">
        <h2>Akyokuş Parkı</h2>
        <div className="info-section">
        </div>
        <div className="info-section">
          <p><b>Adres:</b>Yunus Emre, Yunus Emre Mah. Beyşehir Çevre Yolu, <br />Tıpfakültesi, Enes Sk. No:7/B, 42080 Meram/Konya</p>
          <button className="btn btn-success"><a className="custom-link" href="#" onClick={openGoogleMaps}>Yol tarifi</a></button>
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

export default Park4;
