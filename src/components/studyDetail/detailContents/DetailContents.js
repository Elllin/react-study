import React from 'react';
import PropTypes from 'prop-types';

import TagItem from 'components/common/tagContainer/tagItem/TagItem';

import styled from 'styled-components';

function DetailContents({
  location,
  category,
  description,
  deposit,
  startDate,
  endDate,
  dDay,
  tags,
}) {
  description.replaceAll('\n', '<br />');
  const getDepositText = (deposit) => (deposit ? '있음' : '없음');
  const depositText = getDepositText(deposit);
  const hashTags = tags.map((tag) => `#${tag.word}`).join(', ');
  return (
    <Wrap>
      <DetailList top>
        <Title>스터디 기간</Title>
        <Description>
          {dDay ? (
            <>
              <TagWrap>
                <TagItem color="red" text={`D-${dDay}`} hash={null} fontWeight="bold" />
              </TagWrap>
              <span>{`${startDate} ~ ${endDate}`}</span>
            </>
          ) : (
            '상시모집'
          )}
        </Description>
      </DetailList>
      <DetailList>
        <Title>그룹 소개</Title>
        <Description>{description}</Description>
      </DetailList>
      <DetailList>
        <Title>상세정보</Title>
        <Description>
          <Information>
            <div>
              <dt>지역:</dt>
              <dd>{location}</dd>
            </div>
            <div>
              <dt>예치금:</dt>
              <dd>{depositText}</dd>
            </div>
            <div>
              <dt>그룹 카테고리:</dt>
              <dd>{category}</dd>
            </div>
            {hashTags && (
              <div>
                <dt>그룹 해시태그:</dt>
                <dd>{hashTags}</dd>
              </div>
            )}
          </Information>
        </Description>
      </DetailList>
    </Wrap>
  );
}

const Wrap = styled.dl`
  width: 65.4rem;
  margin: 0 auto;
`;

const DetailList = styled.div`
  display: grid;
  grid-template-columns: 15.6rem 1fr;
  padding: 3.4rem 0;

  border-top: ${({ top }) => (top ? '0.1rem solid #d1d1d1' : '0.1rem solid #eee')};
`;

const Title = styled.dt`
  padding-top: 0.2rem;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.029rem;
`;

const TagWrap = styled.div`
  margin-right: 1.5rem;
  display: flex;
  height: 3rem;
`;
const Description = styled.dd`
  display: flex;
  white-space: break-spaces;
  line-height: 2.5rem;
  font-size: 1.8rem;
`;

const Information = styled.dl`
  div {
    display: flex;
  }
  dt {
    color: #757575;
    margin-right: 0.8rem;
  }
  div + div {
    margin-top: 1.5rem;
  }
`;

DetailContents.propTypes = {
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deposit: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  dDay: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object),
};

DetailContents.defaultProps = {
  tags: null,
};

export default DetailContents;
