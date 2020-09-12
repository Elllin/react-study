import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import createStudy from '../constants/constants';

import TagItem from './tagItem/TagItem';

import styled from 'styled-components';
import { InputBox, Description } from 'style/CustomStyle';

function Hashtag({ register, setValue, name, maxCount, key }) {
  const {
    hashtag: { placeholder, description, maxLength },
  } = createStudy;

  const tagId = useRef(1);
  const [hashtag, setHashtag] = useState('');
  const [hashtags, setHashtags] = useState([]);

  const onChangeHashtag = ({ target }) => {
    const { value } = target;
    setHashtag(value);
  };

  const onKeyDown = (e) => {
    if (hashtags.length >= maxCount) return setHashtag('');

    const value = e.target.value.trim();

    if (e.key === key && value.length > 0) {
      const text = `#${value}`;
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

    setValue(name, textArr);
  }, [hashtags, setValue, name]);

  return (
    <>
      <InputBox
        type="text"
        id={name}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        value={hashtag}
        ref={() => register({ name })}
        onChange={onChangeHashtag}
        onKeyDown={onKeyDown}
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

// replace(/ /gi, "-")
// 공백을 -로 바꾸기

const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

Hashtag.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  key: PropTypes.string,
  maxCount: PropTypes.number,
};

Hashtag.defaultProps = {
  key: ' ',
  maxCount: 3,
};

export default Hashtag;
