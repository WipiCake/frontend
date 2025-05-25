import { useForm } from 'react-hook-form';

const EditPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div className="flex flex-col items-center">
      <span className="mt-[8rem] text-k-28_Medium">개인정보 수정</span>
      <form
        className="mt-[2.4rem] h-[91rem] w-[63rem] bg-bg-10"
        onSubmit={handleSubmit(onSubmit)}
      ></form>
    </div>
  );
};

export default EditPage;
