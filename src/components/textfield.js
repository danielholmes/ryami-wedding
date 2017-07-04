import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({value, help, onChange}) => {
  return <input type="text" required placeholder={help} value={value} onChange={e => onChange(e.target.value)} />;
};

TextField.propTypes = {
  help: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextField;
