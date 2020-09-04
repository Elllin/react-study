import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import createStudy from './constants/constants';

import Hashtag from './hashtag/Hashtag';
import BoxWrap from './boxWrap/BoxWrap';
import SelectBox from './selectBox/SelectBox';
import RadioBox from './radioBox/RadioBox';

import styled from 'styled-components';
import { InputBox } from 'style/CustomStyle';
import FormWrap from './FormWrap';

function CreateStudy({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    hashtag: '',
    is_deposit: '',
  });

  const [hashtag, setHashtag] = useState('');
  const [hashtags, setHashtags] = useState([]);

  // const onSubmit = (data) => {
  //   const formData = JSON.stringify(data);
  //   console.log(formData);
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: formData,
  //   }).then((data) => console.log(data));
  // };
  // const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const tagId = useRef(1);

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

  const {
    groupName,
    groupIntroduction,
    locationOption,
    categoryOption,
    hashtag: { placeholder, description },
  } = createStudy;
  return (
    <FormWrap onSubmit={onSubmit} handleSubmit={handleSubmit}>
      <BoxLayout>
        <BoxWrap title="지역" htmlFor="location">
          <SelectBox optionItems={locationOption} name="location" ref={register} required />
        </BoxWrap>
        <BoxWrap title="그룹 카테고리" htmlFor="category">
          <SelectBox optionItems={categoryOption} name="category" ref={register} required />
        </BoxWrap>
      </BoxLayout>
      <BoxWrap title="예치금 설정을 하시나요?" as="div" far>
        <RadioBox id="yes" text="네. 할래요!" name="is_deposit" ref={register} required />
        <RadioBox id="no" text="아니요. 괜찮아요!" name="is_deposit" ref={register} required />
      </BoxWrap>
      <BoxWrap title="그룹 이름" htmlFor="title">
        <InputBox
          type="text"
          id="title"
          name="title"
          ref={register}
          required
          placeholder={groupName}
        />
      </BoxWrap>
      <BoxWrap title="그룹 소개" htmlFor="description">
        <TextArea
          as="textarea"
          id="description"
          name="description"
          ref={register}
          required
          placeholder={groupIntroduction}
        ></TextArea>
      </BoxWrap>
      {/* <BoxWrap>
              <Title htmlFor="email">
                이메일 <Required>*</Required>
              </Title>
              <InputBox type="email" id="email" name="email" ref={register} required />
            </BoxWrap> */}

      <BoxWrap title="그룹 해시태그" htmlFor="hashtag">
        <InputBox
          type="text"
          id="hashtag"
          name="hashtag"
          required
          placeholder={placeholder}
          value={hashtag}
          onChange={onChangeHashtag}
        />
        <Description>{description}</Description>
        <TagContainer>
          {hashtags.map((tag) => (
            <Hashtag key={tag.id} tag={tag} onClick={removeHashtag} />
          ))}
        </TagContainer>
      </BoxWrap>

      {/* <BoxWrap>
            <Title htmlFor="image">썸네일</Title>
            <InputBox type="file" id="image" name="image" ref={register} />
          </BoxWrap> */}

      <ButtonWrap>
        <button type="submit">그룹 개설하기</button>
      </ButtonWrap>
    </FormWrap>
  );
}

const TextArea = styled(InputBox)`
  width: 100%;
  height: 24.4rem;
  padding: 1rem 2rem;
`;

const BoxLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3rem;
`;

const Description = styled.span`
  display: inline-block;
  margin-top: 1.2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.03rem;
  color: #5e5e5e;
`;

const ButtonWrap = styled.div`
  margin-top: 1.1rem;

  button {
    width: 100%;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.mainColor};
    height: 5.6rem;
    text-shadow: ${({ theme }) => theme.textShadow};
    font-size: 2rem;
    font-weight: bold;
    font-family: ${({ theme }) => theme.formFont};
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 1.2rem;
  /* min-height: 30px; */
`;

export default CreateStudy;
