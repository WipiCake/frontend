import LoginForm from './LoginForm';
import SnsLogin from './SnsLogin';
import RightArrow from '../../assets/img/RightArrow.svg';
import CardUi from '../../components/common/cardUi/CardUi';

const LoginCard = () => {
  return (
    <CardUi>
      <LoginForm />
      <SnsLogin />
      <div className="flex h-[5.6rem] w-full items-center justify-center border border-[#DBDBDB]">
        <button className="text-k-16-Medium text-[#767676]">회원가입</button>
      </div>
      <div className="mt-[4.8rem] flex w-full justify-center">
        <p className="flex items-center text-[1.5rem] text-k-15-Regular text-[#767676]">
          회원가입이 필요 없으신가요?&nbsp;
          <a className="flex items-center text-black-50" href="#">
            비회원 주문
            <img src={RightArrow} alt="으론쪽 화살표" />
          </a>
        </p>
      </div>
    </CardUi>
  );
};

export default LoginCard;
