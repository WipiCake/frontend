const MypageEmptyState = ({ icon, contents }) => {
  return (
    <div className="bg-bg-10 mt-[2rem] flex h-[58rem] w-[128rem] flex-col items-center justify-center">
      <div className="flex h-[18.2rem] flex-col items-center justify-between">
        {icon}
        <span className="text-black-40 text-k-28_Medium">{contents}</span>
      </div>
    </div>
  );
};

export default MypageEmptyState;
