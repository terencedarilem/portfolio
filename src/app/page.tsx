// src/app/page.tsx
import React from 'react';
import Image from 'next/image';
import exampleImage from '../../public/your-image.jpg';
// src/pages/_app.tsx
import '../styles/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Bienvenue sur mon portfolio</h1>
      <p className="mt-4">Voici une image exemple :</p>
      <Image src={exampleImage} alt="Image exemple" width={500} height={300} />
    </div>
  );
};

export default HomePage;
