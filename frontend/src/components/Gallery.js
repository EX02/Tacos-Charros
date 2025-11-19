import React, { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/gallery')
      .then(res => res.json())
      .then(data => {
        if (data.gallery) setImages(data.gallery);
      });
  }, []);
  return (
    <section>
      <h2>Galería</h2>
      <div className="gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Plato ${idx+1}`} />
        ))}
      </div>
    </section>
  );
}
