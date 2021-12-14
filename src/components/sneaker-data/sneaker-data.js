import { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearSneakerSalesData } from '../../actions/search-results-actions';
import { SizeSalesColumnContainer } from './size-sales-column';

export const SneakerDataContainer = ({
  sneakerData,
  clearSneakerSalesData
}) => {
  useEffect(() => {
    return () => {
      clearSneakerSalesData();
    };
  }, []);

  return sneakerData == null ? (
    ''
  ) : (
    <div>
      <div className='sneaker-header_name'>{sneakerData.shoe}</div>
      <div className='sneaker-info-container'>
        <img className='large-image' src={sneakerData.media.imageUrl} alt='' />
        <div className='sneaker-info-details'>
          <h3>{sneakerData.name}</h3>
          <p>SKU: {sneakerData.styleId}</p>
        </div>{' '}
      </div>
      <div className='grid-container'>
        <div className='grid'>
          {sneakerData.salesData == null
            ? ''
            : Object.keys(sneakerData.salesData)
                .sort((a, b) => {
                  return a - b;
                })
                .map(sneakerSize => {
                  if (sneakerData.salesData[sneakerSize].length > 0)
                    return (
                      <SizeSalesColumnContainer
                        key={sneakerSize}
                        sneakerSize={sneakerSize}
                        salesDataBySize={sneakerData.salesData[sneakerSize]}
                      />
                    );
                })}
        </div>
      </div>
    </div>
  );
};

const mapActionsToProps = {
  clearSneakerSalesData
};

const mapStateToProps = state => {
  return { sneakerData: state.sneakerData };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SneakerDataContainer);
