import React, { useState } from 'react';
import { useGetProductSelling } from '../../hooks/useProductGetSelling';
import Loading from '../loading/Loading';
import MainHeader from '../header/MainHeader';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';
import ProductDetail from './../../pages/productDetail/ProductDetail';
import { BASE_URL } from '../../constants/endpoint';

const MainContent = () => {
  // 카테고리 상태관리
  const [activeCategory, setActiveCategory] = useState('전체');

  // 카테고리 종류
  const categories = ['전체', '딸기 시리즈', '멜론 케이크', '키위 케이크'];

  // 상품 데이터 호출 api
  const { data: products, isLoading, isError } = useGetProductSelling();

  // 페이지 이동을 위한 코드
  const navigate = useNavigate();

  console.log('상품 데이터:', products);

  if (isLoading) return <Loading />;

  if (isError) return <p>상품을 불러오는 중 에러가 발생했어요 😢</p>;

  return (
    <div className="flex flex-col items-center">
      <MainHeader />

      <div className="h-[60rem] w-full border border-solid border-[#000]">
        {/* 메인 배너 이미지 자리 */}
        <img src="" alt="" />
      </div>

      <div className="flex w-[128rem] flex-col items-center gap-[4rem] pb-[17rem] pt-[8rem]">
        <h2 className="text-k-30-Light">Menu</h2>

        {/* 카테고리 */}
        <div className="grid w-full grid-cols-4 gap-[2rem]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`h-[5.6rem] w-full rounded-[1.6rem] text-k-18-Medium transition-colors ${
                activeCategory === category
                  ? 'bg-pink-30 text-bg-10'
                  : 'bg-pink-10 text-black-30 hover:bg-rose-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 전체 상품 */}
        <div className="grid w-full grid-cols-4 gap-[2rem]">
          {products.map((products) => (
            <div
              key={products.id}
              // 상품 상세페이지로 이동
              onClick={() => navigate(`/ProductDetail/{products.id}`)}
              className="group flex cursor-pointer flex-col gap-[1.6rem]"
            >
              <div className="relative h-[31.6rem] w-full">
                <img
                  src={`${BASE_URL}/${products.thumbnail}`}
                  alt={products.name}
                  className="absolute inset-0 h-full w-full rounded-[0.8rem] object-cover"
                />
              </div>

              <div>
                <p className="pb-[0.2rem] text-k-14-Regular">{products.type}</p>
                <h3 className="pb-[1.2rem] text-k-15-Regular">
                  {products.name}
                </h3>
                <p className="text-en-18-Medium">
                  {products.price.toLocaleString()}
                  <span className="pl-[0.2rem] text-k-14-Regular">원</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
