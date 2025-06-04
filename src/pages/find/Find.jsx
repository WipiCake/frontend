import CenterLayout from '../../layout/CenterLayout';
import FindCardUi from './FindCardUi';
import MainTitle from './../../components/common/title/MainTitle';

const Find = () => {
  return (
    <CenterLayout>
      <MainTitle>아이디/비밀번호 찾기</MainTitle>
      <FindCardUi />
    </CenterLayout>
  );
};

export default Find;
