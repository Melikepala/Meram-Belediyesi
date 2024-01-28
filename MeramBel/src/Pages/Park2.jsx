import React from 'react';
import './style.css';
const Park2 = () => {
  const openGoogleMaps = () => {
    // Google Haritalar'a yönlendirme işlemleri burada gerçekleştirilebilir
    window.open('https://www.google.com/maps/dir//37.8294793,32.4136325/@37.8288765,32.3315814,12z?entry=ttu');
  };


  const smallImages = [
    'public/images/Park2/image.2.jpg',
    'public/images/Park2/image.3.jpg',
    'public/images/Park2/image.4.jpg',
    'public/images/Park2/image.8.jpg',
    'public/images/Park2/image.6.jpg',
    'public/images/Park2/image.7.jpg',

  ];
  return (

    <div>
      <br /><br />
      <div className="info-box">
        <h2>80 Binde Devr-i Alem Parkı</h2>
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
          <p><b>Telefon:</b>0 332 327 00 61</p>
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

export default Park2;
