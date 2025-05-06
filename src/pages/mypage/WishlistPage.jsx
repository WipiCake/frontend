import { useState } from 'react';
import BaseModal from '../../components/common/Modal/BaseModal';
import EmptyLikedIcon from '../../assets/mypage/icons/emptyLiked.svg?react';
import MypageEmptyState from '../../components/mypage/MypageEmptyState';

const items = [
  {
    id: 1,
    imgUrl: '/images/1.svg',
    title: '딸기 시리즈',
    description: '달콤한 딸기 케이크',
    price: '18,000',
  },
  {
    id: 2,
    imgUrl: '/images/1.svg',
    title: '딸기 시리즈',
    description: '달콤한 딸기 케이크',
    price: '18,000',
  },
  {
    id: 3,
    imgUrl: '/images/1.svg',
    title: '딸기 시리즈',
    description: '달콤한 딸기 케이크',
    price: '18,000',
  },
];

const WishlistPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">찜한 상품</span>
      <div className="w-[128rem] border-b border-black-30">
        <span className="text-left text-k-18-Medium">
          전체 {items.length}개
        </span>
      </div>
      {items.length === 0 ? (
        <MypageEmptyState
          icon={<EmptyLikedIcon />}
          contents="찜한 상품이 없어요."
        />
      ) : (
        <div className="mt-[2rem] w-[128rem]">
          {items.map((item, id) => (
            <div
              key={id}
              className="flex h-[24rem] justify-between border-b border-black-20 bg-bg-10 p-[2rem] last:border-b-0"
            >
              <div className="flex w-[32.9rem] items-center justify-between">
                {/* 이미지 블록 */}
                <div className="h-[18rem] w-[19.7rem] bg-black-20" />
                {/* 텍스트 블록 */}
                <div className="flex h-[9.9rem] flex-col justify-between">
                  <div className="flex flex-col justify-between">
                    <span className="text-k-14-Medium">{item.title}</span>
                    <span className="text-k-15-Regular">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-[0.2rem]">
                    <span className="text-k-18-Medium">{item.price}</span>
                    <span className="text-k-14-Regular">원</span>
                  </div>
                </div>
              </div>
              {/* 버튼 */}
              <div className="flex w-[41.2rem] items-end justify-between">
                <button className="h-[6.4rem] w-[19.6rem] bg-pink-30 text-k-16-Medium text-bg-10">
                  장바구니
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="h-[6.4rem] w-[19.6rem] border border-solid border-black-30 text-k-16-Medium text-black-50"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <BaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="상품을 삭제하시겠습니까?"
      >
        <div className="mb-[2.4rem] mt-[4rem] flex w-[40.6rem] justify-between">
          <button
            onClick={() => setIsModalOpen(false)}
            className="h-[5.4rem] w-[19.5rem] rounded-[0.8rem] border border-solid text-k-20-Medium"
          >
            취소
          </button>
          <button className="h-[5.4rem] w-[19.5rem] rounded-[0.8rem] bg-pink-30 text-k-20-Medium">
            확인
          </button>
        </div>
      </BaseModal>
    </div>
  );
};

export default WishlistPage;
