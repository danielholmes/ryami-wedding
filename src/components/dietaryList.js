import React from 'react';
import PropTypes from 'prop-types';
import TextField from "./textfield";

const DietaryList = ({value, onChange}) => {
  const createRowChangeHandler = index =>
    newRowValue => {
      const newValue = value.slice();
      newValue[index] = newRowValue;
      onChange(newValue);
    };

  const createRowRemoveHandler = index => () => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    onChange(newValue);
  };

  return <div>
    <ul>
      {value.map((subValue, i) =>
        <li key={i}>
          <TextField help="Johnson can't eat..." value={subValue} onChange={createRowChangeHandler(i)} />
          {i > 0 && <a role="button" onClick={createRowRemoveHandler(i)}>[X]</a>}
        </li>)}
    </ul>
    <a role="button" onClick={() => onChange(value.concat(['']))}>Add requirement for another person</a>
  </div>;
};

DietaryList.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default DietaryList;
