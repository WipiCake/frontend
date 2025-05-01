const MypageOrderStatusCard = ({ title, count, className }) => {
  return (
    <div className="flex w-[25.6rem] items-center justify-center">
      <div className="flex h-[13.6rem] flex-col justify-between">
        <span className={`text-k-18-Medium ${className || ''}`}>{title}</span>
        {/* 폰트 변경 필요 */}
        <span className="text-en-24-Regular text-center">{count}</span>
      </div>
    </div>
  );
};

export default MypageOrderStatusCard;
