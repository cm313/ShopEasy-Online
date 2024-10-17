export function formatCurrency(priceCents){
 return (Math.round(priceCents) / 10).toFixed(2);
}