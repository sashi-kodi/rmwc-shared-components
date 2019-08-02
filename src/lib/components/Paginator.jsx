import React from 'react';
import Pagination from "react-paginating";

const Paginator = (props)=>{
    const {total, limit, pageCount, currentPage, handlePageChange} = props;
    return (
          <Pagination total={total}
            limit={limit}
            pageCount={pageCount}
            currentPage={currentPage}>
            {({
              pages,
              currentPage,
              hasNextPage,
              hasPreviousPage,
              previousPage,
              nextPage,
              totalPages,
              getPageItemProps
            }) => (
              <div>
                <button
                  {...getPageItemProps({
                    pageValue: 1,
                    onPageChange: handlePageChange
                  })}
                >
                  first
                </button>
  
                {hasPreviousPage && (
                  <button
                    {...getPageItemProps({
                      pageValue: previousPage,
                      onPageChange: handlePageChange
                    })}
                  >
                    {'<'}
                  </button>
                )}
  
                {pages.map(page => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = { backgroundColor: '#018786' };
                  }
                  return (
                    <button
                      {...getPageItemProps({
                        pageValue: page,
                        key: page,
                        style: activePage,
                        onPageChange: handlePageChange
                      })}
                    >
                      {page}
                    </button>
                  );
                })}
  
                {hasNextPage && (
                  <button
                    {...getPageItemProps({
                      pageValue: nextPage,
                      onPageChange: handlePageChange
                    })}
                  >
                    {'>'}
                  </button>
                )}
  
                <button
                  {...getPageItemProps({
                    pageValue: totalPages,
                    onPageChange: handlePageChange
                  })}
                >
                  last
                </button>
              </div>
            )}
          </Pagination>
      );
}
export default Paginator;