import React, { useState } from 'react'

const FindId = () => {
  const [activeTab, setActiveTab] = useState('id'); // 'id' 또는 'password'
  const [findMethod, setFindMethod] = useState('휴대폰');  // '휴대폰' 또는 '이메일'
  
  return (
    <div
      style={{ height: 'calc(80vh - 137px)' }}
      className='flex flex-col items-center py-10'
    >
      <h1 className='text-2xl font-bold mb-10'>아이디/비밀번호 찾기</h1>
      
      <div className='w-full max-w-md bg-white rounded shadow-sm'>
        {/* 탭 네비게이션 */}
        <div className='flex mt-4'>
          <button 
            className={`flex-1 ml-4 py-4 text-center border-b-3 ${activeTab === 'id' ? 'font-bold border-black' : 'text-gray-500 border-gray-300'}`}
            onClick={() => setActiveTab('id')}
          >
            아이디 찾기
          </button>
          <button 
            className={`flex-1 mr-4 py-4 text-center border-b-3 ${activeTab === 'password' ? 'font-bold border-black' : 'text-gray-500 border-gray-300'}`}
            onClick={() => setActiveTab('password')}
          >
            비밀번호 찾기
          </button>
        </div>
        
        {/* 내용 영역 */}
        <div className='p-8'>
          <div className='text-center mb-5'>
            <p className='text-sm mb-1'>아이디를 잊어버리셨나요?</p>
            <p className='text-xs text-black-600'>하단의 정보를 상세히 입력하세요</p>
          </div>
          
          {/* 찾기 방법 선택 - 수정된 부분 */}
          <div className='flex justify-center gap-5 my-6'>
            <label className='flex items-center cursor-pointer'>
              <div className='relative flex items-center justify-center mr-2'>
                <input
                  type="radio"
                  name="findMethod"
                  checked={findMethod === '휴대폰'}
                  onChange={() => setFindMethod('휴대폰')}
                  className='absolute opacity-0 w-5 h-5'
                />
                <div className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center ${findMethod === '휴대폰' ? 'border-rose-400' : ''}`}>
                  {findMethod === '휴대폰' && <div className='w-3 h-3 rounded-full bg-rose-400'></div>}
                </div>
              </div>
              <span>휴대폰으로 찾기</span>
            </label>
            
            <label className='flex items-center cursor-pointer'>
              <div className='relative flex items-center justify-center mr-2'>
                <input
                  type="radio"
                  name="findMethod"
                  checked={findMethod === '이메일'}
                  onChange={() => setFindMethod('이메일')}
                  className='absolute opacity-0 w-5 h-5'
                />
                <div className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center ${findMethod === '이메일' ? 'border-rose-400' : ''}`}>
                  {findMethod === '이메일' && <div className='w-3 h-3 rounded-full bg-rose-400'></div>}
                </div>
              </div>
              <span>이메일로 찾기</span>
            </label>
          </div>
          
          {/* 입력 필드 */}
          <div className='space-y-5'>
            <div>
              <input 
                type="text"
                placeholder="이름을 입력하세요"
                className='w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-gray-500'
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="휴대폰 번호를 입력하세요 (-제외)"
                className='w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-gray-500'
              />
            </div>
          </div>
          
          {/* 다음 버튼 */}
          <button className='w-full py-3 mt-8 bg-rose-300 hover:bg-rose-400 text-white rounded transition-colors'>
            다음
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindId