import JoinForm from './JoinForm';
import MainTitle from '../../components/common/title/MainTitle';
import CenterLayout from '../../layout/CenterLayout';

const Join = () => {
  return (
    <CenterLayout>
      <MainTitle>회원가입</MainTitle>
      <JoinForm />
    </CenterLayout>
  );
};

export default Join;
