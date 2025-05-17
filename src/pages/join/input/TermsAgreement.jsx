import RedStar from '../../../assets/img/RedStar.svg';
import check from '../../../assets/img/check.svg';
import checked from '../../../assets/img/checked.svg';
import ColorRightArrow from '../../../assets/img/ColorRightArrow.svg';

const TermsAgreement = ({
  register,
  errors,
  handleAllAgree,
  handleCheckboxChange,
  agreements,
}) => {
  return (
    <div>
      <div className="flex w-full items-start justify-between">
        <label className="flex gap-[0.4rem] text-k-16-Medium">
          이용약관 동의
          <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
        </label>

        <div className="flex w-[41.4rem] flex-col gap-[2rem]">
          {/* 전체 동의 */}
          <div
            className="flex cursor-pointer items-center gap-[2rem]"
            onClick={handleAllAgree}
          >
            <img
              src={agreements.all ? checked : check}
              alt="전체 동의 체크박스"
              className="h-[2.4rem] w-[2.4rem]"
            />
            <p className="text-k-18-Medium text-black-50">전체 동의합니다.</p>
          </div>

          {/* 필수 약관 */}
          <div className="flex items-center justify-between">
            <div
              className="flex cursor-pointer items-center gap-[2rem]"
              onClick={() => handleCheckboxChange('termsRequired')}
            >
              <img
                src={agreements.termsRequired ? checked : check}
                alt="약관 동의 체크박스"
                className="h-[2.4rem] w-[2.4rem]"
              />
              <p className="text-k-15-Regular text-black-50">
                이용약관 동의 (필수)
              </p>
            </div>
            <a
              href="#"
              className="flex items-center text-k-15-Regular text-pink-50"
            >
              약관 보기 <img src={ColorRightArrow} alt="오른쪽 화살표" />
            </a>
          </div>

          {/* 개인정보 동의 */}
          <div className="flex items-center justify-between">
            <div
              className="flex cursor-pointer items-center gap-[2rem]"
              onClick={() => handleCheckboxChange('privacyRequired')}
            >
              <img
                src={agreements.privacyRequired ? checked : check}
                alt="개인정보 동의 체크박스"
                className="h-[2.4rem] w-[2.4rem]"
              />
              <p className="text-k-15-Regular text-black-50">
                개인정보 수집 및 이용 동의 (필수)
              </p>
            </div>
            <a
              href="#"
              className="flex items-center text-k-15-Regular text-pink-50"
            >
              약관 보기 <img src={ColorRightArrow} alt="오른쪽 화살표" />
            </a>
          </div>

          {/* 선택 동의 */}
          <div
            className="flex cursor-pointer items-center gap-[2rem] py-3"
            onClick={() => handleCheckboxChange('marketingOptional')}
          >
            <img
              src={agreements.marketingOptional ? checked : check}
              alt="마케팅 동의 체크박스"
              className="h-[2.4rem] w-[2.4rem]"
            />
            <p className="text-k-15-Regular text-black-50">
              할인쿠폰 등 혜택 및 정보 수신 동의 (선택)
            </p>
          </div>

          {/* react-hook-form용 hidden input */}
          <input type="hidden" {...register('termsRequired')} />
          <input type="hidden" {...register('privacyRequired')} />
          {errors.termsRequired && (
            <p className="text-sm text-red">{errors.termsRequired.message}</p>
          )}
          {errors.privacyRequired && (
            <p className="text-sm text-red">{errors.privacyRequired.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAgreement;
