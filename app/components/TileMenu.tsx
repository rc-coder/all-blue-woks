import {
  bases,
  proteinas,
  salsas,
  toppings,
  vegetales as vegs,
} from '@/public/assets/data/mockData';
import {
  TileText,
  StyledGrid,
  Title,
  BaseOptions,
  BaseTitle,
  VegTitle,
  ProtTitle,
  SalsaTitle,
  ToppingsTitle,
  TitleContainer,
} from './tileElements';
import StyledInput from './StyledInput';
import { useOrderStore } from '@/store/orderStore';
import { useRouter } from 'next/navigation';

const TileMenu = () => {
  const router = useRouter();
  const { base, proteina, vegetales, salsa, topping } = useOrderStore(
    (state) => state
  );

  const submitOrder = (e: any) => {
    e.preventDefault();

    const order = {
      base,
      proteina,
      vegetales,
      salsa,
      topping,
    };

    console.log(order);

    router.push('/Order');
  };
  return (
    <form onSubmit={submitOrder} action={'/Order'}>
      <StyledGrid>
        <div className="row-span-4 border-2 border-white p-2 m-0 panel">
          <div className="bg-white h-full w-full">
            <Title>
              <div className="container">
                <h1>All blue woks</h1>
              </div>
            </Title>
          </div>
        </div>
        <div className="row-span-4 border-2 border-blue-600 bg-white p-2 m-0 panel">
          <div className="bg-blue-600 h-full w-full">
            <TileText>
              <span className="number">1</span>
              <h2>
                Elegí <br /> tu base <br /> preferida
              </h2>
              <span className="steps">
                <p>¡Tu wok en tres pasos!</p>
              </span>
            </TileText>
          </div>
        </div>
        <div className="col-span-2 row-span-4 border-2 border-slate-50 bg-red-600 m-0 p-10 panel">
          <TitleContainer>
            <section className="h-full w-full grid grid-cols-2 p-5 gap-5 relative">
              <BaseTitle className="sectionTitle">Bases</BaseTitle>
              {bases.map((base) => (
                <StyledInput
                  key={base.id}
                  option={base.name}
                  price={base.price}
                  imgurl="/assets/foodPlaceholder.jpg"
                  name="base"
                />
              ))}
            </section>
          </TitleContainer>
        </div>
        <div className="row-span-4 col-start-1 row-start-5 border-2 border-green-500 bg-white p-2 m-0 panel">
          <div className="bg-green-500 h-full w-full">
            <TileText>
              <span className="number">2</span>
              <h2>
                Combiná <br /> con tus <br /> acompañantes <br /> perfectos
              </h2>
            </TileText>
          </div>
        </div>
        <div className="col-span-2 row-span-4 col-start-3 row-start-5 border-2 border-slate-50 bg-orange-500 m-0 p-10 panel">
          <TitleContainer>
            <section className="h-full w-full grid grid-cols-3 p-5 gap-8 relative">
              <VegTitle className="sectionTitle">Vegetales</VegTitle>
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
          </TitleContainer>
        </div>
        <div className="row-span-4 col-start-2 row-start-5 border-2 border-slate-50 bg-yellow-500 m-0 py-12 panel">
          <TitleContainer>
            <section className="h-full w-full grid grid-cols-2 p-5 gap-5 relative">
              <ProtTitle className="sectionTitle">Proteínas</ProtTitle>
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
          </TitleContainer>
        </div>
        <div className="row-span-4 row-start-9 border-2 border-yellow-400 bg-white p-2 m-0 panel">
          <div className="bg-yellow-400 h-full w-full">
            <TileText>
              <span className="number">3</span>
              <h2>
                Completá <br /> con deliciosos <br /> Toppings
              </h2>
            </TileText>
          </div>
        </div>
        <div className="col-span-2 row-span-4 row-start-9 border-2 border-slate-50 bg-purple-600 m-0 p-10 panel">
          <TitleContainer>
            <section className="h-full w-full grid grid-cols-2 p-5 gap-8 relative">
              <SalsaTitle className="sectionTitle">Salsas</SalsaTitle>
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
          </TitleContainer>
        </div>
        <div className="row-span-4 col-start-4 row-start-9 border-2 border-slate-50 bg-blue-600 m-0 py-12 panel">
          <TitleContainer>
            <section className="h-full w-full grid grid-cols-2 p-5 gap-8 relative">
              <ToppingsTitle className="sectionTitle">Toppings</ToppingsTitle>
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
          </TitleContainer>
        </div>
      </StyledGrid>
      <button
        type="submit"
        className="border bg-slate-600 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        Enviar pedido
      </button>
    </form>
  );
};

export default TileMenu;
