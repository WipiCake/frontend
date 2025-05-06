const MypageOrderStatusCard = ({ title, count, className }) => {
  return (
    <div className="flex w-[25.6rem] items-center justify-center">
      <div className="flex h-[13.6rem] flex-col justify-between">
        <span className={`text-k-18-Medium ${className || ''}`}>{title}</span>
        <span className="text-k-24_Medium text-center">{count}</span>
      </div>
    </div>
  );
};

export default MypageOrderStatusCard;
