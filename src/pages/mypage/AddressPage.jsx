import MypageEmptyState from '../../components/mypage/MypageEmptyState';
import EmptyAddressIcon from '../../assets/mypage/icons/emptyLocation.svg?react';

const items = [
  {
    id: 1,
    name: '우리집',
    isDefault: true,
    address: '서울특별시 강남구 역삼동 123-45',
    detailAddress: '101호',
    phoneNumber: '010-1234-5678',
  },
  {
    id: 2,
    name: '부모님 댁',
    isDefault: false,
    address: '서울특별시 송파구 잠실동 678-90',
    detailAddress: '202호',
    phoneNumber: '010-9876-5432',
  },
  {
    id: 3,
    name: '친구 집',
    isDefault: false,
    address: '서울특별시 마포구 상암동 111-22',
    detailAddress: '303호',
    phoneNumber: '010-1357-2468',
  },
];

const AddressPage = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">배송지 관리</span>
      {/* 아래 div의 mt 간격은 피그마에서 변경된 것으로 임의 제작함 confirm 후에는 주석 지우기 */}
      <div className="mt-[2.1rem] w-[128rem] border-b border-black-30">
        <span className="text-left text-k-18-Medium text-black-40">
          배송지는 최대 5개까지 등록할 수 있습니다.
        </span>
      </div>
      {items.length === 0 ? (
        <MypageEmptyState
          icon={<EmptyAddressIcon />}
          contents="등록된 배송지가 없어요."
          isButton={true}
        />
      ) : (
        <div className="mt-[2rem] w-[128rem]">
          {items.map((item, id) => (
            <div
              key={id}
              className="mt-[2rem] h-[17.9rem] bg-black-10 p-[4rem]"
            >
              <div className="flex h-[9.9rem] flex-col justify-between">
                <div className="flex max-w-[14.5rem] justify-between">
                  <span className="text-k-18-Semibold text-black-50">
                    {item.name}
                  </span>
                  {item.isDefault && (
                    <span className="text-k-18-Medium text-black-30">
                      기본 배송지
                    </span>
                  )}
                </div>
                <span className="text-k-16-Medium">
                  {item.address}, {item.detailAddress}
                </span>
                <span className="text-k-16-Medium">{item.phoneNumber}</span>
              </div>
            </div>
          ))}
          <button className="mt-[4rem] h-[5.8rem] w-full border border-solid border-black-20 bg-black-10 text-k-20-Bold text-black-50">
            배송지 추가
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressPage;
