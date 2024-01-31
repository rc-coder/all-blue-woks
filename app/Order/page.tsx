'use client';

import { useOrderStore } from '@/store/orderStore';
import { redirect, useRouter } from 'next/navigation';

const Order = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  const { base, proteina, vegetales, salsa, topping } = useOrderStore(
    (state) => state
  );
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h2>Base: </h2>
        <p>
          {base.name} {base.price}
        </p>
      </div>
      <div className="flex">
        <h2>ProteÍna: </h2>{' '}
        <p>
          {proteina.name} {proteina.price}
        </p>
      </div>
      <div className="flex">
        <h2>Vegetales: </h2>{' '}
        <p>{vegetales.map((veg) => veg.name + ' ' + veg.price)}</p>
      </div>
      <div className="flex">
        <h2>Salsa: </h2>{' '}
        <p>
          {salsa.name} {salsa.price}
        </p>
      </div>
      <div className="flex">
        <h2>Topping: </h2>{' '}
        <p>
          {topping.name} {topping.price}
        </p>
      </div>

      <button
        type="button"
        className="border bg-slate-600 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        onClick={handleClick}
      >
        Volver
      </button>
    </div>
  );
};

export default Order;
