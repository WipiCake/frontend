import { RedStar } from '../../../assets/theme';

const Label = ({ children }) => {
  return (
    <label className="flex gap-[0.4rem] text-k-16-Medium">
      {children}
      <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
    </label>
  );
};

export default Label;
