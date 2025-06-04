import { useState } from 'react';
import FindPhone from '../FindPhone';
import FindEmail from '../FindEmail';
import { useFindStore } from '../../../lib/zustand/findStore';

const FindPassword = () => {
  // 휴대폰 번호로 찾을지 이메일로 찾을지
  const [findMethod, setFindMethod] = useState('phone');

  // 상태 관리 zustand
  const { submit } = useFindStore();

  return (
    <div className="w-full">
      <div className="mb-[0.8rem] text-center">
        {submit ? (
          <p className="text-k-15-Regular">
            고객님의 {findMethod === 'phone' ? '휴대폰 번호' : '이메일'}로
            <br />
            인증번호가 전송되었습니다.
          </p>
        ) : (
          <p className="text-k-15-Regular">
            비밀번호를 잊어버리셨나요?
            <br />
            하단의 정보를 상세히 입력하세요
          </p>
        )}
      </div>

      {submit ? (
        <div className="flex w-full pt-[4.8rem]"></div>
      ) : (
        <div className="flex w-full py-[4.8rem]">
          <button
            value="phone"
            className="flex w-full items-center justify-center gap-[0.8rem] text-k-15-Regular"
            onClick={() => {
              setFindMethod('phone');
            }}
          >
            <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-30">
              {findMethod === 'phone' && (
                <div className="h-[1rem] w-[1rem] rounded-full bg-pink-30"></div>
              )}
            </div>
            휴대폰으로 찾기
          </button>

          <button
            value="email"
            className="flex w-full items-center justify-center gap-[0.8rem] text-k-15-Regular"
            onClick={() => {
              setFindMethod('email');
            }}
          >
            <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-30">
              {findMethod === 'email' && (
                <div className="h-[1rem] w-[1rem] rounded-full bg-pink-30"></div>
              )}
            </div>
            이메일로 찾기
          </button>
        </div>
      )}

      {findMethod === 'phone' ? <FindPhone /> : <FindEmail />}
    </div>
  );
};

export default FindPassword;
