import React from 'react';
import {
  SearchFieldContainer,
  SearchInput,
  Sort,
  Option,
} from './SearchElements';

const SearchField = ({ placeholder, handleChange, changeOrder }) => {
  return (
    <>
      <SearchFieldContainer>
        <SearchInput
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Sort
          onChange={({ target: { value } }) =>
            value === '#' ? null : changeOrder(`${value}`)
          }
        >
          <Option value="#"> Sort By: </Option>
          <Option value="UserName">UserName</Option>
          <Option value="FirstName">FirstName</Option>
          <Option value="LastName">LastName</Option>
          <Option value="Gender">Gender</Option>
          <Option value="PaymentMethod">Payment Method</Option>
        </Sort>
      </SearchFieldContainer>
    </>
  );
};

export default SearchField;
