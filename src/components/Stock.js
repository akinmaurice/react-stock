import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from './layout/Header';
import Chart from './Chart';

function Stock(props) {
  const [ isLoading, setLoading ] = useState(false);
  const [ xData, setXData ] = useState([]);
  const [ yData, setYData ] = useState([]);
  const [ isError, setError ] = useState(false);

  const canvasRef = useRef('canvas');

  const { code } = props.match.params;
  const API_KEY = 'DZ9OEQO2P5J1LXT9';

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${code}&apikey=${API_KEY}`;

  useEffect(() => {
    setLoading(true);
    axios.get(url)
    .then((response)=>{
    const { data } = response;
    let stockChartXValues = [];
    let stockChartYValues = [];
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
    });
  }, [code, url])

  let view = '';
  if(isLoading) {
    view = 'Loading Data...';
  }
  if(isError) {
    view = 'Could not load Data. Please try again';
  }
  if(xData.length > 0 && yData.length > 0) {
    view = (
      <Chart
        xData={xData}
        yData={yData}
        title='Stock Data'
        color='#70CAD1'
      />
    )
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
