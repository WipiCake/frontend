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
      <footer className="flex h-[25.9rem] w-full flex-col border-t border-[#DBDBDB]">
        <div className="flex justify-center border-b border-[#DBDBDB]">
          <ul className="flex h-[5.7rem] w-[128rem] items-center">
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
                  <span className="mx-[1.6rem]">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="relative flex w-[128rem] justify-center pt-[2rem]">
            <div className="flex w-[64rem] flex-col">
              <div className="flex flex-col items-start gap-[0.4rem] text-k-13-Regular text-[#505050]">
                <div>
                  {FOOTERINFOLIST1.map((info, index) => (
                    <span key={index}>
                      {info}
                      {index < FOOTERINFOLIST1.length - 1 && (
                        <span className="mx-[1.6rem]">|</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-[0.4rem]">
                  {FOOTERINFOLIST2.map((info, index) => (
                    <span key={index}>{info}</span>
                  ))}
                </div>
                <div className="flex gap-[1.4rem] pt-[2.2rem]">
                  {ICON.map((img, index) => (
                    <span key={index}>
                      <img
                        className="h-[2.8rem] w-[2.8rem]"
                        src={img}
                        alt="아이콘"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-[64rem] flex-col gap-[0.8rem]">
              <div className="pb-[0.8rem]">
                <p className="text-k-15-Regular text-[#1A1A1A]">고객센터</p>
                <div className="flex items-center gap-[1.2rem]">
                  <p className="text-k-17-Semibold">010-1234-5678</p>
                  <span className="text-k-13-Regular">
                    월~토요일 오전 11시 ~ 오후 6시
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[1.2rem]">
                <button className="border border-solid border-[#DBDBDB] px-[1.2rem] py-[0.6rem]">
                  카카오톡 문의
                </button>
                <span className="text-[#505050]">365</span>
                <span className="text-[#999999]">|</span>
                <span className="text-[#505050]">
                  순차적으로 답변 드리겠습니다.
                </span>
              </div>
              <div className="flex items-center gap-[1.2rem]">
                <button className="border border-solid border-[#DBDBDB] px-[1.2rem] py-[0.6rem]">
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
