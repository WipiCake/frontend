const BaseTable = ({ headers, items = [] }) => {
  if (!headers || headers.length === 0) {
    throw new Error('<DataTable /> headers is required.');
  }
  // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열
  const headerKey = headers.map((header) => header.value);
  return (
    <table className="mt-[2rem] w-[128rem] table-auto border-collapse text-center">
      <thead className="border-y border-black-30 bg-bg-30 text-k-18-Medium">
        <tr>
          {headers.map((header) => (
            <th key={header.text} className="py-[1.8rem]">
              {header.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-bg-10 text-k-18-Medium">
        {items.map((item, index) => (
          <tr key={index}>
            {/* headerKey를 순회하면서 key를 가져옴 */}
            {headerKey.map((key) => (
              <td
                key={key + index}
                className="border-b border-black-30 py-[1.8rem]"
              >
                {item[key]} {/* key로 객체의 값을 출력 */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BaseTable;
