//the pagination component that lets users navigate between pages displaying the current page and total pages
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}//Go to the next page
          disabled={currentPage === 1}// Disable if on the first page
          className="px-4 py-2 bg-[#844df7] text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 font-semibold">{currentPage} / {totalPages}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages} // Disable if on the last page
          className="px-4 py-2 bg-[#844df7] text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  }
  