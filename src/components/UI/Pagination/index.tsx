import React, { use, useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [pageTotal, setPageTotal] = useState(1);
  
  useEffect(() => {
    const t = totalPages/10
    const d = totalPages%10
    if(d > 0) {
      setPageTotal(t+1)
    }
    setPageTotal(t);
    console.error("first", totalPages, pageTotal)
  }, [totalPages]);

  return (
    <ul className="flex space-x-5 justify-center font-[sans-serif]">
      {/* Previous Button */}
      <li
        className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-600"
        } h-9 rounded-md`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-400" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>

      {/* Page Numbers */}
      {Array.from({ length: pageTotal }, (_, i) => i + 1).map((page) => (
        <li
          key={page}
          className={`flex items-center justify-center shrink-0 border-2 cursor-pointer text-base font-bold ${
            currentPage === page
              ? "bg-blue-500 border-blue-500 text-white"
              : "hover:bg-gray-50 text-gray-800"
          } px-[13px] h-9 rounded-md`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}

      {/* Next Button */}
      <li
        className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold ${
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blue-600"
        } h-9 rounded-md`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;