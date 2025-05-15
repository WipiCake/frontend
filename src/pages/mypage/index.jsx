import MypageOrderStatusCard from '../../components/mypage/MypageOrderStatusCard';
import MypageCategoryCard from '../../components/mypage/MypageCategoryCard';
import ProfileIcon from '../../assets/mypage/icons/profile.svg?react';
import LikeIcon from '../../assets/mypage/icons/liked.svg?react';
import FileSearchIcon from '../../assets/mypage/icons/fileSearch.svg?react';
import LocationIcon from '../../assets/mypage/icons/location.svg?react';

const status = [
  // 나의 주문 현황 api get 요청할 것
  {
    id: 1,
    title: '입금 전',
    count: 0,
    isNavigatable: false,
  },
  {
    id: 2,
    title: '배송 준비중',
    count: 1,
    isNavigatable: false,
  },
  {
    id: 3,
    title: '배송 중',
    count: 2,
    isNavigatable: false,
  },
  {
    id: 4,
    title: '배송 완료',
    count: 3,
    isNavigatable: false,
  },
  {
    id: 5,
    title: '취소 및 반품',
    count: 3,
    isNavigatable: true,
  },
];

const categories = [
  {
    id: 1,
    icon: <ProfileIcon />,
    title: '개인정보 수정',
    content: '고객님의 개인정보를\n 수정할 수 있어요',
    path: '/mypage/veryify',
  },
  {
    id: 2,
    icon: <LikeIcon />,
    title: '찜한 상품',
    content: '내가 찜한 상품을 \n 한눈에 확인할 수 있어요',
    path: '/mypage/wishlist',
  },
  {
    id: 3,
    icon: <FileSearchIcon />,
    title: '주문내역 조회',
    content: '주문한 상품의 상세 내역과\n 배송 상태를 볼 수 있어요',
    path: '/mypage/orders',
  },
  {
    id: 4,
    icon: <LocationIcon />,
    title: '배송지 관리',
    content: '자주 사용하는 배송지를\n 등록하고 수정할 수 있어요',
    path: '/mypage/address',
  },
];

const Mypage = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">마이페이지</span>
      <span className="mt-[4rem] text-k-24_Medium">나의 주문 현황</span>

      <div className="mt-[3.6rem] flex h-[20rem] w-[128rem] border border-black-20 bg-bg-10">
        {status.map((item) => (
          <MypageOrderStatusCard
            key={item.id}
            title={item.title}
            count={item.count}
            isNavigatable={item.isNavigatable}
          />
        ))}
      </div>

      <div className="mt-[4rem] flex h-[24rem] w-[128rem] gap-[2rem]">
        {categories.map((item) => (
          <MypageCategoryCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};
export default Mypage;
