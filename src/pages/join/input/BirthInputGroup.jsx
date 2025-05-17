import RedStar from '../../../assets/img/RedStar.svg';

const BirthInputGroup = ({ register, errors }) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <label className="flex gap-[0.4rem] text-k-16-Medium">
          생년월일
          <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
        </label>
        <div className="flex flex-col">
          <div className="flex h-[5.6rem] w-[41.4rem]">
            <input
              type="text"
              placeholder="YYYY"
              className="w-[19.6rem] border border-black-30 text-center text-k-16-Regular"
              {...register('birthYear')}
            />
            <input
              type="text"
              placeholder="MM"
              className="w-[10.8rem] border-y border-black-30 text-center text-k-16-Regular"
              {...register('birthMonth')}
            />
            <input
              type="text"
              placeholder="DD"
              className="w-[10.8rem] border border-black-30 text-center text-k-16-Regular"
              {...register('birthDay')}
            />
          </div>

          {/* ✅ 에러 메시지는 여기 하나만! */}
          {(errors.birthYear || errors.birthMonth || errors.birthDay) && (
            <p>생년월일을 정확히 입력해주세요. (예: 1990 / 05 / 12)</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthInputGroup;
