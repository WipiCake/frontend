import RedStar from '../../../assets/img/RedStar.svg';

const IdInput = ({ register, errors }) => {
  return (
    <div>
      {/* 아이디 */}
      <div className="flex w-full items-center justify-between">
        <label className="flex gap-[0.4rem] text-k-16-Medium">
          아이디
          <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
        </label>
        <div>
          <input
            className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
            type="text"
            placeholder="아이디를 입력해주세요"
            {...register('username')}
          />
          {errors && <p>{errors.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default IdInput;
