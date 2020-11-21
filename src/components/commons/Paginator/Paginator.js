import classes from './Paginator.module.css';

import React, {useState} from 'react';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div className={classes.pagination}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
          className={`${classes.paginationButton} ${classes.prev}`}></button>
      )}

      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page, index) => {
          return (
            <span
              className={
                currentPage === page
                  ? `${classes.pageNumber} ${classes.pageNumberSelected}`
                  : `${classes.pageNumber}`
              }
              onClick={(event) => {
                onPageChanged(page);
              }}
              key={index}>
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }} className={`${classes.paginationButton} ${classes.next}`}>
        </button>
      )}
    </div>
  );
};

export default Paginator;
