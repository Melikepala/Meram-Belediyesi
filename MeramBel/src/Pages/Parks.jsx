import React from 'react';
import Card1 from '../Products/Card1';

function Park() {
  const handleButtonClick = () => {
    navigate("/Pages/Park1");
  };

  return (
    <div>
      <table>
        <tbody>
          <tr><td>
            <Card1
              image="public/images/Park1/image-3.jpg"
              title="Dutlu Millet Bahçesi"
              description="
        Bu park, doğayla iç içe, huzurlu bir atmosfere sahip."
              buttonText="İncele"
              onButtonClick={handleButtonClick} 
              targetPath="/park1"
            /></td><td>
              <Card1
                image="public/images/Park2/image.1.jpg"
                title="80 Binde Devr-i Alem Parkı"
                description="
        Bu park, doğayla iç içe, huzurlu bir atmosfere sahip."
                buttonText="İncele"
                onButtonClick={handleButtonClick}
                targetPath="/park2"
              /></td></tr><tr><td>
                <Card1
                  image="public/images/Park3/image.1.jpg"
                  title="Kozaağaç Parkı"
                  description="
        Bu park, doğayla iç içe, huzurlu bir atmosfere sahip."
                  buttonText="İncele"
                  onButtonClick={handleButtonClick}
                  targetPath="/park3"
                /></td>
            <td>
              <Card1
                image="public/images/Park4/image.1.jpg"
                title="Akyokuş Parkı"
                description="
        Bu park, doğayla iç içe, huzurlu bir atmosfere sahip."
                buttonText="İncele"
                onButtonClick={handleButtonClick}
                targetPath="/park4"
              /></td></tr><tr><td>
                <Card1
                  image="public/images/Park5/image.1.jpg"
                  title="Meram Bağları Parkı"
                  description="Bu park, doğayla iç içe, huzurlu bir atmosfere sahip."
                  buttonText="İncele"
                  onButtonClick={handleButtonClick}
                  targetPath="/park5"
                /></td><td>
              <Card1
                image="public/images/Park6/image.1.jpg"
                title="Karaaslan Parkı"
                description="Bu park, doğayla iç içe, huzurlu bir atmosfere sahip."
                buttonText="İncele"
                onButtonClick={handleButtonClick} 
                targetPath="/park6"
              /></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Park;
