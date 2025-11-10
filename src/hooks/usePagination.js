import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function usePagination(initialPage = 1) {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const query = new URLSearchParams(search);
  const pageFromQuery = Number(query.get('page')) || initialPage;

  const [currentPage, setCurrentPage] = useState(pageFromQuery);

  useEffect(() => {
    setCurrentPage(pageFromQuery);
  }, [pageFromQuery]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    query.set('page', page);
    navigate(`${pathname}?${query.toString()}`);
  };

  return { currentPage, handlePageChange };
}
