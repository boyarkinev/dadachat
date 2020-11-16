import React from 'react';
import classes from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.pagination}>
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            className={
              currentPage === page
                ? `${classes.pageNumber} ${classes.pageNumberSelected}`
                : `${classes.pageNumber}`
            }
            onClick={(event) => {
              onPageChanged(page);
            }}>
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
