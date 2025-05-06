import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

/**
 *  DOM 계층:
 *    - 모달을 body 직접 하위에 렌더링하여 z-index 문제 해결
 *    - 스타일 상속 문제 방지
 */
const ModalPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.getElementById('root-modal') || document.body,
      )
    : null;
};

export default ModalPortal;
