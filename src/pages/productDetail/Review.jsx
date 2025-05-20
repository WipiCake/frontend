import { useState } from 'react';
import blackStar from '../../assets/img/BlackStar.svg';
const Review = () => {
  const reviews = [
    {
      id: 1,
      name: '한혜주',
      product: '딸기딸기케이크',
      rating: 5,
      date: '2025.04.07',
      content: '딸기도 많고 넘넘 맛있었어용!! > 다음에 또 올게요~',
    },
    {
      id: 2,
      name: '오재민',
      product: '메론메론케이크',
      rating: 5,
      date: '2025.04.07',
      content: `메론케이크는 신선한 메론이 가득 들어 있어 한입 먹을 때마다 상큼함이 퍼지고, 부드럽고 촉촉한 시트와 메론이 완벽하게 어우러집니다.
크림은 느끼하지 않고 담백해서 부담 없이 즐겼습니다.
전체적으로 달지 않아 디저트로 제격이고, 메론 특유의 향이 진하게 느껴져 과일 본연의 맛을 잘 살린 케이크였습니다.
보기에도 예쁜 초록빛 메론이 장식되어 있어 선물용으로도 손색이 없고, 계절 한정이라 더 특별하게 느껴졌어요.
부드럽고 상큼한 디저트를 좋아하는 분들에게 추천합니다.`,
    },
    {
      id: 3,
      name: '김유정',
      product: '망고케이크',
      rating: 4,
      date: '2025.04.08',
      content: '상큼하고 달콤한 맛! 여름에 딱이에요.',
    },
    {
      id: 4,
      name: '이찬영',
      product: '초코폭탄케이크',
      rating: 5,
      date: '2025.04.09',
      content: '초코 덕후라면 무조건 좋아할 맛입니다!',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage,
  );
  return (
    <div className="flex min-h-[109.3rem] w-full flex-col gap-[2rem]">
      <div className="flex flex-col gap-[2rem] border-b border-black-30 pb-[2rem]">
        <p className="text-k-24_Medium">상품 후기 (12)</p>
        <div className="flex gap-[2rem]">
          <div className="h-[19.7rem] w-[19.7rem] bg-[#eeeeee]"></div>
          <div className="h-[19.7rem] w-[19.7rem] bg-[#eeeeee]"></div>
          <div className="h-[19.7rem] w-[19.7rem] bg-[#eeeeee]"></div>
          <div className="h-[19.7rem] w-[19.7rem] bg-[#eeeeee]"></div>
          <div className="h-[19.7rem] w-[19.7rem] bg-[#eeeeee]"></div>
          <div className="flex h-[19.7rem] w-[19.7rem] items-center justify-center bg-[#00000033]">
            더보기
          </div>
        </div>
      </div>
      <div>
        {/* 리뷰 리스트 */}
        {currentReviews.map((review) => (
          <div
            key={review.id}
            className="flex gap-[2rem] border-b border-black-30 py-[4rem]"
          >
            <div className="flex w-[19.7rem] flex-col">
              <div className="mb-1 text-k-18-Medium">{review.name}</div>
              <div className="mb-1 text-k-16-Regular text-black-40">
                {review.product}
              </div>
              <div className="flex">
                <img src={blackStar} alt="리뷰 아이콘" />
                <img src={blackStar} alt="리뷰 아이콘" />
                <img src={blackStar} alt="리뷰 아이콘" />
                <img src={blackStar} alt="리뷰 아이콘" />
                <img src={blackStar} alt="리뷰 아이콘" />
              </div>
            </div>
            <div className="flex flex-col gap-[2rem]">
              <p className="whitespace-pre-line pb-[2rem] text-k-20-Medium leading-relaxed text-black-50">
                {review.content}
              </p>
              <div className="flex gap-[2rem]">
                <div className="h-[19.7rem] w-[19.7rem] bg-[#eeeeee]"></div>
                <div className="h-[19.7rem] w-[19.7rem] bg-[#eeeeee]"></div>
              </div>
              <div className="text-k-18-Medium text-black-30">
                {review.date}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-10 flex justify-center gap-4 text-k-16-Regular">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`h-[3.2rem] w-[3.2rem] rounded-full ${
                  currentPage === pageNum
                    ? 'bg-pink-30 text-white'
                    : 'text-black-50 hover:underline'
                }`}
              >
                {pageNum}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
