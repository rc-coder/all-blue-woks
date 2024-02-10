export const formatPrice = (price: any) => {
  return new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};
