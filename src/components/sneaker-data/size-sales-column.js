import { SaleInfoContainer } from './sale-info';

export const SizeSalesColumnContainer = props => {
  return (
    <div className='column'>
      <div className='column-header'>{props.sneakerSize} </div>
      {props.salesDataBySize.slice(0, 9).map(saleData => (
        <SaleInfoContainer
          key={saleData.chainId}
          amount={saleData.amount}
          date={saleData.createdAt}
        />
      ))}
    </div>
  );
};
