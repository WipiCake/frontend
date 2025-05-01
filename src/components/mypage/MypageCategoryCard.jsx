import { Link } from 'react-router-dom';

const MypageCategoryCard = ({ icon, title, content, path }) => {
  return (
    <Link
      to={path}
      className="group flex w-[30.5rem] cursor-pointer items-center justify-center border border-[#DBDBDB] bg-white hover:border-[#505050]"
    >
      <div className="flex h-[15.3rem] w-[24.3rem] flex-col items-center">
        <div className="text-black-50 h-[4.4rem] w-[4.4rem] group-hover:text-pink-50">
          {icon}
        </div>
        <span className="mt-[2.4em] text-k-18-Medium">{title}</span>
        <span className="mt-[1.2rem] whitespace-pre-wrap text-center text-k-15-Regular">
          {content}
        </span>
      </div>
    </Link>
  );
};

export default MypageCategoryCard;
