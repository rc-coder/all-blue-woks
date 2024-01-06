import React from 'react';
import { Steps } from './Steps';
import { StepNumber } from './StepNumber';

const WoksMenu = () => {
  return (
    <div className="w-full flex flex-col gap-10 mt-16">
      <Steps>
        <StepNumber className="numberL">1</StepNumber>
        Base
      </Steps>
      <Steps>
        {' '}
        <StepNumber className="numberR">2</StepNumber>Acompañantes
      </Steps>
      <Steps>
        {' '}
        <StepNumber className="numberL">3</StepNumber>Salsa
      </Steps>
    </div>
  );
};

export default WoksMenu;
