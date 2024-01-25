'use client';

import { useOrderStore } from '@/store/orderStore';
import styled from 'styled-components';

interface ImageProps {
  img: string;
}

interface InputProps {
  readonly option: string;
  readonly imgurl: string;
  price: string;
  name: string;
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px black;

  & input:checked ~ .imgContainer {
    background-color: var(--midnightGreen);
  }

  & .imgContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightgray;
    /* color: ${(props) => props.theme.gray}; */
    color: gray;
    box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.09);
    border-radius: 20%;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    transition: all 0.5s;

    &:hover {
      background: var(--midnightGreen);
      box-shadow: none;
    }
  }
`;

export const InputImage = styled.div<ImageProps>`
  border-radius: 20%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  height: 2.6rem;
  width: 2.6rem;
  transition: all 0.2s;
`;

// const StyledLabel = styled.label`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   width: 100%;

//   & input:checked ~ .imgContainer {
//     background-color: var(--midnightGreen);
//   }

//   & .imgContainer {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: var(--verdigris);
//     /* color: ${(props) => props.theme.gray}; */
//     color: gray;
//     box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.09);
//     border-radius: 10%;
//     cursor: pointer;
//     /* margin: 0 10px; */
//     height: 60px;
//     width: 60px;
//     transition: all 0.5s;

//     &:hover {
//       background: var(--midnightGreen);
//       box-shadow: none;
//     }
//   }
// `;

const StyledInput = ({ option, imgurl, price, name }: InputProps) => {
  const {
    setBase,
    setProteina,
    setVegetales,
    setSalsa,
    setTopping,
    setExtras,
  } = useOrderStore((state) => state);

  const chooseBase = (e: any) => {
    const name = e.target.value;
    const price = e.target.getAttribute('data-price');

    setBase(name, price);
  };

  const chooseProt = (e: any) => {
    const name = e.target.value;
    const price = e.target.getAttribute('data-price');

    setProteina(name, price);
  };

  const chooseVegs = (e: any) => {
    const name = e.target.value;
    const price = e.target.getAttribute('data-price');
    setVegetales(name, price);
  };

  const chooseSalsa = (e: any) => {
    const name = e.target.value;
    const price = e.target.getAttribute('data-price');

    setSalsa(name, price);
  };

  const chooseTop = (e: any) => {
    const name = e.target.value;
    const price = e.target.getAttribute('data-price');

    setTopping(name, price);
  };

  const chooseExtras = (e: any) => {
    const name = e.target.value;
    const price = e.target.getAttribute('data-price');

    setExtras(name, price);
  };

  switch (name) {
    case 'base':
      return (
        <StyledLabel>
          <input
            type="radio"
            name="base"
            value={option}
            className="absolute opacity-0 cursor-pointer h-0 w-0"
            onChange={chooseBase}
            data-price={price}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          {option}
        </StyledLabel>
      );
    case 'proteina':
      return (
        <StyledLabel>
          <input
            type="radio"
            name={name}
            value={option}
            className="absolute opacity-0 cursor-pointer h-0 w-0"
            onChange={chooseProt}
            data-price={price}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          {option}
        </StyledLabel>
      );
    case 'vegetales':
      return (
        <StyledLabel>
          <input
            type="checkbox"
            name={option}
            value={option}
            className="absolute opacity-0 cursor-pointer h-0 w-0"
            onChange={chooseVegs}
            data-price={price}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          {option}
        </StyledLabel>
      );
    case 'salsas':
      return (
        <StyledLabel>
          <input
            type="radio"
            name={name}
            value={option}
            className="absolute opacity-0 cursor-pointer h-0 w-0"
            onChange={chooseSalsa}
            data-price={price}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          {option}
        </StyledLabel>
      );
    case 'toppings':
      return (
        <StyledLabel>
          <input
            type="radio"
            name={name}
            value={option}
            className="absolute opacity-0 cursor-pointer h-0 w-0"
            onChange={chooseTop}
            data-price={price}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          {option}
        </StyledLabel>
      );
    case 'extras':
      return (
        <StyledLabel>
          <input
            type="checkbox"
            name={name}
            value={option}
            className="absolute opacity-0 cursor-pointer h-0 w-0"
            onChange={chooseTop}
            data-price={price}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          {option}
        </StyledLabel>
      );
    default:
      break;
  }

  //     return base ? (
  //     <StyledLabel>
  //       <input
  //         type="radio"
  //         name="base"
  //         value={option + ' ' + price}
  //         className="absolute opacity-0 cursor-pointer h-0 w-0"
  //       ></input>
  //       <div className="imgContainer">
  //         <InputImage img={imgurl} className="checked" />
  //       </div>
  //       {option}
  //     </StyledLabel>
  //   ) : (
  //     <StyledLabel>
  //       <input
  //         type="checkbox"
  //         name={option}
  //         value={option + ' ' + price}
  //         className="absolute opacity-0 cursor-pointer h-0 w-0"
  //       ></input>
  //       <div className="imgContainer">
  //         <InputImage img={imgurl} className="checked" />
  //       </div>
  //       {option}
  //     </StyledLabel>
  //   );
};

export default StyledInput;
