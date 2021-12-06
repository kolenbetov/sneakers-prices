import { sizes } from './nike-sizes';

export function sortBySize(gender, data) {
  let sortedData = sizes[gender];
  data.forEach(sale => {
    sortedData[sale.shoeSize].push(sale);
  });

  return sortedData;
}
