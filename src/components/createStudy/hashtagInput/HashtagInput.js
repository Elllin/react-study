import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import createStudy from '../constants/constants';

import TagContainer from './tagContainer/TagContainer';

import { InputBox, Description } from 'style/CustomStyle';

function HashtagInput({ register, setValue, name, maxCount, key, condition }) {
  const {
    hashtag: { placeholder, description, maxLength },
  } = createStudy;

  const tagId = useRef(1);
  const [hashtag, setHashtag] = useState('');
  const [hashtags, setHashtags] = useState([]);

  const onChangeHashtag = useCallback(({ target }) => {
    const { value } = target;
    setHashtag(value);
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      if (hashtags.length >= maxCount) return setHashtag('');

      const value = e.target.value.trim();

      if ((e.key === ' ' || e.key === ',') && value.length > 0) {
        const text = `#${value}`;
        const newhashTag = { id: tagId.current, text };

        setHashtags(hashtags.concat([newhashTag]));
        tagId.current++;
      }
    },
    [hashtags, maxCount],
  );

  useEffect(() => {
    setHashtag('');
  }, [hashtags]);

  const removeHashtag = useCallback(
    ({ target }) => {
      const { tagId } = target.dataset;
      const removedTags = hashtags.filter((tag) => tag.id !== parseInt(tagId));
      setHashtags(removedTags);
    },
    [hashtags],
  );

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
      <TagContainer tags={hashtags} onClick={removeHashtag} />
    </>
  );
}

HashtagInput.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  key: PropTypes.string,
  maxCount: PropTypes.number,
};

HashtagInput.defaultProps = {
  key: ' ',
  maxCount: 3,
};

export default HashtagInput;
