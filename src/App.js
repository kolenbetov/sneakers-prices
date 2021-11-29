import React, { useEffect, useState } from 'react';

const sortBySize = salesData => {
  let sortedData = {
    5: [],
    5.5: [],
    6: [],
    6.5: [],
    7: [],
    7.5: [],
    8: [],
    8.5: [],
    9: [],
    9.5: [],
    10: [],
    10.5: [],
    11: [],
    11.5: [],
    12: [],
    12.5: [],
    13: [],
    14: [],
    15: [],
    16: []
  };
  salesData.forEach(sale => {
    sortedData[sale.shoeSize].push(sale);
  });
  console.log(sortedData);
  return sortedData;
};

const App = () => {
  const [sneakerData, setSneakerData] = useState({
    data: [],
    sortedData: {},
    loading: true
  });

  //   // const getSneakerData = () => {
  //   //   return fetch(
  //   //     'https://stockx.com/api/products/air-jordan-1-low-pollen?includes=market'
  //   //   ).then(response =>
  //   //     response.json().then(data => {
  //   //       console.log(data);
  //   //       setSneakerData({ data: data, loading: false });
  //   //     })
  //   //   );
  //   // };

  const getSneakerPrices = () => {
    return fetch(
      // 'https://stockx.com/api/products/ba843fb6-49c6-4d19-ad72-22eb0f708cab/activity?limit=100&page=1&sort=createdAt&order=DESC&state=480&currency=USD&country=PL'
      'https://stockx.com/api/products/527c2947-a4e1-4a7f-a953-22761d7039ff/activity?limit=100&page=1&sort=createdAt&order=DESC&state=480&currency=USD&country=PL'
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.ProductActivity);
        setSneakerData({
          data: sortBySize(data.ProductActivity),
          loading: false
        });
      });
  };

  return (
    <div>
      <h2>SNEAKERS PRICES</h2>
      <input></input>
      <button onClick={getSneakerPrices}>Check the price</button>
      <br></br> <br></br>
      <br></br>
      <div className='App'>
        {sneakerData.loading
          ? ''
          : Object.keys(sneakerData.data).map(sneakerSizeData => (
              <SizeColumn
                sneakerSize={sneakerSizeData}
                salesDataBySize={sneakerData.data[sneakerSizeData]}
              />
            ))}
      </div>
    </div>
  );
};

const SaleInfo = props => {
  const date = new Date(props.date);
  return (
    <div>
      ${props.amount} {date.toLocaleDateString()}
    </div>
  );
};

const SizeColumn = props => {
  console.log(props.sneakerSize);
  return (
    <div>
      {props.sneakerSize}
      {props.salesDataBySize.map(saleData => (
        <SaleInfo amount={saleData.amount} date={saleData.createdAt} />
      ))}{' '}
    </div>
  );
};

// const App = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetch(
//       'https://stockx.com/api/products/527c2947-a4e1-4a7f-a953-22761d7039ff/activity?limit=100&page=1&sort=createdAt&order=DESC&state=480&currency=USD&country=PL'
//     )
//       .then(response => response.json())
//       .then(data => {
//         setContacts(data.ProductActivity);
//       });
//   }, []);

//   return (
//     <>
//       {contacts.map(contact => (
//         <SaleInfo
//           shoeSize={contact.shoeSize}
//           amount={contact.amount}
//           date={contact.date}
//         />
//       ))}
//     </>
//   );
// };

export default App;
