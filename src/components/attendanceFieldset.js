import React from 'react';
import PropTypes from 'prop-types';
import Select from "./select";
import moment from "moment";

const AttendanceFieldset = ({label, date, value: {emotion, isComing, amount}, onChange}) => {
  const formattedDate = moment(date).format('dddd [the] Do [of] MMMM YYYY');
  return <div>
    On {formattedDate}, we are
    <Select options={['excited', 'sad']} value={emotion} onChange={onChange.bind(this, 'emotion')} />
    to say that we
    <Select options={new Map([[true, 'will be there'], [false, 'will NOT be there']])} value={isComing}
            onChange={onChange.bind(this, 'isComing')} />
    for the {label} celebration.
    {isComing && <span>
      Just to clarify,
      <Select options={[1, 2, 3, 4, 5]} value={amount} onChange={onChange.bind(this, 'amount')} />
      will be attending.
    </span>}
  </div>
};

AttendanceFieldset.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  value: PropTypes.shape({
    emotion: PropTypes.string,
    isComing: PropTypes.oneOf([true, false, '']),
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default AttendanceFieldset;
