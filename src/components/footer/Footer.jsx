import React from 'react'

const Footer = () => {

  const footerMenuList = [
    "회사소개",
    "이용약관",
    "개인정보처리방침",
    "이용약관",
  ]

  const footerInfoList1 = [
    "대표: 오지혜",
    "부산광역시 북구 덕천2길 30",
    "사업자등록번호: 123-45-678900",
  ]

  return (
    <>
      <footer className="h-[20vh]">
        <ul className="flex pl-10 items-center h-[3vh] w-full">
          {footerMenuList.map((menu, index) => (
            <li key={index} className="flex items-center">
              <span className={`${index === 2 ? 'text-red-500' : ''}`}>
                {menu}
              </span>
              {index < footerMenuList.length - 1 && (
                <span className="mx-4">|</span>
              )}
            </li>
          ))}
        </ul>
        <div className='h-[0.25vh] w-full border-t border-gray-300'></div>
        <div className='h-[15vh] pl-10 py-2 flex justify-between relative'>
          <div className='flex flex-col'>
            <div className='flex items-start text-sm text-gray-600'>
              {footerInfoList1.map((info, index) => (
                <span key={index}>
                  {info}
                  {index < footerInfoList1.length - 1 && (
                    <span className="mx-4">|</span>
                  )}
                </span>
              ))}
            </div>
            <div className="mt-auto mb-1 pl-125">
              <img 
                width={30}
                height={30}
                src="/src/assets/icons/instagram.png" 
                alt="인스타그램" 
                className="cursor-pointer"
              />
            </div>
          </div>

          <ul className='flex flex-col gap-1 mr-10'>
            <li className='font-bold'>고객센터</li>
            <li className='flex items-center gap-1'>
              <div className='w-[130px]'>
                <span className='text-xl font-bold'>1544-1111</span>
              </div>
              <span className='text-xs text-gray-600'>월~토요일 오전 11시 ~ 오후 6시</span>
            </li>
            <li className='flex items-center gap-1'>
              <div className='w-[130px]'>
                <button className='text-xs border border-gray-300 rounded px-3 py-2'>카카오톡 문의</button>
              </div>
              <span className='text-xs text-gray-600'>월~토요일 오전 11시 ~ 오후 6시</span>
            </li>
            <li className='flex items-center gap-1'>
              <div className='w-[130px]'>
                <button className='text-xs border border-gray-300 rounded px-3 py-2'>1:1 문의</button>
              </div>
              <span className='text-xs text-gray-600'>월~토요일 오전 11시 ~ 오후 6시</span>
            </li>
            <li className='flex items-center gap-1'>
              <div className='w-[130px]'>
                <button className='text-xs border border-gray-300 rounded px-3 py-2'>대량주문 문의</button>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer