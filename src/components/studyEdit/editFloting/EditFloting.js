import React from 'react';
import FlotingTemplate from 'components/common/flotingTemplate/FlotingTemplate';
import MainButton from 'components/common/mainButton/MainButton';

function EditFloting() {
  return (
    <FlotingTemplate small>
      <MainButton fontSize="19px" width="32.6rem" height="5.5rem" radius="6px" margin-top="2.8rem">
        수정 완료
      </MainButton>
    </FlotingTemplate>
  );
}

export default EditFloting;
