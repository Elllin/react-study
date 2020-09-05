import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import createStudy from '../constants/constants';

import TagItem from './tagItem/TagItem';

import styled from 'styled-components';
import { InputBox } from 'style/CustomStyle';

function Hashtag({ register, setValue }) {
  const {
    hashtag: { placeholder, description },
  } = createStudy;

  const tagId = useRef(1);
  const [hashtag, setHashtag] = useState('');
  const [hashtags, setHashtags] = useState([]);

  const onChangeHashtag = ({ target }) => {
    const { value } = target;
    setHashtag(value);

    if (value.endsWith(',') && value.length > 0) {
      let text = value.slice(0, -1);
      text = `#${text}`;

      const newhashTag = { id: tagId.current, text };
      setHashtags(hashtags.concat([newhashTag]));
      setHashtag('');

      tagId.current++;
    }
  };

  const removeHashtag = ({ target }) => {
    const { tagId } = target.dataset;
    const removedTags = hashtags.filter((tag) => tag.id !== parseInt(tagId));
    setHashtags(removedTags);
  };

  useEffect(() => {
    const textArr = hashtags.map((tag) => tag.text.slice(1));

    setValue(`hashtag`, textArr);
  }, [hashtags, setValue]);

  return (
    <>
      <InputBox
        type="text"
        id="hashtag"
        name="hashtag"
        placeholder={placeholder}
        value={hashtag}
        ref={() => register({ name: 'hashtag' })}
        onChange={onChangeHashtag}
      />
      <Description>{description}</Description>
      <TagContainer>
        {hashtags.map((tag) => {
          const { id, text } = tag;
          return <TagItem key={id} id={id} text={text} onClick={removeHashtag} />;
        })}
      </TagContainer>
    </>
  );
}

const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 1.2rem;
  /* min-height: 30px; */
`;

const Description = styled.span`
  display: inline-block;
  margin-top: 1.2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.03rem;
  color: #5e5e5e;
`;

Hashtag.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Hashtag;
