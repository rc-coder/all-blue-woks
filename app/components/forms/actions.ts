'use server';

import { revalidatePath } from 'next/cache';
import React from 'react';

export async function sendOrder(formData: FormData) {
  const order = Object.fromEntries(formData);

  console.log(formData);

  revalidatePath('/');
}
