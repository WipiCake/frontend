import RedStar from '../../../assets/img/RedStar.svg';

const ConfirmPasswordInput = ({ register, errors }) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <label className="flex gap-[0.4rem] text-k-16-Medium">
          비밀번호 확인
          <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
        </label>
        <div>
          <input
            className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswordInput;
