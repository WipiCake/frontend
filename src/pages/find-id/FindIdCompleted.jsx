import React, { useState } from 'react'

const FindIdCompleted = () => {
  const [activeTab, setActiveTab] = useState('id'); // 'id' 또는 'password'
  const [findMethod, setFindMethod] = useState('휴대폰');  // '휴대폰' 또는 '이메일'
  
  return (
    <div className='w-full max-w-md bg-white rounded shadow-sm'>
      
      {/* 내용 영역 */}
      <div className='p-8'>
        <div className='text-center mb-5 text-sm'>
          <p className='mb-1'>고객님의 아이디는</p>
          <p className='text-black-600'>test 입니다.</p>
        </div>
        
        {/* 입력 필드 */}
        <div className='space-y-5'>
          {/* 로그인하러 가기 버튼 */}
          <button className='w-full py-3 mt-8 bg-rose-300 hover:bg-rose-400 text-white rounded transition-colors'>
            로그인하러 가기
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindIdCompleted