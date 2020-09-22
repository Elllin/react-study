import React, { memo } from 'react';
import PropTypes from 'prop-types';

import HelpBubble from './helpBubble/HelpBubble';

import styled from 'styled-components';

function BoxTemplate({
  children,
  title,
  required,
  requiredSign,
  isHelp,
  warningMessage,
  validation,
  ...props
}) {
  return (
    <Wrap>
      <Title {...props}>
        {required && <Required>{requiredSign}</Required>}
        <span>{title}</span>
        {warningMessage && (
          <WarningMessage validation={validation}>{warningMessage}</WarningMessage>
        )}
        {isHelp && <HelpBubble />}
      </Title>
      {children}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  margin-bottom: 4.4rem;
`;

const Title = styled.label`
  display: flex;
  margin-bottom: ${({ far }) => (far ? '1.5rem' : '1.3rem')};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.03rem;
`;

const Required = styled.span`
  margin-right: 0.3rem;
  color: ${({ theme }) => theme.requiredColor};
`;

const WarningMessage = styled.span`
  color: ${({ theme, validation }) => (validation ? '#000' : theme.warningColor)};
  margin-left: 0.7rem;
`;

BoxTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool,
  requiredSign: PropTypes.string,
  isHelp: PropTypes.bool,
  warningMessage: PropTypes.string,
  validation: PropTypes.bool,
};

BoxTemplate.defaultProps = {
  required: true,
  requiredSign: '*',
  isHelp: false,
  warningMessage: null,
  validation: null,
};

export default memo(BoxTemplate);
