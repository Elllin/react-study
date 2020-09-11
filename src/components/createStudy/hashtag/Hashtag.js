import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import createStudy from '../constants/constants';

import TagItem from './tagItem/TagItem';

import styled from 'styled-components';
import { InputBox, Description } from 'style/CustomStyle';

function Hashtag({ register, setValue, name }) {
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

    setValue(name, textArr);
  }, [hashtags, setValue, name]);

  return (
    <>
      <InputBox
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={hashtag}
        ref={() => register({ name })}
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

// replace(/ /gi, "-")
// 공백을 -로 바꾸기

const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 1.2rem;
  /* min-height: 30px; */
`;

Hashtag.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Hashtag;
