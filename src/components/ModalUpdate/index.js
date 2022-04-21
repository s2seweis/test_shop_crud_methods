import React, { useState } from 'react';
import './styles.scss';

const ModalUpdate = ({ hideModalUpdate, toggleModalUpdate, children}) => {
  if (hideModalUpdate) return null;

  return [
    <div className="modalOverlayUpdate" onClick={() => toggleModalUpdate()} />,
    <div className="modalWrapUpdate">
      <div className="modalUpdate">
        {children}
      </div>
    </div>
  ];
}

export default ModalUpdate;