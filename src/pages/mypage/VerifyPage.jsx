import { useForm } from 'react-hook-form';

const VerifyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('password', data.password);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">개인정보 수정</span>
      <form
        className="mt-[2rem] flex h-[36.7rem] w-[49.6rem] flex-col bg-bg-10 px-[4.8rem] py-[4rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="whitespace-pre-wrap text-center text-k-15-Regular">
          {
            '회원님의 정보를 안전하게 보호하기 위해\n 비밀번호를 다시 한번 확인해주세요.'
          }
        </span>
        <div className="mt-[4rem]">
          {/* 사용자 이름과 님 사이의 간격 조정 필요 */}
          <span className="text-k-15-Medium">한혜주</span>
          <span className="text-k-15-Regular">님</span>
        </div>
        <input
          className="h-[5.6rem] w-[40rem] border-b border-black-20 text-k-16-Regular"
          type="password"
          placeholder="비밀번호를 입력하세요"
          {...register('password', {
            validate: (value) =>
              value === watch('password') || '비밀번호를 다시 입력해주세요',
          })}
        />
        {errors && <p>{errors.message}</p>}
        <button className="mt-[4.9rem] h-[5.7rem] bg-pink-30 text-k-16-Regular text-bg-10">
          확인
        </button>
      </form>
    </div>
  );
};

export default VerifyPage;
