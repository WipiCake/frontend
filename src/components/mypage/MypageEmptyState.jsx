const MypageEmptyState = ({ icon, contents, isButton }) => {
  return (
    <div className="mt-[2rem] flex h-[58rem] w-[128rem] flex-col items-center justify-center bg-bg-10">
      <div className="flex h-[18.2rem] flex-col items-center justify-between">
        {icon}
        <span className="text-k-28_Medium text-black-40">{contents}</span>
      </div>
      {isButton && (
        <button className="mt-[10.2rem] h-[5.7rem] w-[26.5rem] bg-pink-30 text-k-16-Regular text-bg-10">
          배송지 등록
        </button>
      )}
    </div>
  );
};

export default MypageEmptyState;
