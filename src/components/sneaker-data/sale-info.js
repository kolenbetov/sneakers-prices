export const SaleInfoContainer = props => {
  const date = new Date(props.date);
  const payout = Math.round(props.amount * 0.88);

  return (
    <div className='column-item'>
      <div className='item-price'>
        ${payout} (${Math.round(props.amount)})
      </div>
      <div className='sale-date'>
        {date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}
      </div>
    </div>
  );
};
