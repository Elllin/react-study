import React, { useEffect, useState, useRef, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import createStudy from '../constants/constants';

import TagContainer from 'components/common/tagContainer/TagContainer';

import { InputBox, HelpMessage } from 'style/CustomStyle';

function HashtagInput({
  register,
  setValue,
  name,
  maxCount,
  isTagCreation,
  defaultValue,
  ...props
}) {
  const {
    hashtag: { placeholder, helpMessage, maxLength },
  } = createStudy;
  console.log(defaultValue);
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

      if (isTagCreation(e, value)) {
        const newhashTag = { id: tagId.current, text: value };
        setHashtags(hashtags.concat([newhashTag]));

        tagId.current++;
      }
    },
    [hashtags, maxCount, isTagCreation],
  );

  useEffect(() => {
    setHashtag('');
  }, [hashtags]);

  useEffect(() => {
    if (defaultValue) {
      const defaultTags = defaultValue.map((tag) => ({ id: tag.id, text: tag.word }));
      setHashtags(defaultTags);
    }
  }, [defaultValue]);

  const removeHashtag = useCallback(
    ({ target }) => {
      const { tagId } = target.dataset;
      const removedTags = hashtags.filter((tag) => tag.id !== parseInt(tagId));
      setHashtags(removedTags);
    },
    [hashtags],
  );

  useEffect(() => {
    const textArr = hashtags.map((tag) => tag.text);
    console.log(textArr);
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
      <HelpMessage>{helpMessage}</HelpMessage>
      <TagContainer tags={hashtags} onClick={removeHashtag} {...props} />
    </>
  );
}

HashtagInput.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isTagCreation: PropTypes.func.isRequired,
  key: PropTypes.string,
  maxCount: PropTypes.number,
  defaultValue: PropTypes.array,
};

HashtagInput.defaultProps = {
  key: ' ',
  maxCount: 3,
  defaultValue: null,
};

export default memo(HashtagInput);
