import React from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Overlay, ModalWrap, CloseButton } from './StreamModalStyle';

function StreamModal({ onCloseModal }) {
  // const handleClose = () => {
  //   onClose?.();
  // };
  return (
    <Overlay onClick={onCloseModal}>
      <ModalWrap onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onCloseModal}>
          <CancelOutlinedIcon />
        </CloseButton>
      </ModalWrap>
    </Overlay>
  );
}

export default StreamModal;
