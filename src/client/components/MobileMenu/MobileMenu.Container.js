import React from 'react';
import './MobileMenu.Style.css';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  console.log('HERE');
  const handleButtonClick = () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      setMenuOpen(true);
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  };

  return (
    <div>
      <button className="menu-btn" onClick={handleButtonClick}>
        MobileMenu
      </button>
    </div>
  );
};
