import { useState } from 'react';
import MypageEmptyState from '../../components/mypage/MypageEmptyState';
import EmptyCancelReturnIcon from '../../assets/mypage/icons/emptyCancelReturn.svg?react';
import BaseTable from '../../components/mypage/Table/BaseTable';

const categories = [
  { id: 'all', name: '전체' },
  { id: 'cancel', name: '주문취소' },
  { id: 'refund', name: '반품' },
];

const headers = [
  {
    text: '구분',
    value: 'category',
  },
  {
    text: '주문번호',
    value: 'number',
  },
  {
    text: '상품이름',
    value: 'title',
  },
  {
    text: '접수일자',
    value: 'applyDate',
  },
  {
    text: '진행상태',
    value: 'status',
  },
  {
    text: '완료일자',
    value: 'completeDate',
  },
];

const items = [
  {
    category: '반품',
    number: '3029340391',
    title: '딸기 케이크',
    applyDate: '2024-10-23',
    status: '반품완료',
    completeDate: '2024-10-26',
  },
  {
    category: '취소',
    number: '3029340391',
    title: '딸기 케이크',
    applyDate: '2024-10-23',
    status: '처리중',
    completeDate: '-',
  },
  {
    category: '취소',
    number: '3029340391',
    title: '딸기 케이크',
    applyDate: '2024-10-23',
    status: '취소완료',
    completeDate: '2024-10-26',
  },
  {
    category: '반품',
    number: '3029340391',
    title: '딸기 케이크',
    applyDate: '2024-10-23',
    status: '반품완료',
    completeDate: '2024-10-26',
  },
  {
    category: '반품',
    number: '3029340391',
    title: '딸기 케이크',
    applyDate: '2024-10-23',
    status: '반품완료',
    completeDate: '2024-10-26',
  },
];

const CancelReturnPage = () => {
  const [selected, setSelected] = useState('all');

  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">취소·반품 내역</span>
      <div className="mt-[4.8rem] flex h-[6.8rem] w-[128rem] gap-[2rem] text-k-18-Medium">
        {categories.map((item) => {
          const isSelected = selected === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`w-[41.3rem] rounded-[1.6rem] ${isSelected ? 'bg-pink-30 text-bg-10' : 'bg-pink-20 text-black-30'}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {items.length === 0 ? (
        <MypageEmptyState
          icon={<EmptyCancelReturnIcon />}
          contents="취소·반품 내역이 없어요."
        />
      ) : (
        <BaseTable headers={headers} items={items} />
      )}
    </div>
  );
};

export default CancelReturnPage;
