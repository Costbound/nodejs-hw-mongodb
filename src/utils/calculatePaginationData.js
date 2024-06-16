export const calculatePaginationData = (count, page, perPage) => {
  console.log(`calculatePaginationData: 'count' is ${count}`);
  const totalPages = Math.ceil(count / perPage);
  return {
    page,
    perPage,
    totalItems: 250,
    totalPages,
    hasNextPage: Boolean(totalPages - page),
    hasPreviousPage: page !== 1,
  };
};
