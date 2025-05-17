import RedStar from '../../../assets/img/RedStar.svg';

const GenderInput = ({ register, errors }) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <label className="flex gap-[0.4rem] text-k-16-Medium">
          성별
          <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
        </label>

        <div className="flex h-[5.6rem] flex-col justify-center">
          <div className="flex w-[41.4rem] gap-[6.4rem]">
            <label className="flex items-center gap-[0.8rem] text-k-16-Regular">
              <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-40">
                <input
                  type="radio"
                  value="male"
                  {...register('gender')}
                  className="h-[1rem] w-[1rem] appearance-none rounded-full checked:border-transparent checked:bg-pink-40"
                />
              </div>
              남자
            </label>
            <label className="flex items-center gap-[0.8rem] text-k-16-Regular">
              <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-40">
                <input
                  type="radio"
                  value="female"
                  {...register('gender')}
                  className="h-[1rem] w-[1rem] appearance-none rounded-full checked:border-transparent checked:bg-pink-40"
                />
              </div>
              여자
            </label>
          </div>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default GenderInput;
