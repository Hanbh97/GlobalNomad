"use client";

import { ChevronDown } from "@/constants/icons";
import {
  ArrowButton,
  Container,
  LeftIcon,
  PageButton,
  RightIcon,
} from "./style";
import { PaginationProps } from "./type";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const maxVisible = 5;

    let start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);

    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisible + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getPageNumbers();

  return (
    <Container>
      <ArrowButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <LeftIcon src={ChevronDown} alt="이전 페이지" />
      </ArrowButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      <ArrowButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <RightIcon src={ChevronDown} alt="다음 페이지" />
      </ArrowButton>
    </Container>
  );
};

export default Pagination;
