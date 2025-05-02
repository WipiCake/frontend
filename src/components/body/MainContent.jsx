import React, { useState } from 'react';
import Cake1 from '../../assets/img/Cake.svg';

const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = ['전체', '딸기 시리즈', '멜론 케이크', '키위 케이크'];
  const products = [
    {
      id: 1,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1,
    },
    {
      id: 2,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1,
    },
    {
      id: 3,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1,
    },
    {
      id: 4,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="h-[60rem] w-full border border-solid border-[#000]">
        {/* 메인 배너 이미지 자리 */}
        <img src="" alt="" />
      </div>

      <div className="flex w-[128rem] flex-col items-center gap-[4.8rem] pt-[12rem]">
        <h2 className="text-k-30-Light">Menu</h2>

        <div className="flex w-full justify-between gap-[2rem]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`h-[6.8rem] w-full rounded-[1.6rem] text-k-18-Medium transition-colors ${
                activeCategory === category
                  ? 'bg-[#FF9999] text-white'
                  : 'bg-[#FFF5F5] text-[#999999] hover:bg-rose-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex h-[41.7rem] w-full gap-[2rem]">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex cursor-pointer flex-col gap-[1.6rem]"
            >
              <div className="h-[31.6rem] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full rounded-[0.8rem] object-cover"
                />
              </div>

              <div>
                <p className="pb-[0.2rem] text-k-14-Regular">
                  {product.category}
                </p>
                <h3 className="pb-[1.2rem] text-k-15-Regular">
                  {product.name}
                </h3>
                <p className="text-en-18-Medium">
                  {product.price.toLocaleString()}
                  <span className="pl-[0.2rem] text-k-14-Regular">원</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
