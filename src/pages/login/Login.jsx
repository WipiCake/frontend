import MainTitle from '../../components/common/title/MainTitle';
import Title from '../../components/common/title/Title';
import CenterLayout from '../../layout/CenterLayout';
import LoginCard from './LoginCard';

const Login = () => {
  return (
    <CenterLayout>
      <div className="flex flex-col items-center gap-[4rem]">
        <MainTitle>로그인</MainTitle>
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
