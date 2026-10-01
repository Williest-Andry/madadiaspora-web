export interface PageWindow {
  start: number;
  end: number;
  pages: number[];
  hasPrevWindow: boolean;
  hasNextWindow: boolean;
}

export function getPageWindow(
  currentPage: number,
  totalPages: number,
  windowSize = 7
): PageWindow {
  const safeTotal = Math.max(totalPages, 1);
  const safeCurrent = Math.min(Math.max(currentPage, 1), safeTotal);

  const start = Math.floor((safeCurrent - 1) / windowSize) * windowSize + 1;
  const end = Math.min(start + windowSize - 1, safeTotal);

  return {
    start,
    end,
    pages: Array.from({ length: end - start + 1 }, (_, i) => start + i),
    hasPrevWindow: start > 1,
    hasNextWindow: end < safeTotal,
  };
}
