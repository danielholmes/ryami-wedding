import React from 'react';
import PropTypes from 'prop-types';
import Select from "./select";

const AttendanceFieldset = ({label, showChildren, date, value: {emotion, isComing, number, numberOfChildren}, onChange}) => {
  return <div className="rsvp-section">
    On {date}, we are <Select options={['excited', 'sad']} value={emotion} onChange={onChange.bind(this, 'emotion')} /> to
    say that we <Select options={new Map([[true, 'will be there'], [false, 'will NOT be there']])} value={isComing}
                        onChange={onChange.bind(this, 'isComing')} /> for the {label} celebration. {isComing && <span>
    Just to clarify, <Select options={[1, 2, 3, 4, 5]} value={number} onChange={onChange.bind(this, 'number')} /> {showChildren ? 'adults' : 'of us'}
    {showChildren && <span> and <Select options={[0, 1, 2, 3, 4]} value={numberOfChildren}
                                        onChange={onChange.bind(this, 'numberOfChildren')} /> children</span>} will be attending.</span>}
  </div>
};

AttendanceFieldset.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  showChildren: PropTypes.bool,
  value: PropTypes.shape({
    emotion: PropTypes.string,
    isComing: PropTypes.oneOf([true, false, '']),
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    numberOfChildren: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

AttendanceFieldset.defaultProps = {
  showChildren: false
};

export default AttendanceFieldset;
