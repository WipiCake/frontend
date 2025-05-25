// import { Outlet } from 'react-router-dom';
import FindIdCard from './FindIdCard';

const FindId = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-[2.4rem]">
      <h1 className="pt-[9.4rem] text-k-28_Medium">아이디/비밀번호 찾기</h1>
      <div className="h-[49.4rem] w-[49.6rem] bg-bg-20">
        {/* <Outlet /> */}
        <FindIdCard />
      </div>
    </div>
  );
};

export default FindId;
