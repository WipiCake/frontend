import JoinForm from './JoinForm';
import CenterLayout from '../../layout/CenterLayout';
import Maintitle from '../../components/common/title/Maintitle';

const Join = () => {
  return (
    <CenterLayout>
      <Maintitle>회원가입</Maintitle>
      <JoinForm />
    </CenterLayout>
  );
};

export default Join;
