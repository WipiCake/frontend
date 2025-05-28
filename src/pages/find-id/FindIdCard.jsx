import { useState } from 'react';
import FindIdForm from './find/FindIdForm';
import FIndPasswordForm from './find/FIndPasswordForm';
import CardUi from '../../components/common/cardUi/CardUi';

const FindIdCard = () => {
  const [activeTab, setActiveTab] = useState('id');

  return (
    <CardUi>
      <div className="flex h-full w-full flex-col gap-[4.2rem]">
        <div className="flex">
          <div
            className={`flex h-[6.2rem] w-[20rem] cursor-pointer items-center justify-center border-b-[0.3rem] text-center text-k-16-Medium ${activeTab === 'id' ? 'border-black-50' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('id');
            }}
          >
            아이디 찾기
          </div>
          <div
            className={`flex h-[6.2rem] w-[20rem] cursor-pointer items-center justify-center border-b-[0.3rem] text-center text-k-16-Medium ${activeTab === 'password' ? 'border-black-50' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('password');
            }}
          >
            비밀번호 찾기
          </div>
        </div>

        <div className="mb-[0.8rem] text-center">
          <p className="text-k-15-Regular">
            아이디를 잊어버리셨나요?
            <br />
            하단의 정보를 상세히 입력하세요
          </p>
        </div>

        {activeTab === 'id' ? <FindIdForm /> : <FIndPasswordForm />}
      </div>
    </CardUi>
  );
};

export default FindIdCard;
