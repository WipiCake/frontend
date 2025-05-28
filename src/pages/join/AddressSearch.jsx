import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressSearch = ({ onComplete }) => {
  const handleComplete = (data) => {
    const fullAddress = data.address;
    const zoneCode = data.zonecode;
    onComplete({ address: fullAddress, zonecode: zoneCode });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 어둡게 */}
      <div
        className="bg-black absolute inset-0 opacity-50"
        onClick={() => onComplete({ address: '', zonecode: '' })}
      ></div>

      {/* 팝업 창 */}
      <div className="relative w-[500px] max-w-full rounded-lg bg-white p-6 shadow-lg">
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
};

export default AddressSearch;
