import React from 'react';
import './style.css';
const Park5 = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//Yorganc%C4%B1,+KONYA+MERAM+BA%C4%9ELARI,+42005+Meram%2FKonya/@37.8526857,32.4175958,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d087bfc6295397:0xe6490bd288f5a12c!2m2!1d32.4201707!2d37.8526815?entry=ttu');
  };


  const smallImages = [
    'public/images/Park5/image.2.jpg',
    'public/images/Park5/image.3.jpg',
    'public/images/Park5/image.4.jpg',
    'public/images/Park5/image.5.jpg',
    'public/images/Park5/image.6.jpg',
    'public/images/Park5/image.7.jpg',

  ];
  return (

    <div>
      <br /><br />
      <div className="info-box">
        <h2>Meram Bağları Parkı</h2>
        <div className="info-section">
          <h4>Toplu Ulaşım</h4>
          <ul>
            <li>Otöbüs-1 Numaralı Hocafıkıh</li>
            <li>otobüs- 2 Numaralı  Meram Yaka</li>
            <li>Otobüs -4 Numaralı Meram Yeniyol</li>
            <li>Otobüs -52 Numaralı Meram Devlet Hstanesi</li>
          </ul></div>
        <div className="info-section">
          <p><b>Adres:</b>Yorgancı, 42005 Meram/Konya</p>
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

export default Park5;
