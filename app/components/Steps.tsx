'use client';

import styled from 'styled-components';

export const Steps = styled.section`
  border: 6px double var(--xanthous);
  width: 100%;
  height: auto;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;

  & .numberL {
    color: aqua;
    position: absolute;
    left: -25px;
    top: -25px;
  }

  & .numberR {
    color: aqua;
    position: absolute;
    right: -25px;
    top: -25px;
  }
`;

export const StepNumber = styled.div`
  border: 6px double var(--red);
  background-color: var(--black);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
`;

export const StepTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -30px;
  background-color: var(--black);
  border-top: 4px double var(--yellow);
  border-bottom: 4px double var(--yellow);
  padding: 3px 20px;
  border-radius: 5px;
  font-size: x-large;
  color: var(--white);
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  border-right: 4px double var(--yellow);
  padding: 0px 20px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  color: var(--white);
`;
