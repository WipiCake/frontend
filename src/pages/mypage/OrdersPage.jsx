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
    imgUrl: '/images/1.svg',
    title: '딸기 시리즈',
    description: '달콤한 딸기 케이크',
    price: '18,000원',
  },
  {
    id: 2,
    imgUrl: '/images/1.svg',
    title: '딸기 시리즈',
    description: '달콤한 딸기 케이크',
    price: '18,000원',
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
        <div></div>
      )}
    </div>
  );
};

export default OrdersPage;
