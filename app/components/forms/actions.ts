'use server';

import { revalidatePath } from 'next/cache';

export async function sendOrder(formData: FormData) {
  const order = Object.fromEntries(formData.entries());

  console.log(order);

  revalidatePath('/');
}
