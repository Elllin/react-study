import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';

import { Controller } from 'react-hook-form';

import styled from 'styled-components';
import { InputBox } from 'style/CustomStyle';
import { TiArrowRight } from 'react-icons/ti';
import { FaRegCalendarCheck } from 'react-icons/fa';
// import { BiCalendarCheck } from 'react-icons/bi';

function DatePicker({ register, setValue }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();
  moment.locale('ko');

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    const formatedStarData = moment(startDate).format('YYYY-MM-DD');
    const formatedEndData = moment(endDate).format('YYYY-MM-DD');
    setValue('duration', { starDate: formatedStarData, endDate: formatedEndData });
  };

  const onFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  return (
    <Wrap>
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={startDate}
        endDate={endDate}
        onDatesChange={onDatesChange}
        endDatePlaceholderText=""
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        ref={() => register('duration')}
        // required={true}
        hideKeyboardShortcutsPanel
        showDefaultInputIcon
        inputIconPosition="after"
        showClearDates
        block
        customArrowIcon={<DateArrow />}
        customInputIcon={<CalendarIcon />}
      />
      <Cover startdate={startDate} as="div">
        미정
      </Cover>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  .DateRangePickerInput {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 570px;
    height: 50px;
    border-radius: 2px;
    border: solid 1px #939393;
  }
  .DateRangePickerInput_clearDates_default:focus,
  .DateRangePickerInput_clearDates_default:hover {
    background: none;
  }
  .DateInput_fang {
    /* top: 18px;
    left: 477px;
    transform: rotate(-92deg); */
  }
  .DayPicker_transitionContainer {
    width: 288px;
    height: 243px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);
    border: solid 1px #cbcbcb;
    background-color: #ffffff;
  }
  .CalendarDay__default {
    border: none;
  }
  .DayPickerNavigation_button__default {
    border: none;
  }
`;

const DateArrow = styled(TiArrowRight)`
  font-size: 2.3rem;
`;

const CalendarIcon = styled(FaRegCalendarCheck)`
  font-size: 1.9rem;
  color: #707070;
`;

const DatePickerInputWrap = styled(InputBox)`
  /* position: absolute;
  width: 96%;
  height: 100%;
  top: 4%;
  border-radius: 10px;
  cursor: pointer; */
`;

const Cover = styled(InputBox)`
  display: ${({ startdate }) => (startdate ? 'none' : 'inline-flex')};
  align-items: center;
  position: absolute;
  top: 0;
  width: 50%;
  background: #fff;
  border-right: none;
  font-size: 1.6rem;
  letter-spacing: -0.3px;
`;

export default DatePicker;
