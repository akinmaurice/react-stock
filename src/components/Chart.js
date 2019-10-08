import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';

function Chart (props) {
  const { xData, yData } = props;
  console.log(xData);
  console.log(yData);
  const state = {
    labels: xData,
    datasets: [
      {
        label: 'Opening Price',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: yData
      }
    ]
  }
  return (
    <div>
      <Container className="text-center">
        <Row className="text-center">
        <Line
          data={state}
          height={450}
          options={{
            title:{
              display:true,
              text:'Stock Data',
              fontSize:15
            },
            legend:{
              display:true,
              position:'right'
            },
            maintainAspectRatio: false
          }}
        />
        </Row>
      </Container>

    </div>
  );
}

export default Chart;
