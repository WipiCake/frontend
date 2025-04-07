import React, { useState } from 'react'
import Cake1 from '../../assets/img/Cake.svg'
import MainRectangle1 from '../../assets/img/MainRectangle.svg'

const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  
  const categories = ['전체', '딸기 시리즈', '베로 케이크', '커피 케이크'];
  const products = [
    {
      id: 1,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1
    },
    {
      id: 2,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1
    },
    {
      id: 3,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1
    },
    {
      id: 4,
      category: '딸기 시리즈',
      name: '달콤한 딸기 케이크',
      price: 18000,
      image: Cake1
    }
  ];

  return (
    <div>
      {/* 상단 배너 이미지 */}
      <div
        className="w-full h-[40vh] mb-16 bg-cover bg-center"
      >
        <img
          src={MainRectangle1}
          alt="Main Rectangle"
          className="w-full h-full object-cover filter blur-sm" // blur effect 항상 적용
        />
      </div>

      <div className="container mx-auto px-4 py-8">

        {/* Menu 타이틀 */}
        <h2 className="text-3xl font-bold text-center mb-8">Menu</h2>

        {/* 카테고리 탭 */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-colors
                ${activeCategory === category 
                  ? 'bg-rose-300 text-white' 
                  : 'bg-rose-50 text-gray-700 hover:bg-rose-100'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* 상품 이미지 */}
              <div className="aspect-square bg-gray-200 mb-4 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 상품 정보 */}
              <div>
                <p className="text-sm text-gray-600 mb-1">{product.category}</p>
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="font-bold">{product.price.toLocaleString()}원</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent