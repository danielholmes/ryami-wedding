/* global Map */
import React from 'react';
import PropTypes from 'prop-types';

const Select = ({options, value, onChange}) => {
  let optionsMap;
  if (options.constructor === Array) {
    optionsMap = new Map(options.map(o => [o, o]));
  } else {
    optionsMap = options;
  }

  const onSelectChange = e => {
    const rawValue = e.target.value;
    const foundKey = Array.from(optionsMap.keys()).find(key => key.toString() === rawValue);
    if (foundKey === undefined) {
      onChange(rawValue);
      return;
    }
    onChange(foundKey);
  };

  return <select required value={value} onChange={onSelectChange}>
    <option value="">Please select</option>
    {Array.from(optionsMap.entries()).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
  </select>;
};

Select.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    PropTypes.instanceOf(Map)
  ]).isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default Select;
