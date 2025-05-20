import { useState } from 'react';

const Inquiry = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const inquiriesPerPage = 10;

  // 문의 데이터 (예시)
  const inquiries = [
    {
      id: 1,
      title: '배송 언제 되나요?',
      writer: '한*주',
      date: '2024-10-26',
      status: '답변 대기중',
      secret: false,
    },
    {
      id: 2,
      title: '보관 방법 문의',
      writer: '오*민',
      date: '2024-10-26',
      status: '답변 완료',
      secret: false,
    },
    {
      id: 3,
      title: '비밀글입니다.',
      writer: '한*진',
      date: '2024-10-26',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 4,
      title: '비밀글입니다.',
      writer: '송*섭',
      date: '2024-09-12',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 5,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 6,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 7,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 8,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 9,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 10,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 11,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 12,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 13,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
    {
      id: 14,
      title: '비밀글입니다.',
      writer: '홍*동',
      date: '2024-08-29',
      status: '답변 완료',
      secret: true,
    },
  ];

  const totalPages = Math.ceil(inquiries.length / inquiriesPerPage);
  const currentInquiries = inquiries.slice(
    (currentPage - 1) * inquiriesPerPage,
    currentPage * inquiriesPerPage,
  );

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-k-24_Medium text-black-50">
          문의({inquiries.length})
        </h2>
        <button className="rounded bg-pink-30 px-6 py-2 text-k-16-Regular text-white">
          문의하기
        </button>
      </div>

      {/* 테이블 헤더 */}
      <div className="grid h-[6.3rem] w-full grid-cols-[10fr_1fr_2fr_1.5fr] items-center gap-[11rem] border-b border-t border-black-10 bg-bg-30 px-[4rem] text-k-18-Medium">
        <div className="text-center">제목</div>
        <div className="text-center">작성자</div>
        <div className="text-center">작성일</div>
        <div className="text-center">답변상태</div>
      </div>

      {/* 테이블 데이터 */}
      {currentInquiries.map((item) => (
        <div
          key={item}
          className="grid h-[6.3rem] w-full grid-cols-[10fr_1fr_2fr_1.5fr] items-center gap-[11rem] border-b border-t border-black-10 bg-bg-30 px-[4rem] text-k-18-Medium"
        >
          <div className="flex w-full items-center text-black-50">
            {item.secret ? (
              <div>
                <span className="text-center">비밀글입니다.</span>
                <span role="img" aria-label="lock">
                  🔒
                </span>
              </div>
            ) : (
              item.title
            )}
          </div>
          <div className="text-center">{item.writer}</div>
          <div className="text-center">{item.date}</div>
          <div className="text-center text-pink-40">{item.status}</div>
        </div>
      ))}

      {/* 페이지네이션 */}
      <div className="mt-10 flex justify-center gap-4 text-k-16-Regular">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`h-[3.2rem] w-[3.2rem] rounded-full ${
              currentPage === pageNum
                ? 'bg-pink-30 text-white'
                : 'text-black-50 hover:underline'
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Inquiry;
