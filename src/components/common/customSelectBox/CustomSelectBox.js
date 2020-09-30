import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CustomSelectOption from './customSelectOption/CustomSelectOption';
import RadioBox from '../radioBox/RadioBox';

import { InputBox, defaultLayout, borderRadius } from 'style/CustomStyle';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

function CustomSelectBox({ optionItems, name, defaultText, register, defaultColor, ...props }) {
  // defaultColor수정 하기!

  return (
    <Wrap>
      <OptionContainer>
        {optionItems.map((text) => (
          <RadioBox id={text} text={text} name={name} value={text} key={text} register={register} />
        ))}
      </OptionContainer>
      <SelectWrap>
        <SelectBox as="div" defaultValue="" id={name} name={name} {...props}>
          카테고리
          {/* {defaultText && (
          <DefaultOption value="" disabled hidden defaultColor={defaultColor}>
            {defaultText}
          </DefaultOption>
        )} */}
          {/* {optionItems.map((text) => (
          <CustomSelectOption value={text} key={text}>
            {text}
          </CustomSelectOption>
        ))} */}
          <SelectArrow>
            <BsChevronDown />
          </SelectArrow>
        </SelectBox>
      </SelectWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  flex-direction: column;

  ${borderRadius(`0.2rem`)};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35);
  border: solid 1px #cbcbcb;
  background-color: #ffffff;
`;

const SelectWrap = styled.div`
  /* position: relative; */
  display: inline-block;
  width: 100%;

  /* max-height: 0; */
  /* opacity: 0; */

  /* select {
    display: inline-block;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  } */
  /* &::-ms-expand {
    display: none;
  } */
`;

const SelectBox = styled(InputBox)`
  ${defaultLayout}
  justify-content: space-between;
  order: 0;
`;

const SelectArrow = styled.div`
  /* position: absolute; */
  /* margin-top: -1rem; */
  /* top: 50%; */
  /* right: 1.6rem; */
  color: #787878;
  font-size: 2.1rem;
  pointer-events: none;
`;

const DefaultOption = styled.option`
  color: ${({ defaultColor }) => defaultColor};
`;

const OptionContainer = styled.div`
  ${defaultLayout}
  align-items: start;
  flex-direction: column;
  margin: 2rem 2.3rem 3rem;
  order: 1;
  div + div {
    margin-top: 2rem;
  }
`;

CustomSelectBox.propTypes = {
  optionItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  defaultText: PropTypes.string,
  defaultColor: PropTypes.string,
};
CustomSelectBox.defaultProps = {
  register: null,
  defaultText: null,
  defaultColor: '#000',
};

export default memo(CustomSelectBox);

// import React, { memo } from 'react';
// import PropTypes from 'prop-types';

// import CustomSelectOption from './customSelectOption/CustomSelectOption';

// import { InputBox } from 'style/CustomStyle';
// import styled from 'styled-components';
// import { BsChevronDown } from 'react-icons/bs';

// function CustomSelectBox({ optionItems, name, defaultText, register, defaultColor, ...props }) {
//   // defaultColor수정 하기!

//   return (
//     <SelectWrap>
//       <InputBox as="select" defaultValue="" id={name} name={name} ref={register} {...props}>
//         {defaultText && (
//           <DefaultOption value="" disabled hidden defaultColor={defaultColor}>
//             {defaultText}
//           </DefaultOption>
//         )}
//         {optionItems.map((text) => (
//           <option value={text} key={text}>
//             {text}
//           </option>
//         ))}
//       </InputBox>
//       <SelectArrow>
//         <BsChevronDown />
//       </SelectArrow>
//     </SelectWrap>
//   );
// }

// const SelectWrap = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 100%;

//   select {
//     display: inline-block;
//     appearance: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     cursor: pointer;
//   }
//   &::-ms-expand {
//     display: none;
//   }
// `;

// const SelectArrow = styled.div`
//   position: absolute;
//   margin-top: -1rem;
//   top: 50%;
//   right: 1.6rem;
//   color: #787878;
//   font-size: 2.1rem;
//   pointer-events: none;
// `;

// const DefaultOption = styled.option`
//   color: ${({ defaultColor }) => defaultColor};
// `;

// CustomSelectBox.propTypes = {
//   optionItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
//     .isRequired,
//   name: PropTypes.string.isRequired,
//   register: PropTypes.func,
//   defaultText: PropTypes.string,
//   defaultColor: PropTypes.string,
// };
// CustomSelectBox.defaultProps = {
//   register: null,
//   defaultText: null,
//   defaultColor: '#000',
// };

// export default memo(CustomSelectBox);
