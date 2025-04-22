import React, { useState } from 'react'

const FindIdVerificationCode = () => {
  const [activeTab, setActiveTab] = useState('id'); // 'id' 또는 'password'
  const [findMethod, setFindMethod] = useState('휴대폰');  // '휴대폰' 또는 '이메일'
  
  return (      
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
        <div className='text-center mb-5 text-sm'>
          <p className='mb-1'>고객님의 휴대번호로</p>
          <p className='text-black-600'>인증번호가 전송되었습니다.</p>
        </div>
        
        {/* 입력 필드 */}
        <div className='space-y-5'>
          <div>
            <input 
              type="text"
              placeholder="인증번호를 입력하세요"
              className='w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-gray-500'
            />
          </div>
        </div>
        
        {/* 확인 버튼 */}
        <button className='w-full py-3 mt-8 bg-rose-300 hover:bg-rose-400 text-white rounded transition-colors'>
          확인
        </button>
      </div>
    </div>
  )
}

export default FindIdVerificationCode