import React from 'react';
import aboutUs from '../../assets/images/aboutPoster.png';
import './AboutPage.Style.css';

const AboutpageContainer = () => {
  return (
    <div className="aboutContainer">
      <div className="flexContainerAbout">
        <div className="aboutPoster">
          <img src={aboutUs} alt="About US" />
        </div>
        <div className="aboutText">
          Lorem ipsum dolor sit amet. Cum enim consequatur ea necessitatibus
          voluptate est consequatur dignissimos quo quia quia sed quos eligendi.
          Non internos quis ex quibusdam quia et fugit enim. Cum iusto aliquam
          sed similique cupiditate ea quia earum et tempore labore id repellat
          magnam ut culpa Quis qui delectus omnis. Et distinctio galisum id
          accusamus eligendi cum voluptatem temporibus. Cum velit exercitationem
          in accusamus magni qui dolore provident. Sed quidem rerum ut officia
          ipsum sit quis illum. Aut nihil voluptas ea voluptatem culpa ut autem
          deleniti ut quia sint aut nihil nobis ea nisi galisum. Aut nihil
          similique et ratione autem nam eligendi quas!
        </div>
      </div>
    </div>
  );
};

export default AboutpageContainer;
