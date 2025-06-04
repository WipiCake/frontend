import CardUi from '../../components/common/cardUi/CardUi';
import { useActiveTabStore, useFindStore } from '../../lib/zustand/findstore';
import FindId from './find-id/FindId';
import FindPassword from './find-password/FindPassword';
<<<<<<< HEAD
=======
import { useActiveTabStore, useFindStore } from '../../lib/zustand/findStore';
>>>>>>> 85ccc450912ac5d3bc981db433cfb8e077aaa655

const FindCardUi = () => {
  const { submit } = useFindStore();

  const activeTab = useActiveTabStore((state) => state.activeTab);
  const setActiveTab = useActiveTabStore((state) => state.setActiveTab);

  return (
    <CardUi>
      <div className="flex h-full w-full flex-col gap-[4.2rem]">
        <div className="flex">
          <div
            className={`flex h-[6.2rem] w-[20rem] cursor-pointer items-center justify-center border-b-[0.3rem] text-center text-k-16-Medium ${activeTab === 'id' ? 'border-black-50' : 'text-gray-500'}`}
            onClick={() => {
              if (submit) return;
              setActiveTab('id');
            }}
          >
            아이디 찾기
          </div>

          <div
            className={`flex h-[6.2rem] w-[20rem] cursor-pointer items-center justify-center border-b-[0.3rem] text-center text-k-16-Medium ${activeTab === 'password' ? 'border-black-50' : 'text-gray-500'}`}
            onClick={() => {
              if (submit) return;
              setActiveTab('password');
            }}
          >
            비밀번호 찾기
          </div>
        </div>

        {activeTab === 'id' ? <FindId /> : <FindPassword />}
      </div>
    </CardUi>
  );
};

export default FindCardUi;
