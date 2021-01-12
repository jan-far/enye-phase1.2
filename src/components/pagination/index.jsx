import React from 'react';
import {
  Link,
  ListItems,
  PaginateContainer,
  UnorderedList,
} from './paginateElements';

const Pagination = ({ patientPerPage, totalPatients, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPatients / patientPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <PaginateContainer>
        <UnorderedList>
          Pages: &nbsp;
          {pageNumbers.map((number) => (
            <Link key={number} href="#">
              <ListItems onClick={() => paginate(number)} >
                {number}
              </ListItems>
            </Link>
          ))}
        </UnorderedList>
      </PaginateContainer>
    </>
  );
};

export default Pagination;
