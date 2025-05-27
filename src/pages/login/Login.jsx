import Maintitle from '../../components/common/title/Maintitle';
import Title from '../../components/common/title/title';
import CenterLayout from '../../layout/CenterLayout';
import LoginCard from './LoginCard';

const Login = () => {
  return (
    <CenterLayout>
      <div className="flex flex-col items-center gap-[4rem]">
        <Maintitle>로그인</Maintitle>
        <Title>
          윗피 케이크에
          <br />
          오신 걸 환영합니다
        </Title>
      </div>
      <LoginCard />
    </CenterLayout>
  );
};

export default Login;
