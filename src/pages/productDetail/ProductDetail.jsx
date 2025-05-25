// import { useEffect } from 'react';
// import { useGetProduct } from '../../hooks/useGetProduct';
import liked from '../../assets/mypage/icons/liked.svg';
import shoppingbag from '../../assets/img/ShoppingBasket.svg';
import { useState } from 'react';
import Detail from './Detail';
import Review from './Review';
import Inquiry from './Inquiry';
import StorageMethod from './StorageMethod';

const ProductDetail = () => {
  const tabMenu = ['상세정보', '보관방법', '후기', '문의'];

  const [activeTab, setActiveTab] = useState('상세정보');
  // const { data: products, isLoading, error } = useGetProduct();

  // useEffect(() => {
  //   if (products) {
  //     console.log('📦 가져온 상품 목록:', products);
  //   }
  // }, [products]);

  // if (isLoading) return <p>로딩중</p>;
  // if (error) return <p>에러 발생</p>;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center pt-[8rem]">
      <div className="flex h-full w-[128rem] flex-col gap-[10rem]">
        <div className="flex h-[67.5rem] gap-[2rem]">
          <div className="h-full min-w-[52rem] bg-black-30">
            {/* 상품 이지미 자리 */}
            {/* <img src="" alt="" /> */}
          </div>
          <div className="h-full w-full">
            {/* 상품 정보 영역 */}
            <div className="flex h-full w-full flex-col gap-[1.6rem]">
              <div className="flex">
                <p className="w-[10rem] text-k-24_Medium text-black-50">
                  상품명
                </p>
                <div className="flex flex-col">
                  <h2 className="text-k-28_Medium">딸기케이크</h2>
                  <p className="text-k-18-Medium text-black-30">
                    엄청나게 맛있는 딸기케이크
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <p className="w-[10rem] text-k-24_Medium text-black-50">가격</p>
                <div className="text-k-28_Medium">18,000원</div>
              </div>

              <div className="flex pt-[1.6rem]">
                <p className="min-w-[10rem] pt-[1rem] text-k-24_Medium text-black-50">
                  옵션
                </p>

                <div className="flex w-full flex-col gap-[1.6rem]">
                  <div className="flex items-center gap-4">
                    <label className="min-w-[10rem] text-k-18-Medium">
                      크기
                    </label>
                    <select className="h-[5.6rem] w-full border px-[1.6rem] text-k-16-Regular">
                      <option>크기를 선택해주세요.</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="min-w-[10rem] text-k-18-Medium">
                      크림
                    </label>
                    <select className="h-[5.6rem] w-full border px-[1.6rem] text-k-16-Regular">
                      <option>크림을 선택해주세요.</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="min-w-[10rem] text-k-18-Medium">
                      시트
                    </label>
                    <select className="h-[5.6rem] w-full border px-[1.6rem] text-k-16-Regular">
                      <option>시트를 선택해주세요.</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="min-w-[10rem] text-k-18-Medium">
                      맛변경
                    </label>
                    <select className="h-[5.6rem] w-full border px-[1.6rem] text-k-16-Regular">
                      <option>맛을 선택해주세요.</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex h-[8rem] w-full items-center justify-between border-b border-t border-black-40">
                <p className="text-k-18-Medium">총 상품금액:</p>
                <p className="text-k-28_Medium">18,000원</p>
              </div>

              {/* 버튼 영역 */}
              <div className="mt-4 flex items-center gap-[1.6rem]">
                <div className="border border-black-30">
                  <button className="flex h-[6rem] w-[6rem] items-center justify-center">
                    <img src={liked} alt="좋아요 버튼" />
                  </button>
                </div>
                <div className="border border-black-30">
                  <button className="flex h-[6rem] w-[6rem] items-center justify-center">
                    <img src={shoppingbag} alt="좋아요 버튼" />
                  </button>
                </div>
                <button className="h-[6rem] w-full bg-pink-30 text-k-18-Medium text-white">
                  바로 구매
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex h-[6rem] w-full">
            {tabMenu.map((menu, idx) => (
              <div
                key={menu}
                onClick={() => setActiveTab(menu)}
                className={`flex w-full cursor-pointer items-center justify-center border border-black-30 text-k-16-Medium ${activeTab === menu ? 'border-b-0 bg-white text-pink-50' : 'bg-bg-20'} ${idx !== 0 ? '-ml-[1px]' : ''} ${activeTab === menu && idx === 0 ? 'border-l-0' : ''} ${activeTab === menu && idx === tabMenu.length - 1 ? 'border-r-0' : ''} `}
              >
                {menu}
              </div>
            ))}
          </div>
          <div className="mt-[4rem] w-full">
            {activeTab === '상세정보' && <Detail />}
            {activeTab === '보관방법' && <StorageMethod />}
            {activeTab === '후기' && <Review />}
            {activeTab === '문의' && <Inquiry />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
