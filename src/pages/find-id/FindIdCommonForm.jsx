import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

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
        <Outlet />
      </div>
    </div>
  )
}

export default FindId