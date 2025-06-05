import { useState } from 'react';
import { useGetDeliveryAll } from '../../hooks/useDelivery';
import MypageEmptyState from '../../components/mypage/MypageEmptyState';
import BaseModal from '../../components/common/Modal/BaseModal';
import EmptyAddressIcon from '../../assets/mypage/icons/emptyLocation.svg?react';

const AddressPage = () => {
  const { data: deliveryData, isLoading, error } = useGetDeliveryAll();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <p>로딩중...</p>;
  console.log('배송지 데이터:', deliveryData.data.data);

  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">배송지 관리</span>
      <div className="mt-[2.1rem] w-[128rem] border-b border-black-30">
        <span className="text-left text-k-18-Medium text-black-40">
          배송지는 최대 5개까지 등록할 수 있습니다.
        </span>
      </div>
      {deliveryData.data.data.length === 0 ? (
        <MypageEmptyState
          icon={<EmptyAddressIcon />}
          contents="등록된 배송지가 없어요."
          isButton={true}
        />
      ) : (
        <div className="mt-[2rem] w-[128rem]">
          {deliveryData.data.data.map((data) => (
            <div
              key={data.deliveryAddressId}
              className="mt-[2rem] flex h-[17.9rem] items-end justify-between bg-black-10 p-[4rem]"
            >
              <div className="flex h-[9.9rem] flex-col justify-between">
                <div className="flex max-w-[14.5rem] justify-between">
                  <span className="text-k-18-Semibold text-black-50">
                    {data.title}
                  </span>
                  {data.defaultDelivery && (
                    <span className="text-k-18-Medium text-black-30">
                      기본 배송지
                    </span>
                  )}
                </div>
                <span className="text-k-16-Medium">
                  {data.mainAddress}, {data.detailAddress}
                </span>
                <span className="text-k-16-Medium">{data.phoneNumber}</span>
              </div>
              <div className="flex h-[2.4rem] w-[10.1rem] items-center justify-between">
                {/* 폰트 수정 필요 */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[2rem] font-normal"
                >
                  삭제
                </button>
                <span className="text-[2rem] font-normal">|</span>
                <button className="text-[2rem] font-normal">수정</button>
              </div>
            </div>
          ))}
          <button className="mt-[4rem] h-[5.8rem] w-full border border-solid border-black-20 bg-black-10 text-k-20-Bold text-black-50">
            배송지 추가
          </button>
        </div>
      )}
      <BaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="배송지를 삭제하시겠습니까?"
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="h-[5.4rem] w-[19.5rem] rounded-[0.8rem] border border-solid border-black-30 text-k-20-Medium text-black-50"
        >
          취소
        </button>
        <button className="h-[5.4rem] w-[19.5rem] rounded-[0.8rem] bg-pink-30 text-k-20-Medium text-black-10">
          확인
        </button>
      </BaseModal>
    </div>
  );
};

export default AddressPage;
