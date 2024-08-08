import { type PageInfo } from '../types/app-types';

interface PaginationProps {
  previousPageHandler: () => void;
  nextPageHandler: () => void;
  pageInfo: PageInfo;
}

const Pagination = ({
  previousPageHandler,
  nextPageHandler,
  pageInfo,
}: PaginationProps) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={previousPageHandler}
        disabled={!pageInfo.previous}
      >
        Previous
      </button>
      <button
        className="pagination-button"
        onClick={nextPageHandler}
        disabled={!pageInfo.next}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
