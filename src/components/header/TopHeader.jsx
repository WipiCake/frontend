import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className="top-0 flex h-[4.7rem] w-full justify-center border-b border-[#CBCBCB] bg-white">
      <div className="flex min-w-[128rem] items-center justify-end">
        <ul className="flex items-center gap-[2rem]">
          <li className="relative flex items-center gap-[2rem]">
            <Link to="/join" className="text-k-15-Regular text-[#B56D6D]">
              회원가입
            </Link>
            <span className="h-[1.5rem] border-r border-[#DBDBDB]"></span>
          </li>
          <li className="relative flex items-center gap-[2rem]">
            <Link to="/login" className="text-k-15-Regular">
              로그인
            </Link>
            <span className="h-[1.5rem] border-r border-[#DBDBDB]"></span>
          </li>
          <li>
            <a className="text-k-15-Regular">고객센터</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
