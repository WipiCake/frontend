import LoginCard from './LoginCard';

const Login = () => {
  return (
    <div className="mx-auto flex w-full justify-center bg-bg-20 pb-[16.2rem] pt-[8rem]">
      <div className="flex w-full max-w-[128rem] flex-col items-center gap-[2.4rem]">
        <div className="flex flex-col items-center gap-[4rem]">
          <div>
            <h2 className="text-k-28_Medium">로그인</h2>
          </div>
          <p className="text-center text-k-18-Medium">
            윗피 케이크에
            <br />
            오신 걸 환영합니다!
          </p>
        </div>
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
