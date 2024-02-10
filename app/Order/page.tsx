'use client';

import { useOrderStore } from '@/store/orderStore';
import { useRouter } from 'next/navigation';
import {
  OrderContainer,
  OrderItem,
  OrderTitle,
  OrderTotal,
} from '../components/orderElements';
import { Button } from '../components/tileElements';
import { formatPrice } from '@/public/assets/utils/format';

const Order = () => {
  const { base, proteina, vegetales, salsa, topping, reset } = useOrderStore(
    (state) => state
  );
  const router = useRouter();
  const goBack = () => {
    router.push('/');
    reset();
  };

  const vegPrices = vegetales.map((veg) => parseFloat(veg.price));
  const vegTotal = vegPrices.length > 0 ? vegPrices.reduce(reduceVegs) : 0;
  function reduceVegs(total: number, price: number) {
    return total + price;
  }

  const totalPrice =
    parseFloat(base.price) +
    parseFloat(proteina.price) +
    vegTotal +
    parseFloat(salsa.price) +
    parseFloat(topping.price);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-4">
      <div className="bg-slate-200 rounded-2xl p-2">
        <OrderContainer>
          <OrderTitle>Su Orden</OrderTitle>
          <OrderItem>
            <h2>Base:</h2>
            <span className="bg-red-600">
              <p>{base.name}</p>
              <p>{formatPrice(base.price)}</p>
            </span>
          </OrderItem>
          <OrderItem>
            <h2>Proteína:</h2>
            <span className="bg-yellow-500">
              <p>{proteina.name}</p>
              <p>{formatPrice(proteina.price)}</p>
            </span>
          </OrderItem>
          <OrderItem>
            <h2>Vegetales:</h2>
            {vegetales.length !== 0 ? (
              vegetales.map((veg) => (
                <span key={veg.name} className="bg-orange-500">
                  <p>{veg.name}</p> <p>{formatPrice(veg.price)}</p>
                </span>
              ))
            ) : (
              <span className="bg-orange-500">
                <p></p>
                <p>{formatPrice(0)}</p>
              </span>
            )}
          </OrderItem>
          <OrderItem>
            <h2>Salsa:</h2>
            <span className="bg-purple-600">
              <p>{salsa.name}</p>
              <p>{formatPrice(salsa.price)}</p>
            </span>
          </OrderItem>
          <OrderItem>
            <h2>Topping:</h2>
            <span className="bg-blue-600">
              <p>{topping.name}</p>
              <p>{formatPrice(topping.price)}</p>
            </span>
          </OrderItem>
          <OrderTotal>
            <h2>Total</h2>
            <p>{formatPrice(totalPrice)}</p>
          </OrderTotal>
        </OrderContainer>
      </div>
      <div className="px-20">
        <Button>
          <button onClick={goBack}>Volver</button>
        </Button>
      </div>
    </div>
  );
};

export default Order;
