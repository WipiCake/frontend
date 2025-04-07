import React from "react";
import DaumPostcode from "react-daum-postcode";

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
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => onComplete({ address: "", zonecode: "" })}
      ></div>

      {/* 팝업 창 */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px] max-w-full">
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
};

export default AddressSearch;