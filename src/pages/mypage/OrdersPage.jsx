import { useState } from 'react';
import MypageEmptyState from '../../components/mypage/MypageEmptyState';
import EmptyFileSearchIcon from '../../assets/mypage/icons/emptyFileSearch.svg?react';

const months = [
  { id: 1, name: '1개월' },
  { id: 2, name: '3개월' },
  { id: 3, name: '6개월' },
  { id: 4, name: '1년' },
];

const items = [
  {
    id: 1,
    orderDate: '2024.10.16',
    orderNumber: '29349393211',
    items: [
      {
        deliveryStatus: '배송완료',
        deliveryDate: '10/18(금) 도착',
        products: [
          {
            imgUrl: '/images/1.svg',
            title: '딸기 시리즈',
            description: '달콤한 딸기 케이크',
            price: '18,000',
          },
        ],
      },
      {
        deliveryStatus: '배송중',
        deliveryDate: '10/18(금) 도착',
        products: [
          {
            imgUrl: '/images/1.svg',
            title: '딸기 시리즈',
            description: '달콤한 딸기 케이크',
            price: '18,000',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    orderDate: '2024.09.25',
    orderNumber: '4896518546',
    items: [
      {
        deliveryStatus: '배송중',
        deliveryDate: '10/18(금) 도착',
        products: [
          {
            imgUrl: '/images/1.svg',
            title: '딸기 시리즈',
            description: '달콤한 딸기 케이크',
            price: '18,000',
          },
        ],
      },
    ],
  },
];

const OrdersPage = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">주문내역 조회</span>
      <div className="mt-[4.8rem] flex h-[6.8rem] w-[128rem] gap-[2rem] text-k-18-Medium">
        {months.map((item) => {
          const isSelected = selected === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`w-[30.5rem] rounded-[1.6rem] ${isSelected ? 'bg-pink-30 text-bg-10' : 'bg-pink-20 text-black-30'}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {items.length === 0 ? (
        <MypageEmptyState
          icon={<EmptyFileSearchIcon />}
          contents="주문한 내역이 없어요."
        />
      ) : (
        <div className="mt-[3.2rem] w-[128rem] bg-bg-10">
          <div className="flex items-center justify-between border-b border-black-30 px-[4rem] pb-[4rem] pt-[2rem]">
            <div className="flex h-[7.1rem] flex-col justify-between">
              <span className="text-k-24_Semibold">2024.10.16</span>
              <span className="text-k-18-Medium text-black-30">
                주문번호 29349393211
              </span>
            </div>
            <div className="text-k-16-Regular underline">주문 상세보기</div>
          </div>
          {items.map((item, id) => (
            <div
              key={id}
              className="flex h-[26.7rem] items-end justify-between border-b border-black-20 bg-bg-10 px-[4rem] py-[2rem] last:border-b-0"
            >
              <div className="flex flex-col">
                <div className="flex w-[19.9rem] items-center justify-between">
                  <span className="text-k-20-Bold">
                    {item.items[0].deliveryStatus}
                  </span>
                  <span className="text-k-18-Medium">10/18(금) 도착</span>
                </div>
                <div className="mt-[2rem] flex w-[32.9rem] items-center justify-between">
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
              </div>
              {/* 버튼 */}
              <button className="h-[6.4rem] w-[19.6rem] bg-pink-30 text-k-16-Medium text-bg-10">
                장바구니
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
