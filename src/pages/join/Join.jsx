import JoinForm from './JoinForm';
import CenterLayout from '../../layout/CenterLayout';
import MainTitle from './../../components/common/title/MainTitle';

const Join = () => {
  return (
    <CenterLayout>
      <MainTitle>회원가입</MainTitle>
      <JoinForm />
    </CenterLayout>
  );
};

export default Join;
