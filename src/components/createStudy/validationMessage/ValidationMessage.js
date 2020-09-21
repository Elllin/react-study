import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { RiCheckLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';

import styled from 'styled-components';
import { defaultLayout } from 'style/CustomStyle';

function ValidationMessage({ validation, length, passText, failText }) {
  return (
    <Wrap validation={validation} length={length}>
      <StatusIcon>{validation ? <RiCheckLine /> : <FiX />}</StatusIcon>
      <span>{validation ? passText : failText}</span>
    </Wrap>
  );
}

const Wrap = styled.div`
  ${defaultLayout}
  position: absolute;
  top: 4rem;
  right: 1.3rem;
  margin-top: 0.7rem;
  font-size: 1.6rem;
  color: #cacaca;
  color: ${({ validation, length, theme }) => {
    if (length && !validation) return theme.warningColor;
    else if (length && validation) return theme.successColor;
  }};
  span + span {
    margin-left: 0.2rem;
  }
`;

const StatusIcon = styled.span`
  font-size: 2.1rem;
  height: 2rem;
`;

ValidationMessage.propTypes = {
  validation: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
  passText: PropTypes.string,
  failText: PropTypes.string,
};

ValidationMessage.defaultProps = {
  passText: 'Do',
  failText: "Don't",
};

export default memo(ValidationMessage);
