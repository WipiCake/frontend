const CenterLayout = ({ children }) => {
  return (
    <div className="flex w-full justify-center bg-bg-20 pt-[8rem]">
      <div className="flex w-full max-w-[128rem] flex-col items-center gap-[2.4rem]">
        <div className="flex flex-col items-center gap-[4rem]">{children}</div>
      </div>
    </div>
  );
};

export default CenterLayout;
