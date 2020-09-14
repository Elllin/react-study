import React, { useState, memo } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';

import styled, { css } from 'styled-components';
import { InputBox, BorderRadius2, Layout } from 'style/CustomStyle';
import { TiArrowRight } from 'react-icons/ti';
import { FaRegCalendarCheck } from 'react-icons/fa';

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

const variables = css`
  --mainColor: #fd5e5c;
`;

const CommonStyle = css`
  border-top: solid 0.06rem var(--mainColor);
  border-bottom: solid 0.06rem var(--mainColor);
  background: none;
`;

const Wrap = styled.div`
  ${variables}
  position: relative;
  font-family: ${({ theme }) => theme.mainFont};

  .DateRangePickerInput {
    width: 57rem;
    height: 5rem;
    ${Layout}
    justify-content: space-around;
    ${BorderRadius2};
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

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background-color: var(--mainColor);
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    border-radius: 1.35rem;
    -webkit-border-radius: 1.35rem;
    -moz-border-radius: 1.35rem;
    ${CommonStyle}
    color: var(--mainColor);
  }

  .CalendarDay__selected_span {
    ${CommonStyle}
    color: #000;
  }

  .DayPickerNavigation_leftButton__horizontalDefault,
  .DayPickerNavigation_rightButton__horizontalDefault {
    left: 8rem;
    padding: 0.7rem;
    svg {
      fill: #232323;
      height: 1.1rem;
    }
  }
`;

const DateArrow = styled(TiArrowRight)`
  font-size: 2.3rem;
`;

const CalendarIcon = styled(FaRegCalendarCheck)`
  font-size: 1.9rem;
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

export default memo(DatePicker);
