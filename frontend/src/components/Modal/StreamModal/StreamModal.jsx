import React from 'react';
import { Overlay, ModalWrap } from './StreamModalStyle';

function StreamModal({ onClose, roomSubmitHandler }) {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalWrap onClick={e => e.stopPropagation()}>
        <p>함께 요리를 시작하시겠습니까?</p>
        <button onClick={handleClose}>취소</button>
        <button onClick={roomSubmitHandler}>완료</button>
      </ModalWrap>
    </Overlay>
  );
}
export default StreamModal;
