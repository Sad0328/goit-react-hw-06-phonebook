
import React from 'react';
import { Div, Label, Input } from './Filter.styled';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const filterInputId = nanoid();

// Компонент фильтрации контактов
const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  // Обработчик изменения значения фильтра
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={onChange}
          id={filterInputId}
        />
      </Label>
    </Div>
  );
};

export default Filter;




// import React from 'react';
// import PropTypes from 'prop-types';
// import { Div, Label, Input } from './Filter.styled';

// // Компонент фильтрации контактов
// function Filter({ value, onChangeFilter }) {
//   return (
//     <Div>
//       <Label>
//         Find contacts by name
//         <Input type="text" value={value} onChange={onChangeFilter} />
//       </Label>
//     </Div>
//   );
// }

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };

// export default Filter;
