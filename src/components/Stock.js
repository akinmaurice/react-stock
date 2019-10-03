import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import Header from './layout/Header';

const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo';
function Stock() {
  const [ isLoading, setLoading ] = useState(false);
  const [ xData, setXData ] = useState([]);
  const [ yData, setYData ] = useState([]);
  const [ isError, setError ] = useState(false);

  const canvasRef = useRef('canvas');


  const fetchData = () => {
    setLoading(true);
    axios.get(url)
    .then((response)=>
    {
      let stockChartXValues = [];
      let stockChartYValues = [];
        const { data } = response;
        for(let key in data['Time Series (Daily)']) {
          stockChartXValues.push(key);
          stockChartYValues.push(data['Time Series (Daily)'][key]['1. open']);
        }
        setXData(stockChartXValues);
        setYData(stockChartYValues);
        setLoading(false);
      })
      .catch((e)=>{
        setError(true);
        setLoading(false);
        console.log(e)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  let view = '';
  if(isLoading) {
    view = 'Loading Data...';
  }
  if(isError) {
    view = 'Could not load Data. Please try again';
  }
  if(xData.length > 0) {
    view = 'Got Data! Hello';
  }
  return (
    <div className="text-center">
      <Header />
      <br />
      <div ref={canvasRef}>
        {view}
      </div>
    </div>
  );
}

export default Stock;
