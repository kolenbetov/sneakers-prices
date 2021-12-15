import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearSneakerSalesData } from '../../actions/search-results-actions';
import { SizeSalesColumnContainer } from './size-sales-column';
import { sizes } from '../../sizes/nike-sizes';

export const SneakerDataContainer = ({
  sneakerData,
  clearSneakerSalesData
}) => {
  useEffect(() => {
    return () => {
      clearSneakerSalesData();
    };
  }, []);

  return sneakerData != null && Object.keys(sneakerData).length > 0 ? (
    <div>
      <div className='sneaker-header'>
        <Link to={{ pathname: `/` }} className='sneaker-header_back-link'>
          {'< go back to results'}
        </Link>
        <div className='sneaker-header_name'>{sneakerData.shoe}</div>
      </div>
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
                        sneakerSize={`${sneakerSize} (${
                          sizes[sneakerData.gender][sneakerSize]
                        })`}
                        salesDataBySize={sneakerData.salesData[sneakerSize]}
                      />
                    );
                })}
        </div>
      </div>
    </div>
  ) : (
    ''
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
