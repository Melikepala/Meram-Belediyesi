import React from 'react';
import './style.css';
const Park1 = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//37.8339535,32.4154671/@37.8346927,32.3332412,12z?entry=ttu');
  };


  const smallImages = [
    'public/images/Park1/image.11.jpg',
    'public/images/Park1/image.5.jpg',
    'public/images/Park1/image.6.jpg',
    'public/images/Park1/image.12.jpg',
    'public/images/Park1/image.8.jpg',
    'public/images/Park1/image.10.jpg',

  ];
  return (

    <div>
      <br /><br />
      <div className="info-box">
        <h2>Dutlu Millet Bahçesi</h2>
        <div className="info-section">
          <h4>Toplu Ulaşım</h4>
          <ul>
            <li>Dolmuş - Meram Yeniyol</li>
            <li>Dolmuş - Meram Yaka</li>
            <li>Otobüs - 2 Numaralı Yaka</li>
            <li>Otobüs - 3, 4, 74 Numaralı Yeniyol</li>
          </ul></div>
        <div className="info-section">
          <p><b>Adres:</b>Durunday Mah. Dutlu Cad. 42010 Meram/KONYA</p>
          <p><b>Telefon:</b>444 30 42</p>
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

export default Park1;
