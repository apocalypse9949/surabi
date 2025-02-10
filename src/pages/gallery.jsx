import React, { useState, useEffect } from 'react';
import './gallery.css';
import Footer from './footer';

const g1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379767/g1_gth4yu.jpg';
const g2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379766/g2_nwtfyi.jpg';
const g3 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379765/g3_ccux51.jpg';
const g4 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735380176/g4_be5vwm.jpg';
const g5 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379764/g5_kfp48m.jpg';
const g6 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379762/g6_qeve0t.jpg';
const g7 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/g7_sqofuv.jpg';
const g8 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379761/g8_zzrckr.jpg';
const g9 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379751/g9_dyrmfz.jpg';
const g10 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379760/g10_zneydh.jpg';
const g11 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379759/g11_yvh7me.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const galleryImages = [
    {
      id: 1,
      src: g1,
      alt: 'Gallery Image 1',
      category: 'portraits'
    },
    {
      id: 2,
      src: g2,
      alt: 'Gallery Image 2',
      category: 'events'
    },
    {
      id: 3,
      src: g3,
      alt: 'Gallery Image 3',
      category: 'events'
    },
    {
      id: 4,
      src: g4,
      alt: 'Gallery Image 4',
      category: 'events'
    },
    {
      id: 5,
      src: g5,
      alt: 'Gallery Image 5',
      category: 'events'
    },
    {
      id: 6,
      src: g6,
      alt: 'Gallery Image 6',
      category: 'events'
    },
    {
      id: 7,
      src: g7,
      alt: 'Gallery Image 7',
      category: 'events'
    },
    {
      id: 8,
      src: g8,
      alt: 'Gallery Image 8',
      category: 'events'
    },
    {
      id: 9,
      src: g9,
      alt: 'Gallery Image 9',
      category: 'events'
    },
    {
      id: 10,
      src: g10,
      alt: 'Gallery Image 10',
      category: 'events'
    },
    {
      id: 11,
      src: g11,
      alt: 'Gallery Image 11',
      category: 'events'
    }
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) handleCloseModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className={`gallery-item ${!loadedImages[image.id] ? 'loading' : ''}`}
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              onLoad={() => handleImageLoad(image.id)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
