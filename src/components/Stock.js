import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo';
function Stock() {
  const [ isLoading, setLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ isError, setError ] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log('calling effect');
    const data_key = 'Time Series (Daily)';
    axios.get(url)
    .then((response)=>{
      const { data } = response;
      const stockData = data[data_key];
      console.log(stockData);
      const stockArray = Object.values(stockData);
      setLoading(false);
      setData(stockArray);
      console.log(stockArray);
    })
    .catch((e)=>{
      setError(true);
      setLoading(false);
      console.log(e)
    })
  }, [])

  let view = '';
  if(isLoading) {
    view = 'Loading Data...';
  }
  if(isError) {
    view = 'Could not load Data. Please try again';
  }
  if(data.length > 0) {
    view = 'Got Data! Hello';
  }
  return (
    <div className="App">
      {view}
    </div>
  );
}

export default Stock;
