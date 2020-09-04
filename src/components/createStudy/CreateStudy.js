import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import createStudy from './constants/constants';

import Hashtag from './hastag/Hashtag';
import BoxWrap from './boxWrap/BoxWrap';
import SelectBox from './selectBox/SelectBox';

import styled, { css } from 'styled-components';
import { Layout, InputBox } from 'style/CustomStyle';

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
    <Wrap>
      <h1>DO IT DO IT</h1>
      <StudyForm action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <legend>스터디 그룹 개설하기</legend>
            <RequiredMessage>* 는 필수 입력 사항입니다.</RequiredMessage>
            <BoxLayout>
              <BoxWrap title="지역" htmlFor="location">
                <SelectBox optionItems={locationOption} name="location" ref={register} required />
              </BoxWrap>
              <BoxWrap title="그룹 카테고리" htmlFor="category">
                <SelectBox optionItems={categoryOption} name="category" ref={register} required />
              </BoxWrap>
            </BoxLayout>
            <BoxWrap title="예치금 설정을 하시나요?" as="div" far>
              <RadioWrap>
                <input type="radio" id="yes" name="is_deposit" value="예" ref={register} required />
                <label htmlFor="yes">네. 할래요!</label>
              </RadioWrap>
              <RadioWrap>
                <input
                  type="radio"
                  id="no"
                  name="is_deposit"
                  value="아니오"
                  ref={register}
                  required
                />
                <label htmlFor="no">아니요. 괜찮아요!</label>
              </RadioWrap>
            </BoxWrap>
            <BoxWrap title="그룹 이름" htmlFor="title">
              <Input
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
              <Input type="email" id="email" name="email" ref={register} required />
            </BoxWrap> */}

            <BoxWrap title="그룹 해시태그" htmlFor="hashtag">
              <Input
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
            <Input type="file" id="image" name="image" ref={register} />
          </BoxWrap> */}

            <ButtonWrap>
              <button type="submit">그룹 개설하기</button>
            </ButtonWrap>
          </div>
        </fieldset>
      </StudyForm>
    </Wrap>
  );
}

const Wrap = styled.main`
  margin: 9rem auto;
  width: 57rem;
  font-family: AppleSDGothicNeo, sans-serif;
  h1 {
    margin-bottom: 1.3rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 900;
  }
`;

const StudyForm = styled.form`
  legend {
    margin-bottom: 4.4rem;
    font-family: NanumSquareRoundOTFEB, sans-serif;
    font-size: 3.2rem;
    letter-spacing: -0.06rem;
    text-align: center;
  }
  fieldset > div {
    ${Layout}
    flex-direction: column;
    align-items: normal;
  }
`;

const RequiredMessage = styled.span`
  margin: 0 0 3rem 0.3rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.requiredColor};
`;

const Input = styled.input`
  padding: 0 1.6rem;
  width: 100%;
  height: 5rem;
  border-radius: 2px;
  border: solid 1px #939393;
  font-size: 1.6rem;
  font-family: AppleSDGothicNeo, sans-serif;

  &::placeholder {
    letter-spacing: -0.03rem;
    color: #9f9f9f;
  }
`;

const TextArea = styled(Input)`
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

const RadioWrap = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;

  & + & {
    margin-left: 17.9rem;
  }

  [type='radio'] {
    appearance: none;
    margin: 0;
    margin-right: 3.8rem;
  }

  [type='radio'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    width: 2.2rem;
    height: 2.2rem;
    text-align: center;
    background: #fff;
    border: 0.1rem solid #979797;
    border-radius: 0.2rem;
    cursor: pointer;
    box-sizing: border-box;
  }
  [type='radio']:not(:checked) + label:after,
  [type='radio']:checked + label:after {
    content: '';
    position: absolute;
    left: 0.44rem;
    top: 0.44rem;
    width: 1.3rem;
    height: 1.3rem;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border-radius: 0.2rem;
    background-color: #3f97f4;
  }

  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  [type='radio'] + label {
    font-size: 2rem;
    letter-spacing: -0.03rem;
    cursor: pointer;
  }
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
    font-family: AppleSDGothicNeo;
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
