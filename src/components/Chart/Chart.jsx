import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'

const data = (canvas) => {
    defaults.global.defaultFontFamily = 'Montserrat';
    defaults.global.defaultFontStyle = 'bold';
    const context = canvas.getContext("2d");
    var gradient = context.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, 'rgba(27,191,228,1)');
    gradient.addColorStop(1, 'rgba(27,191,228,0)');   

    return {
  labels: ["Jun '19", "Jul '19", "Aug '19", "Sep '19", "Oct '19", "Nov '19", "Dec '19"],
  datasets: [
    {
      label: 'Individuals',
      fill: true,
      backgroundColor: gradient,
      lineTension: 0.5,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [8, 1, 3, 0, 0.5, 0, 10],
      stepSize: 3
    }
  ]
  }
} ;

export default class Chart extends Component {
  render() {
    var chartOptions = {
      scales: {
        yAxes: [{
	  gridLines: {
            display: false
          },
          ticks: {
	    stepSize: 3
          }
        }],
        yAxes: [{
	  gridLines: {
            display: false
          },
          ticks: {
	    stepSize: 3
          }
        }]
      }
    }

    return (
      <div>
        <Line ref="chart" data={data} options={chartOptions} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}
