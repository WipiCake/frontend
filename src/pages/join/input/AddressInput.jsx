import Searach from '../../../assets/img/Search.svg';
import AddressSearch from './../AddressSearch';
import Label from './Label';

const AddressInput = ({
  register,
  errors,
  isAddressOpen,
  handleAddressSearch,
  handleAddressComplete,
}) => {
  return (
    <div>
      <div className="flex w-full items-start justify-between">
        <Label>주소</Label>
        <div className="flex w-[41.4rem] flex-col gap-[1.6rem]">
          <div className="flex justify-between">
            <input
              className="h-[5.6rem] w-[19.8rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              placeholder="우편번호"
              {...register('zipAddress')}
              readOnly
            />
            <button
              className="flex w-[19.8rem] items-center justify-center gap-[1.2rem] bg-pink-40 text-k-16-Medium text-bg-10"
              type="button"
              onClick={handleAddressSearch}
            >
              주소 검색
              <img
                className="2-[2.4rem] h-[2.4rem]"
                src={Searach}
                alt="돋보기 아이콘"
              />
            </button>
          </div>

          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              placeholder="기본 주소"
              {...register('mainAddress')}
              readOnly
            />
          </div>

          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              placeholder="나머지 주소 (선택)"
              {...register('addressDetail')}
            />
          </div>
        </div>
        {isAddressOpen && <AddressSearch onComplete={handleAddressComplete} />}

        {errors.address && <p>{errors.address.message}</p>}
      </div>
    </div>
  );
};

export default AddressInput;
