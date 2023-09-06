import React, { useState } from 'react';
import '../../../styles/components/TimelinePage/SlideShow.scss';

const images = [
  // Replace with your image URLs
  "https://via.placeholder.com/344",
  "https://via.placeholder.com/344",
  "https://via.placeholder.com/344",
  "https://via.placeholder.com/344"
];

const SlideShow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    return (
        <div className="slideshow">
            <img onClick={goToPrevImage} src={images[(currentImageIndex - 1 + images.length) % images.length]} className="blur" alt="previous" />
            <img src={images[currentImageIndex]} alt="current" />
            <img onClick={goToNextImage} src={images[(currentImageIndex + 1) % images.length]} className="blur" alt="next" />
        </div>
    );
};

export default SlideShow;
