// 모달 외부 클릭시 닫기를 위한 오버레이 컴포넌트

const ModalOverlay = ({ onClose, className }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#00000040] ${className || ''}`}
      onClick={onClose}
      aria-hidden="true"
    />
  );
};

export default ModalOverlay;
