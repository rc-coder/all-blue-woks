import { StepTitle, Steps, StepNumber, SubTitle } from './Steps';
import StyledInput from './StyledInput';
import {
  bases,
  proteinas,
  salsas,
  toppings,
  vegetales as vegs,
} from '@/public/assets/data/mockData';
import { useOrderStore } from '@/store/orderStore';

const WoksMenu = () => {
  const { base, proteina, vegetales, salsa, topping } = useOrderStore(
    (state) => state
  );

  const handleClick = (e: any) => {
    e.preventDefault();

    const order = {
      base,
      proteina,
      vegetales,
      salsa,
      topping,
    };

    console.log(order);
  };
  return (
    <div className="h-full w-full">
      <form className="flex flex-col gap-10 mt-16">
        <Steps>
          <StepNumber className="numberL">1</StepNumber>
          <StepTitle>Bases</StepTitle>
          {bases.map((base) => (
            <StyledInput
              key={base.id}
              option={base.name}
              price={base.price}
              imgurl="/assets/foodPlaceholder.jpg"
              name="base"
            />
          ))}
        </Steps>
        <Steps>
          <StepNumber className="numberR">2</StepNumber>
          <StepTitle>Acompañantes</StepTitle>
          <div
            className="h-full w-full flex flex-col items-center
          justify-around gap-5"
          >
            <section className="h-full w-full flex p-5 gap-5 relative">
              <SubTitle>Proteínas</SubTitle>
              {proteinas.map((prot) => (
                <StyledInput
                  key={prot.id}
                  option={prot.name}
                  price={prot.price}
                  imgurl="/assets/foodPlaceholder.jpg"
                  name="proteina"
                />
              ))}
            </section>
            <section className="h-full w-full grid grid-cols-4 p-5 gap-5 relative">
              <SubTitle>Vegetales</SubTitle>
              {vegs.map((veg) => (
                <StyledInput
                  key={veg.id}
                  option={veg.name}
                  price={veg.price}
                  imgurl="/assets/foodPlaceholder.jpg"
                  name="vegetales"
                />
              ))}
            </section>
          </div>
        </Steps>
        <Steps>
          <StepNumber className="numberL">3</StepNumber>
          <StepTitle>Salsas</StepTitle>
          <div
            className="h-full w-full flex flex-col items-center
          justify-around"
          >
            <section className="w-full h-auto grid grid-cols-2 p-10 gap-5">
              {salsas.map((salsa) => (
                <StyledInput
                  key={salsa.id}
                  option={salsa.name}
                  price={salsa.price}
                  imgurl="/assets/foodPlaceholder.jpg"
                  name="salsas"
                />
              ))}
            </section>
            <section className=" w-full h-auto flex p-10 gap-5">
              <SubTitle>Toppings</SubTitle>
              {toppings.map((top) => (
                <StyledInput
                  key={top.id}
                  option={top.name}
                  price={top.price}
                  imgurl="/assets/foodPlaceholder.jpg"
                  name="toppings"
                />
              ))}
            </section>
          </div>
        </Steps>
        <button
          type="submit"
          onClick={handleClick}
          className="border bg-slate-600 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Enviar pedido
        </button>
      </form>
    </div>
  );
};

export default WoksMenu;
