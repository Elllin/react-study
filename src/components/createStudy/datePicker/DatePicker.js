import React, { useState, memo } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import PropTypes from 'prop-types';

import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';

import styled, { css } from 'styled-components';
import { InputBox, borderRadius, defaultLayout } from 'style/CustomStyle';
import { TiArrowRight } from 'react-icons/ti';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { MdReplay } from 'react-icons/md';

function DatePicker({
  register,
  setValue,
  name,
  startDateName,
  endDateName,
  dateFormat,
  coverText,
}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();
  moment.locale('ko');

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    const formatedStarData = moment(startDate).format(dateFormat);
    const formatedEndData = moment(endDate).format(dateFormat);
    setValue(name, { [startDateName]: formatedStarData, [endDateName]: formatedEndData });
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
        ref={() => register(name)}
        hideKeyboardShortcutsPanel
        showDefaultInputIcon
        inputIconPosition="after"
        showClearDates
        block
        customArrowIcon={<DateArrow />}
        customInputIcon={<CalendarIcon />}
        customCloseIcon={<CloseIcon />}
        displayFormat="YYYY년 M월 D일 (dd)"
      />
      {coverText && (
        <Cover startdate={startDate} as="div">
          {coverText}
        </Cover>
      )}
    </Wrap>
  );
}

const variables = css`
  --mainColor: #fd5e5c;
`;

const commonStyle = css`
  border-top: solid 0.06rem var(--mainColor);
  border-bottom: solid 0.06rem var(--mainColor);
  width: 110%;
  background: none;
`;

const calendarDayCommonStyle = css`
  height: 3.7rem;
  content: '';
  position: absolute;
  top: 0;
  width: 2rem;
  border-top: 1px solid var(--mainColor);
  border-bottom: 1px solid var(--mainColor);
`;

const leftAndRightButton = css`
  padding: 0.7rem;
  svg {
    fill: #232323;
    height: 1.1rem;
  }
`;

const Wrap = styled.div`
  ${variables}
  position: relative;
  font-family: ${({ theme }) => theme.mainFont};

  .DateRangePickerInput {
    ${defaultLayout}
    padding-right: 15rem;
    width: 57rem;
    height: 5rem;
    justify-content: space-around;
    ${borderRadius(`0.2rem`)};
    border: solid 1px #939393;
  }
  .DateRangePickerInput_clearDates_default:focus,
  .DateRangePickerInput_clearDates_default:hover {
    background: none;
  }

  .DayPicker_transitionContainer {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);
    -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);
    -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.36);

    border: solid 1px #cbcbcb;
    background-color: #fff;
  }
  .CalendarDay__default {
    border: none;
    vertical-align: middle;
  }
  .DayPickerNavigation_button__default {
    border: none;
  }
  .CalendarMonth_caption {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
  }

  .DayPicker_weekHeader_ul {
    padding-bottom: 1rem;
    font-size: 1.3rem;
    color: #000;
    border-bottom: solid 1px #cbcbcb;
  }
  .DayPicker_weekHeader_li {
    &:first-child {
      color: #ef505f;
    }
    &:last-child {
      color: #2b73db;
    }
  }
  table {
    top: 1.3rem;
    position: relative;
  }
  td {
    font-size: 1.4rem;
  }
  .CalendarDay {
    outline: none;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    position: relative;
    background-color: var(--mainColor);
    /* ${borderRadius('50%')}; */
  }

  .CalendarDay__default:hover {
    /* ${borderRadius('50%')}; */
  }

  /* .CalendarDay__selected_start:after {
    ${calendarDayCommonStyle}
    left: 2rem;
  }

  .CalendarDay__selected_end:before {
    ${calendarDayCommonStyle}
    right: 2rem;
  } */

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    ${borderRadius('1.35rem')};
    ${commonStyle};
    color: var(--mainColor);
  }

  .DateRangePickerInput_calendarIcon {
    position: absolute;
    right: 0;
  }

  .DateRangePickerInput_clearDates {
    right: 3.1rem;
  }

  .CalendarDay__selected_span {
    ${commonStyle}
    color: #000;
    position: relative;
  }

  .DayPickerNavigation_leftButton__horizontalDefault {
    left: 8rem;
    ${leftAndRightButton}
  }

  .DayPickerNavigation_rightButton__horizontalDefault {
    right: 8rem;
    ${leftAndRightButton}
  }
  .DateInput_input__focused {
    border-bottom: 2px solid #000;
  }
  .DateInput_input {
    font-size: 1.6rem;
    letter-spacing: -0.03rem;
    color: #000;
  }
  .DateInput {
    width: 180px;
  }
`;

const DateArrow = styled(TiArrowRight)`
  font-size: 2.3rem;
`;

const CalendarIcon = styled(FaRegCalendarCheck)`
  font-size: 1.9rem;
  color: #707070;
`;

const CloseIcon = styled(MdReplay)`
  font-size: 2.2rem;
  color: #707070;
`;

const Cover = styled(InputBox)`
  display: ${({ startdate }) => (startdate ? 'none' : 'inline-flex')};
  align-items: center;
  position: absolute;
  top: 0;
  width: 80%;
  background: #fff;
  border-right: none;
  font-size: 1.6rem;
  letter-spacing: -0.03rem;
`;

DatePicker.propTypes = {
  name: PropTypes.string,
  setValue: PropTypes.func,
  register: PropTypes.func,
  startDateName: PropTypes.string,
  endDateName: PropTypes.string,
  dateFormat: PropTypes.string,
  coverText: PropTypes.string,
};

DatePicker.defaultProps = {
  name: null,
  setValue: null,
  register: null,
  startDateName: 'startDate',
  endDateName: 'endDate',
  dateFormat: 'YYYY-MM-DD',
  coverText: null,
};
export default memo(DatePicker);
