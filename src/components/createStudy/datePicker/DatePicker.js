import React from 'react';
import 'react-dates / initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'moment';

function DatePicker() {
  return <DateRangePicker></DateRangePicker>;
}

export default DatePicker;
