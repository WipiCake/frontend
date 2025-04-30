import React from 'react';
import Instagram from '../../assets/icons/instagram.svg';
import NaverMap from '../../assets/icons/NaverMap.svg';
import KakaoChanel from '../../assets/icons/KakaoChanel.svg';

const Footer = () => {
  const FOOTERMENULIST = [
    '회사소개',
    '이용약관',
    '개인정보처리방침',
    '이용약관',
  ];

  const FOOTERINFOLIST1 = [
    'COMPANY: 윗피케이크',
    'CEO: 오지혜',
    'Phone: 010-1234-5678',
  ];

  const FOOTERINFOLIST2 = [
    'BUSINESS LICENSE: 123-45-67712',
    'Adress: 46579 부산광역시 북구 덕천2길 30, 윗피케이크',
    '무통장입금: 신한은행 110-12345678 (예금주: 오지혜)',
  ];

  const ICON = [Instagram, NaverMap, KakaoChanel];

  return (
    <>
      <footer className="flex h-[259px] w-full flex-col border-t border-[#DBDBDB]">
        <div className="flex justify-center border-b border-[#DBDBDB]">
          <ul className="flex h-[57px] w-[1280px] items-center">
            {FOOTERMENULIST.map((menu, index) => (
              <li
                key={index}
                className="flex items-center text-k-14-Regular text-[#1A1A1A]"
              >
                <span
                  className={`${index === 2 ? 'text-[#B56D6D]' : ''} cursor-pointer`}
                >
                  {menu}
                </span>
                {index < FOOTERMENULIST.length - 1 && (
                  <span className="mx-4">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="relative flex w-[1280px] justify-center pt-[20px]">
            <div className="flex w-[640px] flex-col">
              <div className="flex flex-col items-start gap-[4px] text-k-13-Regular text-sm text-[#505050]">
                <div>
                  {FOOTERINFOLIST1.map((info, index) => (
                    <span key={index}>
                      {info}
                      {index < FOOTERINFOLIST1.length - 1 && (
                        <span className="mx-4">|</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-[4px]">
                  {FOOTERINFOLIST2.map((info, index) => (
                    <span key={index}>{info}</span>
                  ))}
                </div>
                <div className="flex gap-[14px] pt-[22px]">
                  {ICON.map((img, index) => (
                    <span key={index}>
                      <img
                        className="h-[28px] w-[28px]"
                        src={img}
                        alt="아이콘"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-[640px] flex-col gap-[8px]">
              <div className="pb-[8px]">
                <p className="text-k-15-Regular text-[#1A1A1A]">고객센터</p>
                <div className="flex items-center gap-[12px]">
                  <p className="text-k-17-Semibold">010-1234-5678</p>
                  <span className="text-k-13-Regular">
                    월~토요일 오전 11시 ~ 오후 6시
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <button className="border border-solid border-[#DBDBDB] px-[12px] py-[6px]">
                  카카오톡 문의
                </button>
                <span className="text-[#505050]">365</span>
                <span className="text-[#999999]">|</span>
                <span className="text-[#505050]">
                  순차적으로 답변 드리겠습니다.
                </span>
              </div>
              <div className="flex items-center gap-[12px]">
                <button className="border border-solid border-[#DBDBDB] px-[12px] py-[6px]">
                  대량주문 문의
                </button>
                <span className="text-[#505050]">
                  월~토요일 오전 11시 ~ 오후 6시
                </span>
              </div>
              <div className="text-[#828282]">
                비회원 문의: withpea@naver.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
