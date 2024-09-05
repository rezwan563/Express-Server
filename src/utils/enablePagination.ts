const enablePagination = (query: any) => {
  const page = parseInt(query.page) || 1;
  const dataPerPage = parseInt(query.dataPerPage) || 15;
  const skip = (page - 1) * dataPerPage;
  const take = dataPerPage;
  return {
    page,
    dataPerPage,
    skip,
    take
  };
};

export default enablePagination
