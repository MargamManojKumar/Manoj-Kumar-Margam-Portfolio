import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex items-center justify-center h-16">
        <p className="text-sm">
          {currentYear} Margam Manoj Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
