import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSneakerSalesData } from '../../actions/search-results-actions';

export const SearchResultsContainer = ({ results, onSelectSneaker }) => {
  return (
    <div className='card-deck'>
      {results == null
        ? ''
        : results.map(sneaker => (
            <div className='sneaker-card' key={sneaker.id}>
              <Link to={{ pathname: `/sneaker/${sneaker.urlKey}` }}>
                <img
                  className='small-image'
                  onClick={() => onSelectSneaker(sneaker)}
                  src={sneaker.media.smallImageUrl}
                  alt=''
                />
              </Link>
              <span className='sneaker-card-title'>{sneaker.title}</span>
            </div>
          ))}
    </div>
  );
};

const mapActionsToProps = { onSelectSneaker: getSneakerSalesData };

const mapStateToProps = state => {
  return { results: state.searchResults };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SearchResultsContainer);
