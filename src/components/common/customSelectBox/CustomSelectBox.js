import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CustomSelectOption from './customSelectOption/CustomSelectOption';

import { InputBox } from 'style/CustomStyle';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

function CustomSelectBox({ optionItems, name, defaultText, register, defaultColor, ...props }) {
  // defaultColor수정 하기!

  return (
    <SelectWrap>
      <InputBox as="select" defaultValue="" id={name} name={name} ref={register} {...props}>
        {/* {defaultText && (
          <DefaultOption value="" disabled hidden defaultColor={defaultColor}>
            {defaultText}
          </DefaultOption>
        )} */}
        {optionItems.map((text) => (
          <CustomSelectOption value={text} key={text}>
            {text}
          </CustomSelectOption>
        ))}
      </InputBox>
      <SelectArrow>
        <BsChevronDown />
      </SelectArrow>
    </SelectWrap>
  );
}

const SelectWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  select {
    display: inline-block;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  &::-ms-expand {
    display: none;
  }
`;

const SelectArrow = styled.div`
  position: absolute;
  margin-top: -1rem;
  top: 50%;
  right: 1.6rem;
  color: #787878;
  font-size: 2.1rem;
  pointer-events: none;
`;

const DefaultOption = styled.option`
  color: ${({ defaultColor }) => defaultColor};
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
