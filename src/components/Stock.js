import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import Header from './layout/Header';

const url = 'https://www.quandl.com/api/v3/datasets/OPEC/ORB.json';
function Stock() {
  const [ isLoading, setLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ isError, setError ] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log('calling effect');
    axios.get(url)
    .then((response)=>{
      const { data: dataset } = response;
      const { data } = dataset.dataset;
      const totalLength = data.length;
      const limit = 100;
      const unused = totalLength - limit;
      data.splice(limit, unused);
      setData(data);
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
    const minX = d3.min(data.map(o => o[0]));
    const maxX = d3.min(data.map(o => o[0]));
    const minY = d3.min(data.map(o => o[1]));
    const maxY = d3.min(data.map(o => o[1]));

    let x = d3
    .scaleLinear()
    .domain([minX, maxX])
    .range([0, 300]);

    let y = d3
    .scaleLinear()
    .domain([minY, maxY])
    .range([100, 100/3]);

    view = 'Got Data! Hello';
  }
  return (
    <div>
      <Header />
      {view}
    </div>
  );
}

export default Stock;
