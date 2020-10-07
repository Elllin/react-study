import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function CharacterCounter({ length, maxLength }) {
  return (
    <Wrap>
      <span>{length}</span>/{maxLength}
    </Wrap>
  );
}

const Wrap = styled.div`
  /* display: inline-block; */
  margin-top: 0.8rem;
  text-align: end;
  font-size: 1.4rem;
  span {
    color: ${({ theme }) => theme.requiredColor};
  }
`;

CharacterCounter.propTypes = {
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default memo(CharacterCounter);
