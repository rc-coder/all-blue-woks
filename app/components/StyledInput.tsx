'use client';

import styled from 'styled-components';

interface ImageProps {
  readonly img: string;
}

interface InputProps {
  readonly option: string;
  readonly imgurl: string;
  price: string;
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input:checked ~ .imgContainer {
    background-color: #474747;
  }

  & .imgContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    /* color: ${(props) => props.theme.gray}; */
    color: gray;
    box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.09);
    border-radius: 50%;
    cursor: pointer;
    /* margin: 0 10px; */
    height: 60px;
    width: 60px;
    transition: all 0.5s;

    &:hover {
      background: #474747;
      box-shadow: none;
    }
  }
`;

// export const ImgContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${({ selected }) => (selected ? ' #474747' : '#fff')};
//   /* color: ${(props) => props.theme.gray}; */
//   color: gray;
//   box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.09);
//   border-radius: 50%;
//   cursor: pointer;
//   /* margin: 0 10px; */
//   height: 60px;
//   width: 60px;
//   transition: all 0.2s;

//   &:hover {
//     background: #474747;
//     box-shadow: none;
//   }
//   & input:checked ~ div {
//     opacity: 1;
//   }
// `;

export const InputImage = styled.span<ImageProps>`
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;
  transition: all 0.2s;
`;

import React from 'react';

const StyledInput = ({ option, imgurl, price }: InputProps) => {
  return (
    <StyledLabel>
      <input
        type="checkbox"
        name={option}
        value={option + ' ' + price}
        className="absolute opacity-0 cursor-pointer h-0 w-0"
      ></input>
      <div className="imgContainer">
        <InputImage img={imgurl} className="checked" />
      </div>
      {option}
    </StyledLabel>
  );
};

export default StyledInput;
