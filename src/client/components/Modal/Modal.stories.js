import React, { useState } from 'react';
import ModalComponent from './Modal.component';

export default {
  title: 'Components / Modal Component',
  component: ModalComponent,
};

export const Component = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };
  const handleLink = () => {
    window.location.href = '/';
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        view modal
      </button>
      <ModalComponent
        show={isShown}
        handleLink={handleLink}
        handleCloseModal={handleClick}
      />
    </>
  );
};
