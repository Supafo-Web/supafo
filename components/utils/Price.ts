export const formatPrice = (value: string | number, currency: string = 'TRY') => {
   return `${currency} ${new Intl.NumberFormat('tr-TR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   }).format(Number(value))}`
}
