import React from 'react'

function Contact() {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//37.85624,32.471911/@37.8562362,32.3894885,12z?entry=ttu');
  };
  return (
    <div className='text-contact'>
      <h2>Meram Belediyesi Hizmet Binası</h2>
      <ul>
        <li><b>Adres:</b>Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA</li>
        <li><b>Telefon:</b>0332 320 10 00</li>
        <li><b>Eposta</b>bizimmeram@meram.bel.tr</li>
        <li><b>Kep Adresi:</b>merambelediyesi@hs01.kep.tr</li>
        <li><b>E Tebligat:</b>35846-96487-38597</li>
        <li><b>IBAN</b>TR33 0001 2009 5240 0007 0000 02</li>
      </ul>
      <button className="btn btn-success"><a className="custom-link" href="#" onClick={openGoogleMaps}>Yol tarifi</a></button>
    </div>
  )
}

export default Contact