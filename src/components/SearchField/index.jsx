import React from 'react';
import { SearchFieldContainer, SearchInput, Sort, Option } from './SearchElements';

const SearchField = ({ placeholder, handleChange, changeOrder }) => {
  return (
    <>
      <SearchFieldContainer>
        <SearchInput
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Sort>
          <Option value="#"> Sort By: </Option>
          <Option value="UserName" onClick={() => changeOrder('UserName')}>
            UserName
          </Option>
          <Option value="FirstName" onClick={() => changeOrder('FirstName')}>
            FirstName
          </Option>
          <Option value="LastName" onClick={() => changeOrder('LastName')}>
            LastName
          </Option>
          <Option value="Gender" onClick={() => changeOrder('Gender')}>
            Gender
          </Option>
          <Option
            value="PaymentMethod"
            onClick={() => changeOrder('PaymentMethod')}
          >
            Payment Method
          </Option>
        </Sort>
      </SearchFieldContainer>
    </>
  );
};

export default SearchField;
