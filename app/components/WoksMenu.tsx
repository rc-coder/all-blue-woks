import { Steps } from './Steps';
import { StepNumber } from './StepNumber';
import { sendOrder } from './forms/actions';
// import { InputImage, StyledInput } from './StyledInput';
import Image from 'next/image';
import StyledInput from './StyledInput';

const WoksMenu = () => {
  return (
    <div className="h-full w-full">
      <form className="flex flex-col gap-10 mt-16" action={sendOrder}>
        <Steps>
          <StepNumber className="numberL">1</StepNumber>
          <StyledInput option="Carne" price="100" imgurl="/assets/carne.jpg" />
          <StyledInput option="Pollo" price="100" imgurl="/assets/carne.jpg" />
          <StyledInput option="Langos" price="100" imgurl="/assets/carne.jpg" />
        </Steps>
        <Steps>
          <StepNumber className="numberR">2</StepNumber>Acompañantes
        </Steps>
        <Steps>
          <StepNumber className="numberL">3</StepNumber>Salsa
        </Steps>
        <button
          type="submit"
          className="border bg-slate-600 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Enviar pedido
        </button>
      </form>
    </div>
  );
};

export default WoksMenu;
