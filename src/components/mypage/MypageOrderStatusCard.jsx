import { Link } from 'react-router-dom';

const MypageOrderStatusCard = ({ title, count, isNavigatable }) => {
  return (
    <div className="flex w-[25.6rem] items-center justify-center">
      <div className="flex h-[13.6rem] flex-col justify-between">
        {isNavigatable ? (
          <Link to="/mypage/cancel-return">
            <span className="text-k-18-Medium underline">{title}</span>
          </Link>
        ) : (
          <span className="text-k-18-Medium">{title}</span>
        )}
        <span className="text-center text-k-24_Medium">{count}</span>
      </div>
    </div>
  );
};

export default MypageOrderStatusCard;
