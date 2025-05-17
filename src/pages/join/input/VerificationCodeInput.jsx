import RedStar from '../../../assets/img/RedStar.svg';

const VerificationCodeInput = ({ register, errors }) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <label className="flex gap-[0.4rem] text-k-16-Medium">
          인증번호
          <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
        </label>
        <div className="flex gap-[2rem]">
          <input
            type="text"
            placeholder="인증번호를 입력해주세요"
            className="h-[5.6rem] w-[23.7rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
            {...register('verificationCode')}
          />
          <div className="flex border border-black-30">
            <button
              type="button"
              className="flex w-[15.7rem] items-center justify-center gap-[1.2rem] border border-black-30 text-k-16-Medium text-black-30"
            >
              인증번호 확인
            </button>
          </div>
        </div>
        {errors.verificationCode && (
          <p className="text-red-500">{errors.verificationCode.message}</p>
        )}
      </div>
    </div>
  );
};

export default VerificationCodeInput;
