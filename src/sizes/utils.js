import { sizes } from './nike-sizes';

export function sortBySize(gender, data) {
  let sortedData = {};
  Object.keys(sizes[gender]).map(sizeUs => (sortedData[sizeUs] = []));
  data.forEach(sale => {
    sortedData[sale.shoeSize].push(sale);
  });

  return sortedData;
}
