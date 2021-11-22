import React, { Fragment, useState } from 'react';
import ModalComponent from './Modal.component';

export default {
  title: 'Components / Modal Component',
  component: ModalComponent,
};

export const Component = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(true);
  };
  const handleClose = () => {
    setIsShow(false);
  };
  const handleLink = () => {
    window.location.href = '/';
  };

  return (
    <Fragment>
      <button onClick={handleClick}>view modal</button>
      <ModalComponent
        show={isShow}
        handleLink={handleLink}
        handleCloseModal={handleClose}
      />
    </Fragment>
  );
};
