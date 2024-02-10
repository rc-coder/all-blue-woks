'use client';

import { formatPrice } from '@/public/assets/utils/format';
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

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

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

const StyledInput = ({ option, imgurl, price, name }: InputProps) => {
  const {
    setBase,
    setProteina,
    setVegetales,
    removeVegetal,
    setSalsa,
    setTopping,
    setExtras,
    removeExtra,
    vegetales,
    extras,
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

    const vegNames = vegetales.map((veg) => veg.name);

    if (vegNames.includes(name)) {
      removeVegetal(name);
    } else {
      setVegetales(name, price);
    }
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

    const extNames = extras.map((ext) => ext.name);

    if (extNames.includes(name)) {
      removeExtra(name);
    } else {
      setExtras(name, price);
    }
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
            data-price={price ? price : 0}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          <span>
            {option} {formatPrice(price)}
          </span>
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
            data-price={price ? price : 0}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          <span>
            {option} {formatPrice(price)}
          </span>
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
            data-price={price ? price : 0}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          <span>
            {option} {formatPrice(price)}
          </span>
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
            data-price={price ? price : 0}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          <span>
            {option} {formatPrice(price)}
          </span>
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
            data-price={price ? price : 0}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          <span>
            {option} {formatPrice(price)}
          </span>
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
            data-price={price ? price : 0}
          ></input>
          <div className="imgContainer">
            <InputImage img={imgurl} className="checked" />
          </div>
          <span>
            {option} {formatPrice(price)}
          </span>
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
