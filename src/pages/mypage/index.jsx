import MypageOrderStatusCard from '../../components/mypage/MypageOrderStatusCard';
import MypageCategoryCard from '../../components/mypage/MypageCategoryCard';
import ProfileIcon from '../../assets/mypage/icons/profile.svg?react';
import LikeIcon from '../../assets/mypage/icons/liked.svg?react';
import FileSearchIcon from '../../assets/mypage/icons/fileSearch.svg?react';
import LocationIcon from '../../assets/mypage/icons/location.svg?react';

const Mypage = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">마이페이지</span>
      <span className="mt-[4rem] text-k-24_Regular">나의 주문 현황</span>
      <div className="border-black-20 bg-bg-10 mt-[3.6rem] flex h-[20rem] w-[128rem] border">
        <MypageOrderStatusCard title="입금 전" count={0} />
        <MypageOrderStatusCard title="배송 준비중" count={0} />
        <MypageOrderStatusCard title="배송 중" count={0} />
        <MypageOrderStatusCard title="배송 완료" count={0} />
        <MypageOrderStatusCard
          className="cursor-pointer underline"
          title="취소 및 반품"
          count={0}
        />
      </div>

      <div className="mt-[4rem] flex h-[24rem] w-[128rem] gap-[2rem]">
        <MypageCategoryCard
          icon={<ProfileIcon />}
          title={'개인정보 수정'}
          content={'고객님의 개인정보를\n 수정할 수 있어요'}
        />
        <MypageCategoryCard
          icon={<LikeIcon />}
          title={'찜한 상품'}
          content={'내가 찜한 상품을 \n 한눈에 확인할 수 있어요'}
          path={'/mypage/wishlist'}
        />
        <MypageCategoryCard
          icon={<FileSearchIcon />}
          title={'주문내역 조회'}
          content={'주문한 상품의 상세 내역과\n 배송 상태를 볼 수 있어요'}
          path={'/mypage/orders'}
        />
        <MypageCategoryCard
          icon={<LocationIcon />}
          title={'배송지 관리'}
          content={'자주 사용하는 배송지를\n 등록하고 수정할 수 있어요'}
          path={'/mypage/address'}
        />
      </div>
    </div>
  );
};
export default Mypage;
