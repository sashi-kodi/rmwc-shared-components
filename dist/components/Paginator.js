import React from 'react';
import Pagination from "react-paginating";

var Paginator = function Paginator(props) {
  var total = props.total,
      limit = props.limit,
      pageCount = props.pageCount,
      currentPage = props.currentPage,
      handlePageChange = props.handlePageChange;
  return React.createElement(Pagination, {
    total: total,
    limit: limit,
    pageCount: pageCount,
    currentPage: currentPage
  }, function (_ref) {
    var pages = _ref.pages,
        currentPage = _ref.currentPage,
        hasNextPage = _ref.hasNextPage,
        hasPreviousPage = _ref.hasPreviousPage,
        previousPage = _ref.previousPage,
        nextPage = _ref.nextPage,
        totalPages = _ref.totalPages,
        getPageItemProps = _ref.getPageItemProps;
    return React.createElement("div", null, React.createElement("button", getPageItemProps({
      pageValue: 1,
      onPageChange: handlePageChange
    }), "first"), hasPreviousPage && React.createElement("button", getPageItemProps({
      pageValue: previousPage,
      onPageChange: handlePageChange
    }), '<'), pages.map(function (page) {
      var activePage = null;

      if (currentPage === page) {
        activePage = {
          backgroundColor: '#FE6B8B'
        };
      }

      return React.createElement("button", getPageItemProps({
        pageValue: page,
        key: page,
        style: activePage,
        onPageChange: handlePageChange
      }), page);
    }), hasNextPage && React.createElement("button", getPageItemProps({
      pageValue: nextPage,
      onPageChange: handlePageChange
    }), '>'), React.createElement("button", getPageItemProps({
      pageValue: totalPages,
      onPageChange: handlePageChange
    }), "last"));
  });
};

export default Paginator;