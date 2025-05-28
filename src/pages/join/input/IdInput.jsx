import Label from './Label';

const IdInput = ({ register, errors }) => {
  return (
    <div>
      {/* 아이디 */}
      <div className="flex w-full items-center justify-between">
        <Label>아이디</Label>
        <div>
          <input
            className="h-[5.6rem] w-[41.4rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
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
