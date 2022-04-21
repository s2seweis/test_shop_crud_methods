import React, { useState } from 'react';
import './styles.scss';

const ModalUpdate = ({ hideModalUpdate, toggleModalUpdate, childrenUpdate }) => {
  if (hideModalUpdate) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModalUpdate()} />,
    <div className="modalWrap">
      <div className="modal">
        {childrenUpdate}
      </div>
    </div>
  ];
}

export default ModalUpdate;