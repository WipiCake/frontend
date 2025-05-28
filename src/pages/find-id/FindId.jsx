// import { Outlet } from 'react-router-dom';
import Maintitle from '../../components/common/title/Maintitle';
import CenterLayout from '../../layout/CenterLayout';
import FindIdCard from './FindIdCard';

const FindId = () => {
  return (
    <CenterLayout>
      <Maintitle>아이디/비밀번호 찾기</Maintitle>
      <FindIdCard />
    </CenterLayout>
  );
};

export default FindId;
